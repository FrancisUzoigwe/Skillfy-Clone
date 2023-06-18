import React from "react";
import styled from "styled-components";
import crd from "../Assets/crd-img3.webp";
import But from "../Components/ReUse/But";

const Application = () => {
  return (
    <div>
      <Container>
        <Main>
          <App>
            <AppLeft>
              <Image src={crd} />
            </AppLeft>
            <AppRight>
              <Wrapp>
                <Text>
                 Become a teacher
                </Text>
                <SmallText>
                Teach what you love. Coursector gives you the tools <br />
                  to create a course.
                </SmallText>
                <ButtonHold>
                  <But text="Apply As Teacher" c="white" bc="#F56962" />
                </ButtonHold>
              </Wrapp>
            </AppRight>
          </App>
          <App>
            <AppLeft>
              <Image src={crd} />
            </AppLeft>
            <AppRight>
              <Wrapp>
                <Text>Coursector for business</Text>
                <SmallText>Get unlimited access to 3,000+ of Coursector’s top <br />courses for your team</SmallText>
                <ButtonHold>
                  <But text="Get Skilify For Business" c="white" bc="#F56962" />
                </ButtonHold>
              </Wrapp>
            </AppRight>
          </App>
        </Main>
      </Container>
    </div>
  );
};

export default Application;

const Wrapp = styled.div``;

const ButtonHold = styled.div`
  margin-bottom: 10px;
`;

const SmallText = styled.div`
  color: #6478a6;
  margin-bottom: 30px;
`;

const Text = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-top: 10px;
  object-fit: cover;
`;

const AppRight = styled.div`
  width: 75%;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AppLeft = styled.div`
  width: 25%;
  height: 230px;
  display: flex;
  justify-content: center;
`;

const App = styled.div`
  width: 580px;
  height: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: white;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  background-color: #FEF0EF;
  justify-content: center;
  align-items: center;
`;
