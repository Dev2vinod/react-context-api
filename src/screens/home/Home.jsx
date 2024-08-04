import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

const Home = () => {

  const {name,roll,father} =useContext(UserContext)
  console.log("names",name,roll,father)
  return (

    <div>Home</div>
  )
}

export default Home