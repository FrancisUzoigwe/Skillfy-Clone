import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Testimony from "../Components/ReUse/Testimony";
import user from "../Assets/user.webp"
import user1 from "../Assets/user1.webp"

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
         <Testimony name="William Taylor" occu="Student" details="Skillfy is the best platform to learn new technologies and courses. I have learned a lot many things from this platform." image={user1}/>
         <Testimony name="Oliver Smith" occu="Student" details="If you search for a platform that can provide you the best learning ccourses, then I would recommend the Skillfy only." image={user}/>
          </Second>
        </Main>
      </Container>
    </div>
  );
};

export default Havetosay;



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
