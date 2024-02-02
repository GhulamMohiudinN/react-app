import React from 'react';

import at from '../assets/at.svg';
import bigCircle from '../assets/bigCircle.svg';
import insta from '../assets/insta.svg';
import logo from '../assets/logo.svg';
import smallCircle from '../assets/smallcircle.svg';
import whatsapp from '../assets/whatsapp.svg';

const Welcome = () => {

  return (
    <>
     <div className="">
      <div className= "flex justify-between h-[90vh]">
      <div className="w-[35px] mt-[50%] sm:w-[80px] md:mt-[30%] xl:mt-[20%] lg:w-[120px] xl:w-[150px]"><img src={smallCircle} alt="" /></div>
        <div className="mt-[15%] w-[100%] lg:mt-[10%] xl:mt-[7%]">
          <div className="w-[200px] m-auto lg:w-[240px] xl:w-[250px]"><img src={logo} alt="" />
          <p className="text-center mt-2 font-medium">Scan and Earn Money</p></div>
          <div className="mt-[20%] sm:mt-[5%] md:mt-[25%] lg:mt-[5%]">
          <div className="btn1"><button>Login or Signup</button></div>
          <div className="btn2"><button>Start Scanning as a Guest</button></div>
          </div>
        </div>
        <div className="w-[55px] mt-[5%] sm:w-[120px] lg:w-[160px] xl:w-[200px]"><img src={bigCircle} alt="" /></div>
      </div>
        <div>
          <footer className="md:flex md:justify-between md:mx-6">
            <div>
              <p className="hidden md:block">All Rights Reserved. Copyright © 2023 Planet Re-Bag</p>
            </div>
              <div className="flex ">
                <div className="flex gap-3 xl:font-normal font-semibold mx-auto md:mx-0">
                <p className="">Contact Us</p>
                  <img src={whatsapp} alt="" /><img src={insta} alt="" /><img src={at} alt="" />
                </div>
              </div>
          </footer>
       </div>
      
    </div> 
    </>
  )
}

export default Welcome
