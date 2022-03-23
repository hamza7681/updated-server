import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import CarouselContainer from '../Components/HomeComponent/carousel/CarouselContainer';
import Subject from '../Components/HomeComponent/carousel/subjectchart/subject';
import Counter from '../Components/HomeComponent/counter/counter';
// import Footer from '../Components/Footer/Footer'

function Home()
{
    return(
        <>
         <Navbar/>
         <CarouselContainer/> 
         <Subject/>
         <Counter/>
         {/* <Footer/> */}
        </>

    );

}
export default Home;