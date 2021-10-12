const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtSecret.json");

const jwtModule = {
  //jwt 생성
  create: (payload) => {
    const option = {
      algorithm: "HS256",
      expiresIn: "30d",
      issuer: "ssac",
    };
    const token = jwt.sign(payload, jwtSecret.secretKey, option);

    return token;
  },
  //jwt 확인
  verify: (token) => {
    let decoded;
    try {
      decoded = jwt.verify(token, jwtSecret.secretKey);
    } catch (error) {
      if (error.message === "jwt expired") {
        console.log("expired token");
        return -1;
      } else if (error.message === "invalid token") {
        console.log("invalid token");
        return -2;
      } else {
        console.log("token error etc.");
        return -3;
      }
    }
    return decoded;
  },
};

module.exports = jwtModule;
