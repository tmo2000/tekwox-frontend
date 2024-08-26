import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEmail } from '../component/emailStore';

import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';


const Jobseekerlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://tekwox.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('User data:', responseData.data.user);

        const { firstname, lastname, email, accounttype } = responseData.data.user;
        console.log('Firstname:', firstname);
        console.log('Lastname:', lastname);
        console.log('Email:', email);
        console.log('Account Type:', accounttype);

        // Store user data in session storage
        localStorage.setItem('userData', JSON.stringify(responseData.data.user));
        localStorage.setItem('authToken', responseData.data.token);
  

        if (accounttype === 'Personal') {
          navigate('/jobseekerdashboard');
        } else if (accounttype === 'Business') {
          navigate('/businessdashboard');
        } else {
          console.log('Unknown account type:', accounttype);
          setError('Unknown account type');
        }

        console.log('Login successful');
      } else {
        const errorData = await response.json();
        if (errorData.errors.email) {
          setEmailError('Incorrect email.');
          setPasswordError('');
        } else if (errorData.errors.password) {
          setEmailError('');
          setPasswordError('Incorrect password.');
        } else {
          setEmailError('');
          setPasswordError('');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Incorrect Email or Password');
    }
  };

  return (
<div className="relative min-h-screen flex flex-col items-center">
  <img src="logo.png" className="w-32 h-auto mt-6 ml-6 absolute top-0 left-0" />
  <div className="border-[3px] border-[#808080] mt-24 rounded-2xl p-6 md:p-16 w-[90%] sm:w-[80%] md:w-[60%] h-auto md:h-[40rem] border-1 border-solid flex flex-col items-center relative">
    {/* Left Arrow Icon */}
    <Link to="/" className="absolute top-4 left-4 md:top-6 md:left-6">
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
    </Link>

    {/* Centered h2 Tag */}
    <h2 className="text-center text-xl font-bold mb-4">Log in</h2>

    {/* Form with Email, Password, and Button */}
    <form onSubmit={handleSubmit} className="text-center w-[80%] sm:w-[70%] md:w-[60%]">
      {error && <span className="text-red-500 mb-4">{error}</span>}
      
     

      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-3xl w-full"
          placeholder="Username or Email"
        />
        {emailError && <span className="text-red-500 mb-4">{emailError}</span>}
      </div>


      <div className="mb-8">
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-3xl w-full"
          placeholder="Password (8 characters)"
        />
         {passwordError && <span className="text-red-500 mb-4">{passwordError}</span>}
      </div>
      <button
        type="submit"
        className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full"
      >
        Login
      </button>
    </form>
    <div className="w-full flex items-center mt-10">
      <hr className="w-1/2" />
      <span className="mx-4 mb-8">or</span>
      <hr className="w-1/2" />
    </div>
    <div className="flex flex-col items-center w-full">
      {/* Google Sign In Button */}
      <button className="flex items-center justify-center border font-bold py-2 px-4 rounded-full mb-4 w-[90%] sm:w-[80%] md:w-[70%]">
        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        Sign in with Google
      </button>

      {/* LinkedIn Sign In Button */}
      <button className="flex items-center justify-center border font-bold py-2 px-4 rounded-full w-[90%] sm:w-[80%] md:w-[70%]">
        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
        Sign in with LinkedIn
      </button>
      <h3 className="mt-6 text-[#444] text-2xl text-center">
        Don’t have an account?{" "}
        <Link to="/jobseekersignup" className="text-[#5D6AA8]">
          Sign Up
        </Link>
      </h3>
    </div>
  </div>
</div>


  );
};

export default Jobseekerlogin;
