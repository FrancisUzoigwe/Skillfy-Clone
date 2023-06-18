import { AiOutlineArrowUp } from 'react-icons/ai'
import styled from 'styled-components'
import {Link} from "react-scroll"

const Sec = () => {
  return (
    <div id=''>
      <Seco to='homescreen' duration={600} smooth={true}><AiOutlineArrowUp size={25} color='black'/></Seco>
    </div>
  )
}

export default Sec
const Seco = styled(Link)`
position: absolute;
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: #ff796f;
transition: all 350ms;
margin-left: 1250px;
margin-top: -250px;
position: fixed;
z-index: 10;

:hover{
    color: white;
    background-color: #4e4e4e;
    cursor: pointer;
    transform: translate(0px, -10px);
}
`;