import React, { useRef, useState } from 'react'
import {checkLoginForm} from '../utils/Validate';
import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

   const handleLoginFormSubmit = () =>{
      const message = setErrMessage(checkLoginForm(email.current.value, password.current.value));

      if(message === null) return

      // Firebase connection 
      if(!isSignIn){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         // Signed up 
         const user = userCredential.user;
         console.log(user)
      })
       .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrMessage(errorCode + " - " + errorMessage )
      });
      }
      else{
       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
     })
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrMessage(errorCode + " - " + errorMessage )
     });
      }
   }

  const handleToggleSignup = () =>{
        setIsSignIn(!isSignIn);
  }

  return (
    <div className='absolute w-3/12 bg-black mx-auto my-44 right-0 left-0 text-white bg-opacity-80'>
      <form onSubmit={(e) => e.preventDefault()} className='mx-4'>
        <h1 className='mx-4 my-2 font-bold text-2xl text-orange-600'>{isSignIn ? "Sign in" : "Sign up"}</h1>
        {!isSignIn && <input className='p-3 my-4 w-full text-white bg-black border rounded-lg' type='text' placeholder='Full Name'/>}
        <input className='p-3 my-4 w-full text-white bg-black border rounded-lg' ref={email} type='text' placeholder='Email Address'/>
        <input className='p-3 my-4 w-full  text-white bg-black border rounded-lg' ref={password} type='password' placeholder='Password'/>
        <p className='text-red-600'>{errMessage}</p>
        <button className='p-2 my-4 w-full bg-orange-700' onClick={handleLoginFormSubmit}>{isSignIn ? "Sign in" : "Sign up"}</button>
        <p className='mb-4 p-3'>{isSignIn ? "New to Netflix?" : "AlreadySignedin?"} 
          <span onClick={handleToggleSignup} className='cursor-pointer mx-3 underline'>
            {isSignIn ? "Sign up" : "Sign in"}</span>
          </p>
      </form>
    </div>
  )
}

export default Login