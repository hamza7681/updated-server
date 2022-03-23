import React from 'react'
// import {Slide} from 'react-slideshow-image'
//   import  img1 from '../../../Assests/img1.jpeg'
//import img2 from '../../../Assests/img2.jpeg'
 // import img3 from '../../../Assests/img3.jpeg'
 import { Carousel } from "antd";
import './carousel.css'



const MainCarousel = () => {
  return (
    <>
      <Carousel autoplay effect="fade">
        <div>
          <div className="slide1">
          <h1 className="heading"> Find best Tutor  </h1>
          <h3 style={{color:"#fff"}} className="text-center" > Online/ <span style={{color:"#fe5722"}} >Services</span> </h3>
          <div className="overlay"> </div>  
          </div>
        </div>
        <div>
          <div className="slide2">
          <h1 className="heading">Time To learn</h1>
          <h3 style={{color:"#fff"}} className="text-center" > Online/ <span style={{color:"#fe5722"}} >Services</span> </h3>
          <div className="overlay"> </div>  
          </div>
        </div>
        <div>
          <div className="slide3">
          <h1 className="heading">best tutor sevices</h1>
          <h3 style={{color:"#fff"}} className="text-center"> Online/ <span style={{color:"#fe5722"}} >Services</span> </h3>
          <div className="overlay"> </div>  
          </div>
        </div>
      </Carousel>
      
    </>
  );
};
export default MainCarousel
    
   
