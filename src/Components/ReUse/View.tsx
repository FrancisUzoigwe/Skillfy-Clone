import React from "react";
import styled from "styled-components";
import { FiStar } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { LuPlayCircle } from "react-icons/lu";

interface iView {
  ratetext?: string;
  viewtext?: string;
  playtext?: string;
  title?: string;
  profilename?: string;
  price?: string;
  price1?: string;
  image?: any;
  smallimg?: any;
}

const Vieww: React.FC<iView> = ({
  ratetext,
  viewtext,
  playtext,
  title,
  profilename,
  price,
  price1,
  image,
  smallimg,
}) => {
  return (
    <div>
      <WatchSub>
        <ImageHold>
          <Image src={image} />
          <Details>
            <Rate>
              <FiStar size={20} color="orange" />
              <Ratetext>{ratetext}</Ratetext>
            </Rate>
            <View>
              <AiOutlineEye size={20} color="red" />
              <Viewtext>{viewtext}</Viewtext>
            </View>
            <Play>
              <LuPlayCircle size={20} color="green" />
              <Playtext>{playtext}</Playtext>
            </Play>
          </Details>
        </ImageHold>
        <TitleHold>
          <Title>{title}</Title>
        </TitleHold>
        <ProfileHold>
          <Profile src={smallimg}/>
          <ProfileName>{profilename}</ProfileName>
          <PriceHold>
            <Price>${price}</Price>
            <Price1>${price1}</Price1>
          </PriceHold>
        </ProfileHold>
      </WatchSub>
    </div>
  );
};

export default Vieww;
const PriceHold = styled.div`
  display: flex;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: white;
  object-fit: contain;
`;

const ProfileName = styled.div`
  margin-right: 50px;
  color: grey;
  font-size: 14px;
  font-weight: 500;
`;

const Price = styled.div`
  text-decoration: line-through;
  color: silver;
  margin-right: 8px;
`;

const Price1 = styled.div`
  color: orange;
  font-weight: 700;
`;

const ProfileHold = styled.div`
  width: 90%;
  height: 70px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleHold = styled.div`
  width: 90%;
  height: auto;
`;
const Title = styled.div`
  font-size: 25px;
  color: #302d3a;
`;

const Ratetext = styled.div`
  color: grey;
`;

const Viewtext = styled.div`
  color: grey;
`;

const Playtext = styled.div`
  color: grey;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
`;

const Play = styled.div`
  display: flex;
  align-items: center;
`;

const View = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 210px;
  border-radius: 5px;
`;

const Details = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid silver;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageHold = styled.div`
  width: 90%;
  height: 250px;
  border-radius: 5px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WatchSub = styled.div`
  width: 380px;
  height: 450px;
  background: white;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=25, Direction=0, Color=#EFEFF6)"; /*IE 8*/
  -moz-box-shadow: 0 19px 25px 25px rgba(239, 239, 246, 0.5); /*FF 3.5+*/
  -webkit-box-shadow: 0 19px 25px 25px rgba(239, 239, 246, 0.5); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 0 19px 25px 25px rgba(239, 239, 246, 0.5); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=25, Direction=135, Color=#EFEFF6); /*IE 5.5-7*/
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 400ms;

  :hover {
    cursor: pointer;
    transform: translate(0px, -10px);
  }
`;
