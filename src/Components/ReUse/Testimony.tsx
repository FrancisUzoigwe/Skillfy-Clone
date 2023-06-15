import React from 'react'
import { FiStar } from "react-icons/fi";
import styled from 'styled-components';

interface iTesty {
    name?: string,
    occu?: string,
    details?: string,
    image?: any,
}


const Testimony: React.FC<iTesty> = ({name, occu, details, image}) => {
  return (
    <div>
         <Testimonial>
              <ProfileHold>
                <Profile>
                  <Image src={image}/>
                  <NameHold>
                    <Names>{name}</Names>
                    <Ocuu>{occu}</Ocuu>
                  </NameHold>
                  <Stars>
                    <FiStar color="orange" size={20} />
                    <FiStar color="orange" size={20} />
                    <FiStar color="orange" size={20} />
                    <FiStar color="orange" size={20} />
                    <FiStar color="orange" size={20} />
                  </Stars>
                </Profile>
                <Details>{details}</Details>
              </ProfileHold>
            </Testimonial>
    </div>
  )
}

export default Testimony
const NameHold = styled.div`
margin-right: 170px;
`;

const Ocuu = styled.div`
  color: #9798a0;
  font-weight: 500;
`;

const Image = styled.img`
  width: 80px;
  margin-left: 8px;
  height:80px;
  object-fit: contain;
  border-radius: 50%;
`;

const Names = styled.div`
  color: #5f5982;
  font-size: 24px;
  font-weight: 600;
`;

const Stars = styled.div`
margin-right: 20px;
`;

const Profile = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.div`
color: #7A7597;
font-style: italic;
width: 80%;
height: 70px;
margin-top: 10px;
font-weight: 25px;
font-size: 17px;
display: flex;
align-items: center;
`;

const ProfileHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Testimonial = styled.div`
  width: 97%;
  height: 230px;
  background-color: white;
  border-radius: 0px 40px 0px 40px;
  transition: all 350ms;

  :hover{
    cursor: pointer;
    transform: translate(0px, -15px);
  }
`;