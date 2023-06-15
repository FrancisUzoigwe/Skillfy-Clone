import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiStar } from "react-icons/fi";

const Havetosay = () => {
  return (
    <div>
      <Container>
        <Main>
          <First>
            <Text>What our students have to say</Text>
            <Butt>
              <Left>
                <Icon>
                  <AiOutlineArrowLeft size={25} />
                </Icon>
              </Left>
              <Right>
                <Icon>
                  <AiOutlineArrowRight size={25} />
                </Icon>
              </Right>
            </Butt>
          </First>
          <Second>
            <Testimonial>
              <ProfileHold>
                <Profile>
                  <Image></Image>
                  <NameHold>
                    <Names>Williams taylor</Names>
                    <Ocuu>Student</Ocuu>
                  </NameHold>
                  <Stars>
                    <FiStar color="orange" size={20} />
                    <FiStar color="orange" size={20} />
                    <FiStar color="orange" size={20} />
                    <FiStar color="orange" size={20} />
                    <FiStar color="orange" size={20} />
                  </Stars>
                </Profile>
                <Details></Details>
              </ProfileHold>
            </Testimonial>
          </Second>
        </Main>
      </Container>
    </div>
  );
};

export default Havetosay;

const NameHold = styled.div``;

const Ocuu = styled.div`
  color: #9798a0;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
`;

const Names = styled.div`
  color: #5f5982;
  font-size: 24px;
`;

const Stars = styled.div``;

const Profile = styled.div`
  width: 100%;
  height: 130px;
  background: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.div``;

const ProfileHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Testimonial = styled.div`
  width: 45%;
  height: 230px;
  background-color: white;
  border-radius: 0px 40px 0px 40px;
`;

const Second = styled.div`
  width: 100%;
  height: 350px;
  background: #efeff6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

const Left = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  transition: all 350ms;
  :hover {
    color: orange;
    cursor: pointer;
  }
`;

const Right = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Butt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`;

const First = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  flex-direction: column;
  width: 90%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #efeff6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
