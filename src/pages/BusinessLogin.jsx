import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const BusinessLogin = () => {
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [error, setError] = useState('');
const history = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://tekwox.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('User data:', responseData.data.user);
      
      const { firstname, lastname, email, accounttype, token } = responseData.data.user;
      console.log('Firstname:', firstname);
      console.log('Lastname:', lastname);
      console.log('Email:', email);
      console.log('Account Type:', accounttype);

      // Store token in a cookie
      document.cookie = `token=${token};path=/`;

      // Retrieve business details if it's a business account
      if (accounttype === 'Business') {
        const businessResponse = await fetch(`https://tekwox.com/api/personaldetails/search/{email}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (businessResponse.ok) {
          const businessData = await businessResponse.json();
          console.log('Business details:', businessData);

          // Store business details in a cookie
          document.cookie = `businessDetails=${JSON.stringify(businessData)};path=/`;
        } else {
          console.error('Failed to fetch business details');
        }
      }

      if (accounttype === 'Personal') {
        history('/jobseekerDashboard');
      } else if (accounttype === 'Business') {
        history('/businessDashboard');
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
    <div>
      <img src="logo.png" className="w-32 h-auto ml-12 mt-6" />
      <div className="border-[3px] border-[#808080] ml-[13rem] mt-14 rounded-2xl p-16 w-[60%] h-[40rem] border-1 border-solid flex flex-col items-center relative">
        {/* Left Arrow Icon */}
        <Link to="/businesssignup" className="absolute top-6 left-6">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </Link>

        {/* Centered h2 Tag */}
        <h2 className="text-center text-xl font-bold mb-4">Log in</h2>

        {/* Form with Email, Password, and Button */}
        <form onSubmit={handleSubmit} className="text-center w-[60%]">
        {error && <span className="text-red-500 mb-4">{error}</span>}
        {emailError && <span className="text-red-500 mb-4">{emailError}</span>}
        {passwordError && <span className="text-red-500 mb-4">{passwordError}</span>}

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-3xl w-[100%]"
              placeholder="Username or Email"
            />
          </div>

          <div className="mb-8 flex items-center">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-3xl w-[100%]"
              placeholder="Password (8 characters)"
            />
          </div>
            <button
              type="submit"
              className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-20 rounded-full "
            >
              Submit
            </button>
          
        </form>
        <div className="w-[60%] flex mt-10">
          <hr className="w-1/2 block" />
          <span className="mx-4 mb-8">or</span>
          <hr className="w-1/2 block" />
        </div>
        <div className="flex flex-col items-center">
          {/* Google Sign In Button */}
          <button className="flex items-center justify-start border font-bold py-2 px-28 rounded-full mb-4">
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
            Sign in with Google
          </button>

          {/* LinkedIn Sign In Button */}
          <button className=" flex items-center justify-start border font-bold py-2 px-28 rounded-full">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            Sign in with LinkedIn
          </button>
          <h3 className="mt-6 text-[#444] text-2xl ">
            Don’t have an account?,{" "}
            <Link to="/businessSignup" className="text-[#5D6AA8]">
              Sign Up
            </Link>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessLogin;
