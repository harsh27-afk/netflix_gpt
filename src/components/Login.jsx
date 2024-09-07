import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../../utils/validate';


const Login = () => {
  
  const[isSignIn,setIsSignIn]=useState(true);

  const[errorMessage, setErrorMessage]=useState(null);

  const handle=()=>{
    setIsSignIn(!isSignIn);
  }

  const email=useRef(null);
  const password=useRef(null);

  const handleButton=()=>{
    //  console.log(email.current.value);
    //  console.log(password.current.value);
    const message=validate(email.current.value,password.current.value);
    setErrorMessage(message);
     
  }

  return <>
  
    <Header/>

    
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg" alt="logo"  className=''/>
    
    <div className='form-div  '>
      <form onSubmit={(e)=>(e.preventDefault())} className=' rounded-lg text-white w-3/12  bg-black opacity-85 absolute top-[150px] left-[550px] h-[440px]' >
        <h1 className='m-[10px] font-bold text-3xl'>{isSignIn?"Sign In":"Sign Up"}</h1>

        {!isSignIn &&  <input type="text" placeholder='Name' className='bg-gray-700 m-[10px] p-[5px] rounded-md w-8/12' />}

        <input ref={email} type="text" placeholder='Email Address' className='bg-gray-700 m-[10px] p-[5px] rounded-md w-8/12' />

        <input ref={password} type="password" placeholder='Password' className='bg-gray-700 m-[10px] p-[5px] rounded-md w-8/12' />

        <p className='text-bold text-red-700 m-[10px]  '>{errorMessage}</p>

        <button onClick={handleButton} className='bg-red-700 w-[170px] m-[10px] p-[5px] rounded-lg cursor-pointer ' >{isSignIn?"Sign In":"Sign Up"}</button>

        <p className='m-[10px] p-[5px] cursor-pointer'onClick={handle} >{isSignIn?"New to Netflix? Sign Up now":"Already a user? Sign In"}</p>
      </form>
    </div>
    </>
}

   


export default Login