import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Jobseekersignup = () => {
  const [data, setData] = useState({
    accounttype: 'Personal',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const history = useNavigate ();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://tekwox.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.status === 201) {
        const responseData = await response.json();
        const serializedData = JSON.stringify(responseData);
        document.cookie = `Tekwox=${encodeURIComponent(serializedData)}; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/`;
        
        // After successful registration, proceed with login
        const loginResponse = await fetch('https://tekwox.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password
          })
        });
  
        if (loginResponse.status === 200) {
          // Login successful, handle accordingly (e.g., store session/token)
          const loginData = await loginResponse.json();
          // Store session/token or perform further actions
          console.log('Login successful:', loginData);
          history('/buildprofile');
        } else {
          // Handle login failure
          console.log('Login failed');
        }
      } else {
        // Handle registration failure
        const errorData = await response.json();
        if (errorData.status === 'failed' && errorData.message === 'Validation Error!') {
          if (errorData.data && errorData.data.email) {
            setEmailError(errorData.data.email[0]);
          }
          if (errorData.data && errorData.data.password) {
            setPasswordError(errorData.data.password[0]);
          }
        } else {
          console.log('Unexpected error:', errorData);
        }
      }
    } catch (error) {
      console.log('Error message:', error);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  return (
<div className="relative min-h-screen flex flex-col items-center">
  <img src="logo.png" className="w-32 h-auto mt-6 ml-6 absolute top-0 left-0" />

  <div className="border-[3px] border-[#808080] mt-24 rounded-2xl p-6 md:p-16 w-[90%] sm:w-[80%] md:w-[70%] h-auto md:h-[46rem] border-1 border-solid flex flex-col items-center relative">
    <div className="w-full">
      <div className="relative flex justify-start mb-3">
        <Link to="/" className="top-0 left-0">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </Link>
      </div>
      <h2 className="text-[#808080] text-center text-2xl font-semibold mb-5">
        sign up. you wont regret this..
      </h2>
      <form onSubmit={handleRegister} className="w-full">
        <input
          type="hidden"
          id="accounttype"
          name="accounttype"
          onChange={(e) => setData({ ...data, accounttype: e.target.value })}
        />

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="mt-6 p-2 border border-gray-300 rounded-3xl w-full"
              placeholder="First Name"
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
            />
          </div>

          <div className="md:w-1/2">
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="mt-6 p-2 border border-gray-300 rounded-3xl w-full"
              placeholder="Last Name"
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
            />
          </div>
        </div>

        <input
          type="text"
          id="email"
          name="email"
          value={data.email}
          className="mt-6 p-2 border border-gray-300 rounded-3xl w-full"
          placeholder="Email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
            setEmailError("");
          }}
        />
        {emailError && <span className="text-red-500">{emailError}</span>}

        <div className="relative mt-6">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={data.password}
            className="p-2 border border-gray-300 rounded-3xl w-full pr-10"
            placeholder="Password (8 Character)"
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
              setPasswordError("");
            }}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
        {passwordError && <span className="text-red-500">{passwordError}</span>}

        <div className="relative mt-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="password_confirmation"
            name="password_confirmation"
            value={data.password_confirmation}
            className="p-2 border border-gray-300 rounded-3xl w-full pr-10"
            placeholder="Confirm Password"
            onChange={(e) => {
              setData({ ...data, password_confirmation: e.target.value });
              setConfirmPasswordError("");
            }}
          />
          <FontAwesomeIcon
            icon={showConfirmPassword ? faEyeSlash : faEye}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          />
        </div>
        {confirmPasswordError && <span className="text-red-500">{confirmPasswordError}</span>}

        <div className="flex mt-6 flex-col items-center">
          <button
            type="submit"
            className="flex justify-center items-center bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="w-full flex items-center mt-10">
        <hr className="w-1/2" />
        <span className="mx-4 mb-8">or</span>
        <hr className="w-1/2" />
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Google Sign In Button */}
           <button className="flex items-center justify-center border font-bold py-2 px-4 rounded-full mb-4 w-[90%] sm:w-[80%] md:w-[70%] hover:text-gray-500 hover:border-black">
  <img className="w-[1rem] h-[1rem] mr-2" src="googleicon.png" alt="" />
  Sign in with Google
</button>

        {/* LinkedIn Sign In Button */}
           <button className="flex items-center justify-center border font-bold py-2 px-4 rounded-full w-[90%] sm:w-[80%] md:w-[70%] hover:text-gray-500 hover:border-black">
  <img className="w-[1rem] h-[1rem] mr-1" src="linkedin.png" alt="" />
  Sign in with LinkedIn
</button>

        <h3 className="mt-5 text-[#444] text-2xl text-center">
          Already have an account?{" "}
          <Link to="/jobseekerlogin" className="text-[#5D6AA8]">
            Login
          </Link>
        </h3>
      </div>
    </div>
  </div>
</div>



  );
};

export default Jobseekersignup;
