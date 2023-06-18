import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import girl from "../Assets/girl-img-study.webp";
import pic from "../Assets/dots-pattern-pink.svg";
import pic1 from "../Assets/dots-pattern-pink.svg";


const HomeScreen = () => {
  return (
    <div id="homescreen">
      <Container>
        <Main>
          <MainLeft>
            <TextHold>
              <BigText>
                Learn more and make <br />
                success the result of <br />
                perfection.
              </BigText>
              <SmallText>
                Pick from over 100,000 online video courses with <br />
                new additions published every month.
              </SmallText>
              <InputHold>
                <Input placeholder="Search Your Favourite Course" required />
                <SearchIcon />
              </InputHold>
            </TextHold>
            <Pic1 src={pic1} />
          </MainLeft>
          <MainRight>
            <GirlHold src={girl} />
            <Pic src={pic} />
          </MainRight>
        </Main>
      </Container>
    </div>
  );
};

export default HomeScreen;

const Pic1 = styled.img`
  position: absolute;
  margin-left: -110px;
  margin-top: -110px;
  overflow: hidden;
`;

const Pic = styled.img`
  position: absolute;
  margin-left: 30px;
  margin-top: 130px;
`;

const GirlHold = styled.img`
  width: 450px;
  height: 600px;
  margin-top: 50px;
  margin-left: 50px;
  border-radius: 30px;
  object-fit: cover;
`;

const SmallText = styled.div`
  font-size: 25px;
  color: #212529;
`;

const BigText = styled.h1`
  font-size: 51px;
  line-height: 60px;
  margin-top: 180px;
  color: #212529;
`;

const Input = styled.input`
  height: 49px;
  width: 570px;
  outline: none;
  border: none;
  border-radius: 3px 0px 0px 3px;
  font-size: 17px;

  ::placeholder {
    font-size: 18px;
    color: #8e8e8e;
    padding-left: 5px;
  }
`;

const SearchIcon = styled(FiSearch)`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=17, Direction=0, Color=#F56962)"; /*IE 8*/
    -moz-box-shadow: 0 19px 17px rgba(245, 105, 98, 0.5); /*FF 3.5+*/
    -webkit-box-shadow: 0 19px 17px rgba(245, 105, 98, 0.5); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
    box-shadow: 0 19px 17px rgba(245, 105, 98, 0.5); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Shadow(Strength=17, Direction=135, Color=#F56962); /*IE 5.5-7*/
  }
`;

const InputHold = styled.div`
  height: 50px;
  width: 600px;
  background-color: #f56962;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=29, Direction=93, Color=#F56962)"; /*IE 8*/
  -moz-box-shadow: 1px 19px 29px -14px rgba(245, 105, 98, 0.4); /*FF 3.5+*/
  -webkit-box-shadow: 1px 19px 29px -14px rgba(245, 105, 98, 0.4); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 1px 19px 29px -14px rgba(245, 105, 98, 0.4); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=29, Direction=135, Color=#F56962); /*IE 5.5-7*/
`;

const TextHold = styled.div``;

const MainLeft = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const MainRight = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const Main = styled.div`
  width: 90%;
  margin-top: 60px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 800px;
  background-color: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
