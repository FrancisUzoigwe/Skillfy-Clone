import React from "react";
import styled from "styled-components";
import But from "../Components/ReUse/But";
import Vieww from "../Components/ReUse/View";
import man from "../Assets/crd-img.webp";
import school from "../Assets/crd-img2.webp";
import img from "../Assets/crd-img3.webp";
import img1 from "../Assets/profile-img1.webp";
import img0 from "../Assets/profile-img.webp";
import img2 from "../Assets/profile-img2.webp";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const ChoiceCourse = () => {
  return (
    <div>
      <Container>
        <Main>
          <First>
            <Text>Get choice of your course</Text>{" "}
            <But text="View All" c="white" bc="#F56962" />
          </First>
          <Watch>
            <Vieww
              ratetext="4.5"
              viewtext="49,000"
              playtext="9"
              title="Learn Python Programming Beginner"
              profilename="Petey Cruiser"
              price1="150.00"
              price="200.00"
              image={man}
              smallimg={img2}
            />
            <Vieww
              title="Statistics Data Science and Business Analysis"
              playtext="7"
              viewtext="23,000"
              ratetext="4.3"
              profilename="Nicole Brown"
              price1="99.99"
              price="150"
              image={school}
              smallimg={img0}
            />
            <Vieww
              title="Learn HTML5 Programming Beginning"
              viewtext="70,000"
              playtext="15"
              ratetext="4.7"
              profilename="Anna Sthesia"
              price1="70.00"
              price="100.00"
              image={img}
              smallimg={img1}
            />
          </Watch>
          <Line>
            <Block>
              <AiOutlineArrowLeft size={25} />
            </Block>
            <LineLeft></LineLeft>
            <LineRight></LineRight>
            <Block1>
              <AiOutlineArrowRight size={25} />
            </Block1>
          </Line>
        </Main>
      </Container>
    </div>
  );
};

export default ChoiceCourse;

const LineLeft = styled.div`
  width: 45%;
  height: 3px;
  background-color: orange;
  border-radius: 5px;
`;

const LineRight = styled.div`
  width: 45%;
  height: 3px;
  background-color: grey;
  border-radius: 5px;
`;

const Block1 = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    color: orange;
  }
`;

const Block = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    color: orange;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Watch = styled.div`
  width: 100%;
  height: 485px;
  /* margin-top: 30px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 40px;
  color: #302d3a;
`;

const First = styled.div`
  width: 100%;
  height: 60px;
  margin-top: -20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 900px;
  background-color: #efeff6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
