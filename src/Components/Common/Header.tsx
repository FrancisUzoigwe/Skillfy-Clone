import React from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import But from "../ReUse/But";
import { useState } from "react";

const Header = () => {
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
              <Nav fs="19px">
                Home
                <Icon />
              </Nav>
              <Nav fs="19px">
                Pages
                <Icon />
              </Nav>
              <Nav fs="19px">
                Course
                <Icon />
              </Nav>
              <Nav fs="19px">
                Features
                <Icon />
              </Nav>
              <Nav fs="19px">
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
              <Nav fs="18px">
                Home
                <Icon />
              </Nav>
              <Nav fs="18px">
                Pages
                <Icon />
              </Nav>
              <Nav fs="18px">
                Course
                <Icon />
              </Nav>
              <Nav fs="18px">
                Features
                <Icon />
              </Nav>
              <Nav fs="18px">
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

const Action = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const IC = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

const Icon = styled(RiArrowDropDownLine)`
  margin-top: 6px;
`;

const Nav = styled.div<{ fs: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
  overflow: hidden;
`;
