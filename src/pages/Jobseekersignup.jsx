import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Clear previous error messages
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Validate form data
    if (data.password !== data.password_confirmation) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    try {
      // Register the user
      await axios.post('https://tekwox.com/api/register', data);
      
      // Automatically log in the user
      const loginResponse = await axios.post('https://tekwox.com/api/login', {
        email: data.email,
        password: data.password
      });
      
      // Store the session/token
      localStorage.setItem('token', loginResponse.data.token);
      alert('Registration and login successful!');
      
      // Redirect to the dashboard or home page
      navigate('/buildprofile'); // Adjust the route as needed
    } catch (error) {
      if (error.response && error.response.data) {
        // Handle specific error messages from backend
        const { errors } = error.response.data;
        if (errors.email) {
          setEmailError(errors.email[0]);
        }
        if (errors.password) {
          setPasswordError(errors.password[0]);
        }
      } else {
        console.error('Registration or login failed:', error);
        alert('Registration or login failed. Please try again.');
      }
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
              value={data.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="md:w-1/2">
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="mt-6 p-2 border border-gray-300 rounded-3xl w-full"
              placeholder="Last Name"
              value={data.lastname}
              onChange={handleChange}
            />
          </div>
        </div>

        <input
          type="text"
          id="email"
          name="email"
          className="mt-6 p-2 border border-gray-300 rounded-3xl w-full"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
         {emailError && <div style={{ color: 'red' }}>{emailError}</div>}

        <div className="relative mt-6">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={data.password}
            className="p-2 border border-gray-300 rounded-3xl w-full pr-10"
            placeholder="Password (8 Character)"
            
            onChange={handleChange}
            
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}

        <div className="relative mt-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="password_confirmation"
            name="password_confirmation"
            value={data.password_confirmation}
            className="p-2 border border-gray-300 rounded-3xl w-full pr-10"
            placeholder="Confirm Password"
           
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={showConfirmPassword ? faEyeSlash : faEye}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          />
        </div>
        {confirmPasswordError && <div style={{ color: 'red' }}>{confirmPasswordError}</div>}

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