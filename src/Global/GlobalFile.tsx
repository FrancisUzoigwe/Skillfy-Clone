import React from 'react'
// import Header from '../Components/Common/Header'
import HomeScreen from '../Pages/HomeScreen'
import FavCat from '../Pages/FavCat'
import ChoiceCourse from '../Pages/ChoiceCourse'
import Join from '../Pages/Join'
import Moreclose from '../Pages/Moreclose'
import Havetosay from '../Pages/Havetosay'

const GlobalFile = () => {
  return (
    <div>
      <HomeScreen/>
      <FavCat/>
      <ChoiceCourse/>
      <Join/>
      <Moreclose/>
      <Havetosay/>
    </div>
  )
}

export default GlobalFile
