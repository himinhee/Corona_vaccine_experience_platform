import React, { useState } from "react";
import DefaultAvatar from "../../assets/global/profile.png";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Comment from "../common/comment/Comment";
import codemgmt from "../../modules/codemgmt";
import LoadingComponent from "../common/loading/LoadingComponent";

const DetailWrap = styled(Responsive)`
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailPostBlock = styled.div`
  padding: 1rem 1rem;
  max-width: 50rem;
  box-sizing: border-box;
  position: static;

  @media (max-width: 768px) {
    width: 100%;
  }
  & + & {
    margin-top: 2rem;
  }
`;

const ProfileWrap = styled.div`
  display: flex;
`;

const ProfileImageWrap = styled.div`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  height: 100%;
  max-width: 100%;
  left: 50%;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.05);

  position: relative;
  border-radius: 50%;
  transform: translateX(-50%);
`;
const PostItemInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.7rem;
`;

const PostItemDate = styled.div`
  font-size: 1.1rem;
  color: grey;
  margin-top: 0.3rem;
`;

const ProfileInfoWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;

  .nickName {
    font-weight: bold;
    margin-right: 0.7rem;
  }

  .profile {
    color: grey;
  }

  .dot {
    margin: 0 0.2rem;
  }
`;

const StyledMaleIcon = styled(BsGenderMale)`
  font-weight: bolder;
  vertical-align: bottom;
  color: blue;
  stroke: blue;
  stroke-width: 0.7px;
`;
const StyledFemaleIcon = styled(BsGenderFemale)`
  font-weight: bolder;
  vertical-align: bottom;
  color: red;
  stroke: red;
  stroke-width: 0.7px;
`;

const PostContentWrap = styled.div`
  margin-top: 2rem;
`;

const PostCategory = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: grey;
`;

const PostTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bolder;
`;

const PostContent = styled.div`
  font-size: 1.3rem;
  margin-top: 2rem;
`;

const PostTags = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const PostTagsItem = styled.div`
  font-size: 1.2rem;
  color: grey;
  & + & {
    margin-left: 0.1rem;
  }
`;

function DetailPost({ eachPost, writerInfo, loading }) {
  //   category: 2
  // comments: []
  // content: "<p>증말 아파요</p><p>으아아앙아아</p>"
  // publishDate: "2021-10-15T08:09:40.059Z"
  // tags: ['아프다']
  // title: "두번째 후기"
  // updateDate: null
  // writer: "6167f3d4c488703667487aa6"
  // __v: 0
  // _id: "61693744f8da2198019a40de"

  // bDay: "2000-10-11T00:00:00.000Z"
  // email: "test@email.com"
  // gender: 1
  // inoInfo: Array(2)
  // 0: {degree: 1, vaccineType: 'Moderna', inoDate: '2021-10-15T00:00:00.000Z', _id: '61693d6eaff992d9a452dd59'}
  // 1: {degree: 2, vaccineType: 'AZ', inoDate: '2021-10-20T00:00:00.000Z', _id: '61693d6eaff992d9a452dd5a'}
  // length: 2
  // [[Prototype]]: Array(0)
  // nickName: "nickname"
  // password: null
  // profileImage: "https://flowersleetest.s3.ap-northeast-2.amazonaws.com/1634286950794.JPG"
  // signupDate: "2021-10-14T03:26:26.296Z"
  // updateDate: "2021-10-15T08:35:58.339Z"

  const {
    category,
    comments,
    content,
    publishDate,
    tags,
    title,
    updateDate,
    writer,
    _id,
  } = eachPost;
  const { bDay, gender, inoInfo, nickName, profileImage } = writerInfo;
  console.log(eachPost);
  console.log(writerInfo);
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <DetailWrap>
          <DetailContainer>
            <DetailPostBlock>
              <ProfileWrap>
                <ProfileImageWrap>
                  <ProfileImage src={profileImage} />
                </ProfileImageWrap>
                <PostItemInfoWrap>
                  <ProfileInfoWrap>
                    <span className="nickName">
                      {nickName && nickName}
                      {codemgmt.reverseCodeTable("gender", gender) ===
                      "남자" ? (
                        <StyledMaleIcon />
                      ) : (
                        <StyledFemaleIcon />
                      )}
                    </span>
                    <span className="profile">모더나</span>
                    <span className="dot">·</span>
                    <span className="profile">1차</span>
                    <span className="dot">·</span>
                    <span className="profile">20대</span>
                  </ProfileInfoWrap>
                  {/* 시간 남으면 1분전, 2시간전... 등 같이 만들어보기 */}
                  <PostItemDate>2021-10-14 / 13:33</PostItemDate>
                </PostItemInfoWrap>
              </ProfileWrap>
              <PostContentWrap>
                <PostCategory>후기</PostCategory>
                <PostTitle>오늘 모더나 백신 맞고 왔습니다.</PostTitle>
                <PostContent>
                  오늘 백신 맞고 왔습니다... 많이 아프네요.. 다들 힘내시길...{" "}
                  <br /> 힘내시길 바래요 힘내시길 바래요 힘내시길 바래요
                  힘내시길 바래요 힘내시길 바래요
                </PostContent>
                <PostTags>
                  <PostTagsItem>#모더나</PostTagsItem>
                  <PostTagsItem>#부작용</PostTagsItem>
                  <PostTagsItem>#아픔</PostTagsItem>
                </PostTags>
              </PostContentWrap>
              <Comment />
            </DetailPostBlock>
          </DetailContainer>
        </DetailWrap>
      )}
    </>
  );
}

export default DetailPost;
