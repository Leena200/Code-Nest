import React, { useEffect } from 'react';
import "./Home.css"
import { checkLogin } from '../../utils/auth';
import { useNavigate  } from 'react-router-dom'; // Assuming you are using React Router
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureSection from '../../components/FeatureSection/FeatureSection'
import FeatureElement from '../../components/FeatureElement/FeatureElement'
import PricingPlan from '../../components/PricingPlan/PricingPlan'

import Contact from '../Contact/Contact'

import Footer from '../../components/Footer/Footer'
import LogoGrid from '../../components/LogoGrid/LogoGrid'
import SubscribePage from '../../components/SubscribePage/SubscribePage'



function Home() {
  // const navigate  = useNavigate();
  
  //   useEffect(() => {
  //     const isLoggedIn = checkLogin();
  
  //     if (!isLoggedIn) {
        
  //       navigate.push('/login'); 
  //     }
  //   }, [navigate]);
  
  //   if (!checkLogin()) {
  //     e
  //     return null;
  //   }
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <br/>
    <hr/>
    <FeatureSection/>
    {/* <br/> */}
    {/* <FeatureElement/> */}
 
    <hr style={{width:'20%'}}/>
    {/* <LogoGrid/> */}
    <hr style={{width:'20%', marginTop:'5rem'}}/>
    <PricingPlan/>
    {/* <SubscribePage/> */}
    {/* <hr style={{width:'20%', marginTop:'5rem'}}/> */}
    <Contact/>


    <SubscribePage/>
    <hr style={{width:'20%', marginTop:'5rem'}}/>

    <Footer/>
    

    </>
  )
}

export default Home