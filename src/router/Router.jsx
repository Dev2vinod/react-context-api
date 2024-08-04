import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from '../configure/Navbar'
import Home from '../screens/home/Home'
import About from '../screens/about/About'
import Contact from '../screens/contact/Contact'
import Footer from '../configure/Footer'

const Router = () => {
  return (

    <>
            <BrowserRouter>

            <Navbar />
            <Routes>

            <Route  path='/' element = {<Home />}   />
            <Route path='about' element ={<About />} />
            <Route  path='contact' element ={<Contact/>} />
            


                


            </Routes>
             <Footer />
            
            </BrowserRouter>
    
    </>
    
  )
}

export default Router