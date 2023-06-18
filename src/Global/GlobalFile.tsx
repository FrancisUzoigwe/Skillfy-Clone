import React from 'react'
// import Header from '../Components/Common/Header'
import HomeScreen from '../Pages/HomeScreen'
import FavCat from '../Pages/FavCat'
import ChoiceCourse from '../Pages/ChoiceCourse'
import Join from '../Pages/Join'
import Moreclose from '../Pages/Moreclose'
import Havetosay from '../Pages/Havetosay'
import Trusted from '../Pages/Trusted'
import Application from '../Pages/Application'
import Sec from '../Pages/Sec'

const GlobalFile = () => {
  return (
    <div>
      <HomeScreen/>
      <Sec/>
      <FavCat/>
      <ChoiceCourse/>
      <Join/>
      <Moreclose/>
      <Havetosay/>
      <Trusted/>
      <Application/>
    </div>
  )
}

export default GlobalFile
