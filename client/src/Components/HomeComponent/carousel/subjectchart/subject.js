import React from 'react';
import 
{   FaEtsy,
    FaFortAwesome,
    FaBiohazard,
    FaMosque,
    FaVectorSquare,
    FaDatabase,
    FaMediumM
} from 'react-icons/fa';
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
import {GiChemicalTank,GiArabicDoor,GiHumanPyramid} from  'react-icons/gi'
import {RiComputerFill} from 'react-icons/ri'
import './subject.css';
const  Subject=()=>
{
   return(
       <>  
       <div className='subject '>
         <div className='container'> <h1>Most Popupar Subject</h1></div>
       <div className='container-fluid  h-100 '>
      
           <div className='container bg-white '>
        
            <div className='row border-bottom '>
                  
                   <div className='col-md-4 p-5 border-end clm'><FaEtsy className=' text-warning h-100  '/> English</div>
                   <div className='col-md-4  p-5  border-end clm'><FaFortAwesome  className=' text-warning h-100 mb-2'/> Urdu</div>
                   <div className='col-md-4 p-5  border-end clm'> <GiChemicalTank  className=' text-warning h-100'/> Chemistery</div>
               
               </div>

               <div className='row border-bottom'>
               
                   <div className='col-md-4 p-5 border-end clm'> <FaMosque  className=' text-warning h-100 mb-2'/> Arabic</div>
                   <div className='col-md-4  p-5  border-end clm'> <FaBiohazard  className=' text-warning h-100  mb-2'/> Biology</div>
                   <div className='col-md-4 p-5  border-end clm'> <FaVectorSquare  className=' text-warning h-100'/> Phyics</div>
               </div>

               <div className='row border-bottom '>
               
                   <div className='col-md-4 p-5 border-end clm'> <RiComputerFill className='text-warning h-100 mb-2'/> Computer Science</div>
                   <div className='col-md-4  p-5  border-end clm'> <FaDatabase className='text-warning h-100 mb-2'/> Database</div>
                   <div className='col-md-4 p-5  border-end clm'> <MdOutlineAccountBalanceWallet className='text-warning h-100 mb-1'/> Accounting</div>
               </div>

               <div className='row border-bottom'>
            
               <div className='col-md-4 p-5 border-end clm'> <FaMediumM className='text-warning h-100 mb-2'/> Mathematics</div>
                   <div className='col-md-4  p-5  border-end clm'> <GiHumanPyramid className='text-warning h-100 mb-2'/> HRM</div>
                   <div className='col-md-4 p-5  border-end clm'>  <GiArabicDoor className='text-warning h-100 mb-2'/>Islamiat</div>
               </div>
            
           </div>
           </div>
       </div>
       </>
   )
}
export default Subject