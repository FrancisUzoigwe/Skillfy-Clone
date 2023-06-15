import styled from "styled-components";
import checkpoint from "../Assets/check-point.svg";
import But from "../Components/ReUse/But";

const Moreclose = () => {
  return (
    <div>
      <Container>
        <Main>
          <MainLeft>
            <Wrapper>
              <Text>
                Get more close with your <br />
                courses.
              </Text>
              <Smalltext>
                We provide a wide range of courses for the different <br />
                sectors you can choose from, which suits you perfectly
              </Smalltext>
              <Holder>
                <Icon src={checkpoint} />
                <Description>Detail description of each course</Description>
              </Holder>
              <Holder>
                <Icon src={checkpoint} />
                <Description>Easy to understand language</Description>
              </Holder>
              <Holder>
                <Icon src={checkpoint} />
                <Description>Simple and easy to learn courses.</Description>
              </Holder>
              <ButtonHold>
                <But text="Start Learning Now" c="white" bc="#F56962" />
              </ButtonHold>
            </Wrapper>
          </MainLeft>
          <MainRight>
            <MainRightSub>
              <Rightimg></Rightimg>
            </MainRightSub>
          </MainRight>
        </Main>
      </Container>
    </div>
  );
};

export default Moreclose;

const ButtonHold = styled.div`
  margin-top: 30px;
  width: 300px;
  height: 100px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
`;

const Smalltext = styled.div`
  font-size: 21px;
  margin-top: 20px;
  color: #695982;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

const Description = styled.div`
  margin-left: 10px;
  color: #695982;
  font-weight: 500;
`;

const Holder = styled.div`
  height: 40px;
  width: 300px;
  margin-top: 20px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const Wrapper = styled.div`
  width: 550px;
  height: 400px;
  background: #ffffff;
  margin-left: 20px;
`;

const Rightimg = styled.div``;

const MainRightSub = styled.div`
  width: 450px;
  height: 550px;
  border: 5px solid #f56962;
  margin-left: 30px;
  border-radius: 0px 200px 0px 0px;
`;

const MainRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainLeft = styled.div`
  width: 50%;
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;
