import React from "react";
import styled from "styled-components";
import But from "../Components/ReUse/But";
import circle1 from "../Assets/circle1.png";
import circle5 from "../Assets/circle5.png";
import image2 from "../Assets/circle2.png";
import image3 from "../Assets/circle3.png";
import image4 from "../Assets/circle6.png";
import image5 from "../Assets/circle7.png";

const Join = () => {
  return (
    <div>
      <Container>
        <Main>
          <BigText>Select the best from various online courses.</BigText>
          <SmallText>
            Our online video courses give you the freedom to learn remotely, and
            our experts will <br /> guide you properly.
          </SmallText>
          <ButtonHold>
            <But text="Join Today" c="white" bc="#F56962" />
          </ButtonHold>
          <Image alt="Show Image" src={image5} />
          <Image2 alt="Show Image" src={image4} />
          <Image3>
            <Sub></Sub>
          </Image3>
          <Image4 alt="Show Image" src={circle5} />
          <Image5 alt="Show Image" src={circle1} />
          <Image6 alt="Show Image" src={image3} />
          <Image7 alt="Show Image" src={image2} />
          <Image8>
            <Sub></Sub>
          </Image8>
        </Main>
      </Container>
    </div>
  );
};

export default Join;

const Sub = styled.div`
  border: 30px red;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fef0ef;
`;

const Image8 = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f56962;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 50px;
  margin-top: 30px;
  margin-right: 960px;
  object-fit: cover;
`;
const Image7 = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  margin-top: 120px;
  margin-right: 1130px;
`;
const Image6 = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: green;
  position: absolute;
  margin-top: 250px;
  margin-right: 990px;
`;
const Image5 = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: yellow;
  position: absolute;
  margin-bottom: 250px;
  margin-right: 1000px;
`;
const Image4 = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: purple;
  position: absolute;
  margin-bottom: 240px;
  margin-left: 850px;
`;
const Image3 = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f56962;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 240px;
  margin-left: 1100px;
`;
const Image2 = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: peachpuff;
  position: absolute;
  margin-top: 50px;
  margin-left: 980px;
`;
const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  margin-top: 200px;
  margin-left: 700px;
`;

const ButtonHold = styled.div`
  margin-top: 30px;
`;

const SmallText = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  color: #4f4f4f;
`;

const BigText = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #302d3a;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  background: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
`;
