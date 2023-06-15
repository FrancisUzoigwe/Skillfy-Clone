import styled from "styled-components";
import But from "../Components/ReUse/But";
import Cards from "../Components/ReUse/Cards";
import pathon from "../Assets/pantone.svg"
import monitor from "../Assets/monitor.svg"
import shake from "../Assets/shake.svg"
import briefcase from "../Assets/briefcase.svg"
import volumeUp from "../Assets/volume-up.svg"
import camera from "../Assets/camera.svg"
import heart from "../Assets/heart.svg"
import cast from "../Assets/cast.svg"

const FavCat = () => {
  return (
    <div>
      <Container>
        <Main>
          <First>
            <Text>Choice favourite course from top category</Text>
            <ButHold>
              <But text="See All Categories" c="white" bc="#F56962" />
            </ButHold>
          </First>
          <Section>
            <Cards
              bigText="Design"
              smallText="Learn how to design your website. We have a wide range of designing courses from which you can select the best that suits you."
              cardbcolor="#EFEFF6"
              cardhovercolor="white"
              cardhoverbcolor="#5444A5"
              image={pathon}
            />
            <Cards
              bigText="Development"
              smallText="Learn how to develop your software and websites. We provide you with a wind range of different development courses that will help you learn more."
              cardbcolor="#FEF3E8"
              cardhoverbcolor="orange"
              cardhovercolor="white"
              image={monitor}
            />
            <Cards
              bigText="IT & Software"
              smallText="if you want to learn something new in IT and Software, then this is the right place to help you with different IT and Software courses from which you can get one for you."
              cardbcolor="#DDF7FF"
              cardhoverbcolor="#1594be"
              cardhovercolor="white"
              image={shake}
            />
            <Cards
              bigText="Business"
              smallText="If you want to be a successful business owner, our courses will help you do so. Book your course now."
              cardbcolor="#E6FAEA"
              cardhoverbcolor="#07ae07"
              cardhovercolor="white"
              image={briefcase}
            />
          </Section>
          <Section>
            <Cards
              bigText="Marketing"
              smallText="In this world, marketing is essential to learn how to do excellent marketing with our courses and get your business on top."
              cardbcolor="#E6FAEA"
              cardhoverbcolor="#07ae07"
              cardhovercolor="white"
              image={volumeUp}
            />
            <Cards
              bigText="Photography"
              smallText="The most successful business today is photography, but you should know how to get it on top. Our courses will help you to pull yourself up."
              cardbcolor="#DDF7FF"
              cardhoverbcolor="#1594be"
              cardhovercolor="white"
              image={camera}
            />
            <Cards
              bigText="Health & Care"
              smallText="The health and care industry has increased so far. You will need to buck yourself up to catch with, and this can be done with our courses. "
              cardbcolor="#FEF3E8"
              cardhoverbcolor="orange"
              cardhovercolor="white"
              image={heart}
            />
            <Cards
              bigText="Technology"
              smallText="There are various technologies which you need to learn if you want to stay in the race. Our courses will help youo to learn more."
              cardbcolor="#EFEFF6"
              cardhovercolor="white"
              cardhoverbcolor="#5444A5"
              image={cast}
            />
          </Section>
        </Main>
      </Container>
    </div>
  );
};

export default FavCat;

const Section = styled.div`
  width: 100%;
  height: 400px;
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
font-weight: 600;
color: #454545;
`;

const ButHold = styled.div``;

const First = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 40px;
  font-weight: 400;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;
