import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";

const businessSignup = () => {
  const [data, setData] = useState({
    accounttype: 'Business',
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  const history = useNavigate();

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
          history('/businessbuildprofile');
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
    <div>
      <div>
        <img src="logo.png" className="w-32 h-auto ml-12 mt-6" />
        <div className="  border-[3px] border-[#808080] ml-[13rem] mt-14 rounded-2xl p-16 w-[70%] h-[46rem] ">
          <div>
            <div className="flex relative">
              <Link to="/" className="absolute top-1 left-1">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              </Link>
            </div>
            <h2 className="text-[#808080] text-center text-2xl font-semibold mb-6">
              sign up to recruit top talents.
            </h2>
            <form onSubmit={handleRegister} className="">
              <input
                type="hidden"
                id="accounttype"
                name="accounttype"
                value={data.accounttype}
                onChange={(e) => setData({ ...data, accounttype: e.target.value })}
              />
              <div className="flex">
                <div className="mr-4 w-1/2">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={data.firstname}
                    className="mt-6 p-2 border border-gray-300 rounded-3xl w-full"
                    placeholder="First Name"
                    onChange={(e) => setData({ ...data, firstname: e.target.value })}
                  />
                </div>

                <div className="w-1/2">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={data.lastname}
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
                  setEmailError('');
                }}
              />
              {emailError && <span className="text-red-500">{emailError}</span>}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                  id="password"
                  name="password"
                  value={data.password}
                  className="mt-6 p-2 border border-gray-300 rounded-3xl w-full pr-10" // Added padding for icon
                  placeholder="Password (8 Character)"
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                    setPasswordError('');
                  }}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye} // Show/hide eye icon based on showPassword state
                  className="absolute mt-[.8rem] top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility} // Toggle password visibility when eye icon is clicked
                />
              </div>
              {passwordError && <span className="text-red-500">{passwordError}</span>}
              {/* Password confirmation input with icon and error handling */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"} // Toggle input type based on showConfirmPassword state
                  id="password_confirmation"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-6 p-2 border border-gray-300 rounded-3xl w-full pr-10" // Added padding for icon
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setData({ ...data, password_confirmation: e.target.value });
                    setConfirmPasswordError('');
                  }}
                />
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye} // Show/hide eye icon based on showConfirmPassword state
                  className="absolute mt-[.8rem] top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility} // Toggle password visibility when eye icon is clicked
                />
              </div>
              {confirmPasswordError && <span className="text-red-500">{confirmPasswordError}</span>}
              <div className="flex mt-[1.5rem] flex-col items-center">
                <button
                  type="submit"
                  className="flex justify-center items-center bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-20 rounded-full"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="w-[100%] flex mt-10">
              <hr className="w-1/2 block" />
              <span className="mx-4 mb-8">or</span>
              <hr className="w-1/2 block" />
            </div>
            <div className="flex flex-col items-center">
              {/* Google Sign In Button */}
              <button className="flex items-center justify-start border font-bold py-2 px-56 rounded-full mb-4">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Sign in with Google
              </button>

              {/* LinkedIn Sign In Button */}
              <button className="flex items-center justify-start border font-bold py-2 px-56 rounded-full">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                Sign in with LinkedIn
              </button>
              <h3 className="mt-6 text-[#444] text-2xl ">
                Already have an account ?,{" "}
                <Link to="/BusinessLogin" className="text-[#5D6AA8]">
                  Login
                </Link>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default businessSignup;
