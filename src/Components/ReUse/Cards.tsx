import React from "react";
import styled from "styled-components";

interface iCard {
  bigText?: string;
  smallText?: string;
  image?: any;
  cardhovercolor?: string;
  cardhoverbcolor?: string;
  cardbcolor?: string;
  cardcolor?: string;
  upimgcolor?: string;
  uphoverbcolor?: string;
  
}

const Cards: React.FC<iCard> = ({
  bigText,
  smallText,
  image,
  cardbcolor,
  cardhoverbcolor,
  cardcolor,
  upimgcolor,
  cardhovercolor,
  uphoverbcolor,
  
}) => {
  return (
    <div>
      <Card
        cardbcolor={cardbcolor!}
        cardhoverbcolor={cardhoverbcolor!}
        cardhovercolor={cardhovercolor!}
        cardcolor={cardcolor!}
      >
        <CardMain>
          <Up uphoverbcolor={uphoverbcolor!}>
            <UpImg upimgcolor={upimgcolor!}  src={image}/>
          </Up>
          <BigText>{bigText}</BigText>
          <SmallText>{smallText}</SmallText>
        </CardMain>
      </Card>
    </div>
  );
};

export default Cards;

const UpImg = styled.img<{ upimgcolor: any }>`
  width: 30px;
  height: 30px;
  color: ${({ upimgcolor }) => upimgcolor};
`;

const BigText = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
`;

const SmallText = styled.div`
  width: 200px;
  margin-top: 5px;
  font-weight: 500;
  
`;

const Up = styled.div<{ uphoverbcolor: string }>`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: all 350ms;

  :hover {
    background-color: ${({ uphoverbcolor }) => uphoverbcolor};
  }
`;

const CardMain = styled.div`
  width: 250px;
  height: 300px;
`;

const Card = styled.div<{
  cardbcolor: string;
  cardhoverbcolor: string;
  cardhovercolor: string;
  cardcolor: string;
}>`
  width: 280px;
  height: 350px;
  border-radius: 10px;
  background-color: ${({ cardbcolor }) => cardbcolor};
  display: flex;
  color: ${({ cardcolor }) => cardcolor};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 450ms;

  :hover {
    background-color: ${({ cardhoverbcolor }) => cardhoverbcolor};
    color: ${({ cardhovercolor }) => cardhovercolor};
    cursor: pointer;
  }
`;
