import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Detail from '../Components/courses/detail';
import Footer from '../Components/Footer/Footer'

function DetailPage()
{
    return(
        <>
         <Navbar/>
         <Detail/> 
         <div className='mt-5'>
         <Footer />
         </div>
        </>

    );

}
export default DetailPage;