import React from "react";
import styled from "styled-components";

interface iButton {
  text?: string;
  c?: string;
  bc?: string;
  hbc?: string;
  hc?: string;
}
const But: React.FC<iButton> = ({ text, c, bc, hbc, hc }) => {
  return (
    <div>
      <Button c={c!} bc={bc!} hbc={hbc!} hc={hc!}>
        {text}
      </Button>
    </div>
  );
};

export default But;

const Button = styled.button<{
  c: string;
  bc: string;
  hbc: string;
  hc: string;
}>`
  padding: 15px 20px;
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
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=29, Direction=93, Color=#F56962)"; /*IE 8*/
    -moz-box-shadow: 1px 19px 29px -14px rgba(245, 105, 98, 0.4); /*FF 3.5+*/
    -webkit-box-shadow: 1px 19px 29px -14px rgba(245, 105, 98, 0.4); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
    box-shadow: 1px 19px 29px -14px rgba(245, 105, 98, 0.4); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Shadow(Strength=29, Direction=135, Color=#F56962); /*IE 5.5-7*/
  }
`;
