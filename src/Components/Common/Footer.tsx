import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <Divs>
            <Text>Home Pages</Text>
            <Line>Home1</Line>
            <Line>Home1</Line>
            <Line>Home1</Line>
          </Divs>
          <Divs>
            <Text>Courses</Text>
            <Line>All Courses</Line>
            <Line>Design</Line>
            <Line>Development</Line>
            <Line>Marketing</Line>
            <Line>Photography</Line>
          </Divs>
          <Divs>
            <Text>Pages</Text>
            <Line>Blog</Line>
            <Line>Blog Details</Line>
            <Line>Courses</Line>
            <Line>Contact Us</Line>
            <Line>Teacher Profile</Line>
            <Line>404 Page</Line>
          </Divs>
          <Divs>
            <Text>Features</Text>
            <Line>Course Detail V1</Line>
            <Line>Course Detail V2</Line>
          </Divs>
        </Main>
        <Lineline>
          <Small></Small>
        </Lineline>
        ,
        <Wrapper>
          <Comment>
            © 2021 Skilify Education Private Limited. All rights reserved
          </Comment>
          <Hold><AiFillFacebook color="silver" size={30}/><AiFillLinkedin color="silver" size={30}/><AiFillInstagram color="silver" size={30}/><AiOutlineGoogle color="silver" size={30}/></Hold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer;

const Hold = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 15%;
`;

const Wrapper = styled.div`
background-color: #33333d;
width: 100%;
margin-bottom: 5px;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
transition: all 350ms;

:hover{
    color: white;
    cursor: pointer;
}
`;

const Comment = styled.div`
margin-left: 60px;
margin-bottom: 10px;
color: silver;
`;

const Small = styled.div`
  width: 90%;
  height: 3px;
  border-bottom: 1px solid silver;
`;

const Lineline = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  margin: 15px 0px;
  font-size: 18px;
  color: silver;

  :hover {
    color: white;
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: 25px;
  color: white;
`;

const Divs = styled.div`
  width: 250px;
  height: 300px;
  margin-top: 70px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #33333d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
