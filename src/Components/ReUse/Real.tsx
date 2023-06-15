import React from "react";
import styled from "styled-components";

interface iButton {
  text?: string;
  c?: string;
  bc?: string;
  hbc?: string;
  hc?: string;
}
const Real: React.FC<iButton> = ({ text, c, bc, hbc, hc }) => {
  return (
    <div>
      <Button c={c!} bc={bc!} hbc={hbc!} hc={hc!}>
        {text}
      </Button>
    </div>
  );
};

export default Real;
const Button = styled.button<{
  c: string;
  bc: string;
  hbc: string;
  hc: string;
}>`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  color: ${({ c }) => c};
  background-color: ${({ bc }) => bc};
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: ${({ hbc }) => hbc};
    color: ${({ hc }) => hc};
  }
`;
