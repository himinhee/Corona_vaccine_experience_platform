const user = require("../../models/user");
const jwtModule = require("../../modules/jwtModule");

const authController = {
  signup: async function (req, res) {
    const { email, password, nickName } = req.body;
    try {
      const checkEmail = await user.findOne({ email: email });
      const checkNickName = await user.findOne({ nickName: nickName });

      if (!checkEmail && !checkNickName) {
        const userModel = new user({ email, nickName, password });
        await userModel.save();
        return res.status(200).json({
          message: "신규 가입 성공",
        });
      } else if (checkEmail) {
        return res.status(409).json({
          message: "동일한 email이 존재합니다.",
        });
      } else if (checkNickName) {
        return res.status(409).json({
          message: "동일한 닉네임이 존재합니다.",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "서버 에러",
        error: error,
      });
    }
  },
  signin: async function (req, res) {
    const { email, password } = req.body;
    try {
      const result = await user.findOne({ email: email });

      if (!result) {
        return res.status(409).json({
          message: "해당 email이 존재하지 않습니다.",
        });
      } else {
        //해당 id의 유저가 존재하는 경우, 비밀번호를 확인하여 isMatch로 결과 반환
        result.comparePassword(password, (err, isMatch) => {
          if (isMatch) {
            console.log("pw 일치");
            //id&pw 일치 시 jwt token 생성 - id와 이름을 담음
            const payload = {
              email: result.email,
              verified: result.verified,
            };
            const token = jwtModule.create(payload);
            console.log(token);

            return res.status(200).json({
              message: "로그인 성공",
              accessToken: token,
            });
          } else {
            console.log("pw 불일치");
            return res.status(409).json({
              message: "비밀번호가 틀렸습니다.",
            });
          }
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "서버 에러",
        error: error,
      });
    }
  },
};

module.exports = authController;
