import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
// import Button from '@mui/material/Button';
import { motion } from "framer-motion"

function Card() {
  const [amount, SetAmount]=useState(0)
  const [discount,SetDiscount]=useState(0)
  const [result, Setresult]=useState(0)
  const [save, SetSave]=useState(0)

  console.log(amount,discount);
  const handleCalculate =(e)=>{
     const output = (amount * discount)/100
     console.log(output);
     const outsave = amount- output;
     console.log(outsave);
     Setresult(output)
    SetSave(outsave)

 if(amount,discount == '')
 {
  alert("Please enter the fields")
 }
  }
  const Resethandle =()=>{
   SetAmount('');
  SetDiscount('')
    Setresult(0);
    SetSave(0);
  }
  return (
    <div>
 <div className="row ">
  <motion.h2 

   initial={{y:-50, opacity: 0}}
   whileInView={{y:0, opacity: 1}}
   transition={{delay:0.2, y:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}
   style={{fontWeight:"700", fontSize:"40px",textShadow:" 3px 3px 8px black"}}


  className='ms-3 my-2 head'>DISCOUNT <span className='text-warning'>CALCULATOR</span></motion.h2>
<hr></hr>
  <motion.div 


  initial={{x:-100, opacity: 0}}
  whileInView={{x:0, opacity: 1}}
  transition={{delay:0.4, x:{type:"spring",stiffness:50}, opacity:{duration:1},ease:"easeIn",duration:1}}
  style={{fontWeight:"700", fontSize:"40px"}}



  className="col1 col-md-2 m-3">
    <img src="https://cdn.dribbble.com/users/1497565/screenshots/3224624/calculator_laura_lonni.gif" alt="" width={"330px"} />
  </motion.div>

<motion.div 


initial={{x:100, opacity: 0}}
whileInView={{x:0, opacity: 1}}
transition={{delay:0.3, x:{type:"spring",stiffness:50}, opacity:{duration:1},ease:"easeIn",duration:2}}


className="col2 col-md-7 pt-5 mb-5 ">


<div className=" col-md-5 input m-5">
 <MDBInput 
label={<span style={{Color: 'light' }}>Amount</span>} 
id='formControlLg' 
type='text' 
onChange={(e) => SetAmount(e.target.value)} 
size='lg'   value={amount || ''}
className='mb-3 bg-light' 
// Adding style for background color
/>
<MDBInput 
label={<span style={{ color: 'white' }}>Discount %</span>} 
id='formControlLg' 
type='text' 
onChange={(e) => SetDiscount(e.target.value)} 
size='lg'   value={discount || ''}
className='mb-3 bg-dark'  // Adding style for background color
/>

 <div className='text-center m-4'>
 <button className='btn btn-success calc' onClick={e=>handleCalculate(e)}>Calculate %</button>
 </div>
{/* //input */}
  </div>


  <div className="  col-md-3 input-2 m-5">
   <div className='para bg-warning  p-5  '>
    <h4 className='bg-warning'>Discount price: {result}</h4>
  <h4 className='mt-4 bg-warning'>You Saved: {save}</h4>
    </div>

    <div className='text-center mt-5'>
      <button type="button" className="btn btn-outline-info text-light" onClick={Resethandle}>Reset</button>
    </div>
  </div>
</motion.div>
</div>
   </div>
  )
}

export default Card




