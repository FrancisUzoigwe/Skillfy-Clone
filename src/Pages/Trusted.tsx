import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <div>
      <Container>
        <Main></Main>
      </Container>
    </div>
  );
};

export default Trusted;
const Main = styled.div``;

const Container = styled.div`
width: 100%;
height: 300px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;