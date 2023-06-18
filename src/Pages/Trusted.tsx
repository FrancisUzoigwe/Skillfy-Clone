import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import img from "../Assets/partner.webp"
import img1 from "../Assets/partner1.webp"
import img2 from "../Assets/partner2.webp"
import img3 from "../Assets/partner3.webp"
import img4 from "../Assets/partner4.webp"




const Trusted = () => {
  return (
    <div>
      <Container>
        <Main>
          <First>
            <Text>Trusted by our awesome partners</Text>
            <Dir>
              <Left>
                <AiOutlineArrowLeft size={25} />
              </Left>
              <Right>
                <AiOutlineArrowRight size={25} />
              </Right>
            </Dir>
          </First>
          <Card src={img}/>
          <Card src={img1}/>
          <Card src={img2}/>
          <Card src={img3}/>
          <Card src={img4}/>
        </Main>
      </Container>
    </div>
  );
};

export default Trusted;
const Card = styled.img`
width: 180px;
height: 100px;
border: 1px solid black;
margin: 50px 26px;
object-fit: contain;
background: white;
border-radius: 5px;
border: none;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #302d3a;
`;

const Left = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  background-color: #efeff6;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    color: orange;
  }
`;

const Right = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 5px;
  background-color: #efeff6;
  transition: all 350ms;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    color: orange;
  }
`;

const Dir = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
`;

const First = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

const Main = styled.div`
  /* display: flex; */
  width: 90%;
  height: 100%;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
