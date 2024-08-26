import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const buildprofile = () => {
  
  const cookieName = 'Tekwox'; // Name of the cookie
const decodedCookie = decodeURIComponent(document.cookie); // Decode the cookie string
const cookieArray = decodedCookie.split(';'); // Split the cookie string into an array

// // Loop through each cookie to find the one we're interested in
// let cookieValue = '';
// for (let i = 0; i < cookieArray.length; i++) {
//   let cookie = cookieArray[i];
//   while (cookie.charAt(0) === ' ') {
//     cookie = cookie.substring(1);
//   }
//   if (cookie.indexOf(cookieName + '=') === 0) {
//     cookieValue = cookie.substring(cookieName.length + 1);
//     break;
//   }
// }

// if (cookieValue) {
//   // Log the cookie value in JSON format
//   console.log('Cookie data:', cookieValue);

//   // Parse the JSON string stored in the cookie
//   const parsedData = JSON.parse(cookieValue);

//   // Access the user object within the data object
//   const userData = parsedData.data.user;

//   // Access the user's first name from the user object
//   if (userData.firstname) {
//     console.log('User first name:', userData.firstname);
//   } else {
//     console.log('User first name not found in cookie data.');
//   }
// } else {
//   console.log('Cookie not found or data not set.');
// }


  return (
    <div>
      <img src="logo.png" className="w-32 h-auto ml-12 mt-6" />
     <div className="mt-24 flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
  {/* First div with buttons */}
  <div className="text-center md:text-left mb-12 md:ml-44">
    {/* Conditional greeting */}
    
          <h2 className="font-bold text-3xl mb-4 md:mb-12">
            <span>Welcome, </span>
            <br /> Build your profile
          </h2>
        
      
    
      <h2 className="font-bold text-3xl mb-4 md:mb-12">Welcome, Build your profile</h2>
    

    {/* LinkedIn button */}
    <button className="border bg-[#D9D9D9] hover:bg-blue-700 font-bold py-2 px-28 rounded-full flex items-center mb-4 md:mb-0">
      <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
      LinkedIn
    </button>

    {/* Manual button */}
    <Link to="/personal">
      <button className="border bg-[#D9D9D9] hover:bg-blue-700 font-bold mt-4 py-2 px-24 rounded-full flex items-center">
        Do it manually
      </button>
    </Link>

    {/* Description */}
    <p className="mt-4 md:mt-8">It will take 10 minutes</p>
  </div>

  {/* Second div with profile image */}
  <div className="relative">
    <img
      src="resume.png" // Replace with the actual path to your profile image
      alt="Profile"
      className="mr-4 md:mr-44"
      width="300"
      height="100"
    />

    {/* Skip link */}
   <Link to="/jobseekerdashboard" className="mt-4 md:mt-0 text-center md:text-right md:absolute bottom-4 right-4 md:bottom-8 md:right-8 text-sm text-[#5D6AA8]">
    Skip, I’ll do it later
  </Link>
  </div>
</div>

    </div>
  );
};

export default buildprofile;
