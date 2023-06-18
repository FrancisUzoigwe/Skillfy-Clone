import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import But from "../ReUse/But";
import image1 from "../../Assets/home1.webp";
import image2 from "../../Assets/home2.webp";
import image3 from "../../Assets/home3.webp";

const Header = () => {
  const [hover, setHover] = useState(false);
  const onhover = () => {
    setHover(!hover);
  };

  const [hover1, setHover1] = useState(false);
  const onhover1 = () => {
    setHover1(!hover1);
  };

  const [hover2, setHover2] = useState(false);
  const onhover2 = () => {
    setHover2(!hover2);
  };
  const [hover3, setHover3] = useState(false);
  const onhover3 = () => {
    setHover3(!hover3);
  };
  const [hover4, setHover4] = useState(false);
  const onhover4 = () => {
    setHover4(!hover4);
  };

  const [scroll, setScroll] = useState<boolean>(false);
  const onscroll = () => {
    if (window.scrollY >= 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onscroll);
  return (
    <div>
      {scroll ? (
        <Container bg="white" h="70px">
          <Wrapper>
            <Logo>Francis Uzoigwe</Logo>
            <NavHolder>
              <Nav fs="16px" onMouseEnter={onhover} onMouseLeave={onhover}>
                Home
                {hover ? (
                  <DropDown>
                    <Holder>
                      <Left src={image1} />
                      <Center src={image2} />
                      <Right src={image3} />
                    </Holder>
                  </DropDown>
                ) : null}
                <Icon />
              </Nav>
              <Nav fs="16px" onMouseEnter={onhover1} onMouseLeave={onhover1}>
                {hover1 ? (
                  <Drop>
                    <Navi>Contact us</Navi>
                    <Navi>Courses</Navi>
                    <Navi>Course Detail V1</Navi>
                    <Navi>Course Detail V2</Navi>
                    <Navi>Teacher Profile</Navi>
                    <Navi>Become A Teacher</Navi>
                    <Navi>Blog Detail</Navi>
                    <Navi>404 Page</Navi>
                  </Drop>
                ) : null}
                Pages
                <Icon />
              </Nav>
              <Nav fs="16px" onMouseEnter={onhover2} onMouseLeave={onhover2}>
                {hover2 ? (
                  <Drop1>
                    <Navi>All Courses</Navi>
                    <Navi>Design</Navi>
                    <Navi>Development</Navi>
                    <Navi>Marketing</Navi>
                    <Navi>Photography</Navi>
                  </Drop1>
                ) : null}
                Course
                <Icon />
              </Nav>
              <Nav fs="16px" onMouseEnter={onhover3} onMouseLeave={onhover3}>
                {hover3 ? (
                  <Drop2>
                    <Navi>Course Detail V1</Navi>
                    <Navi>Course Detail V2</Navi>
                  </Drop2>
                ) : null}
                Features
                <Icon />
              </Nav>
              <Nav fs="16px" onMouseEnter={onhover4} onMouseLeave={onhover4}>
                {hover4 ? (
                  <Drop3>
                    <Navi>Blog</Navi>
                    <Navi>Blog Details</Navi>
                  </Drop3>
                ) : null}
                Blog
                <Icon />
              </Nav>
            </NavHolder>

            <Action>
              <IC>
                <CgSearch size={23} color="#5a5a5a" />
              </IC>
              <IC>
                <FiShoppingCart size={23} color="#5a5a5a" />
              </IC>
              <But text="Register" bc="#F56962" c="white" />
            </Action>
          </Wrapper>
        </Container>
      ) : (
        <Container bg="#FEF0EF" h="60px">
          <Wrapper>
            <Logo>Francis Uzoigwe</Logo>
            <NavHolder>
            <Nav fs="16px" onMouseEnter={onhover} onMouseLeave={onhover}>
                Home
                {hover ? (
                  <DropDown>
                    <Holder>
                      <Left src={image1} />
                      <Center src={image2} />
                      <Right src={image3} />
                    </Holder>
                  </DropDown>
                ) : null}
                <Icon />
              </Nav>
              <Nav fs="16px" onMouseEnter={onhover1} onMouseLeave={onhover1}>
                {hover1 ? (
                  <Drop>
                    <Navi>Contact us</Navi>
                    <Navi>Courses</Navi>
                    <Navi>Course Detail V1</Navi>
                    <Navi>Course Detail V2</Navi>
                    <Navi>Teacher Profile</Navi>
                    <Navi>Become A Teacher</Navi>
                    <Navi>Blog Detail</Navi>
                    <Navi>404 Page</Navi>
                  </Drop>
                ) : null}
                Pages
                <Icon />
              </Nav>
              <Nav fs="16px" onMouseEnter={onhover2} onMouseLeave={onhover2}>
                {hover2 ? (
                  <Drop1>
                    <Navi>All Courses</Navi>
                    <Navi>Design</Navi>
                    <Navi>Development</Navi>
                    <Navi>Marketing</Navi>
                    <Navi>Photography</Navi>
                  </Drop1>
                ) : null}
                Course
                <Icon />
              </Nav>
              <Nav fs="16px" onMouseEnter={onhover3} onMouseLeave={onhover3}>
                {hover3 ? (
                  <Drop2>
                    <Navi>Course Detail V1</Navi>
                    <Navi>Course Detail V2</Navi>
                  </Drop2>
                ) : null}
                Features
                <Icon />
              </Nav>
              <Nav fs="16px" onMouseEnter={onhover4} onMouseLeave={onhover4}>
                {hover4 ? (
                  <Drop3>
                    <Navi>Blog</Navi>
                    <Navi>Blog Details</Navi>
                  </Drop3>
                ) : null}
                Blog
                <Icon />
              </Nav>
            </NavHolder>

            <Action>
              <IC>
                <CgSearch size={23} color="#5a5a5a" />
              </IC>
              <IC>
                <FiShoppingCart size={23} color="#5a5a5a" />
              </IC>
              <But text="Register" bc="#F56962" c="white" />
            </Action>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Drop3 = styled.div`
  width: 200px;
  height: 60px;
  background: white;
  border-radius: 5px;
  top: 20px;
  position: absolute;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=87, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=135, Color=#000000); /*IE 5.5-7*/
`;

const Drop2 = styled.div`
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  top: 20px;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=87, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=135, Color=#000000); /*IE 5.5-7*/
`;

const Drop1 = styled.div`
  width: 200px;
  height: 140px;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  top: 20px;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=87, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=135, Color=#000000); /*IE 5.5-7*/
`;

const Navi = styled.div`
  margin: 2px 5px;
  transition: all 350ms;

  :hover {
    background-color: grey;
    color: white;
    transform: scale(1.03);
  }
`;

const Drop = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  top: 20px;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=87, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=135, Color=#000000); /*IE 5.5-7*/
`;

const Center = styled.img`
  width: 30%;
  height: 260px;
  border-radius: 10px;
  object-fit: cover;
  transition: all 550ms;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    border: 1px solid grey;
  }
`;

const Left = styled.img`
  width: 30%;
  height: 260px;
  border-radius: 10px;
  object-fit: cover;
  transition: all 450ms;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    border: 1px solid grey;
  }
`;

const Right = styled.img`
  width: 30%;
  height: 260px;
  border-radius: 10px;
  object-fit: cover;
  transition: all 450ms;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    border: 1px solid grey;
  }
`;

const Holder = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropDown = styled.div`
  background-color: white;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=87, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: -1px 19px 36px 11px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=36, Direction=135, Color=#000000); /*IE 5.5-7*/
  width: 1215px;
  height: 350px;
  position: absolute;
  border-radius: 10px;
  top: 20px;
  z-index: 10;
  transition: all 350ms;
  margin-left: -400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Action = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const IC = styled.div`
  margin-right: 20px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    color: orange;
  }
`;

const Icon = styled(RiArrowDropDownLine)`
  margin-top: 6px;
`;

const Nav = styled.div<{ fs: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 400ms;
  color: #5f5994;
  font-size: ${({ fs }) => fs};

  :hover {
    cursor: pointer;
    color: black;
  }
`;

const NavHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 25px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div<{ bg: string; h: string }>`
  width: 100%;
  height: ${({ h }) => h};
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
  background-color: ${({ bg }) => bg};
  transition: all 600ms;
  z-index: 10;
`;
