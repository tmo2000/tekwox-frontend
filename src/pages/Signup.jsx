import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="overflow-y-auto">
      <img src="logo.png" className="w-32 h-auto ml-12 mt-2" />
      <div className="text-center items-center mt-2 px-4 md:px-0">
        <h1 className="text-center text-3xl md:text-5xl text-gray-700 mb-5">
          Are you a job seeker or a business?
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row border border-[#5D6AA8] rounded-xl justify-center items-center gap-4 md:gap-8 max-w-[60rem] w-full px-4 py-8">
            {/* Box 1 */}
            <div className="flex flex-col items-center">
              <img
                className="w-[15rem] md:w-[20rem] h-auto mb-4"
                src="international 2.png" // Replace with your image source
                alt="Box 1"
              />
              <Link
                to="/jobseekersignup"
                className="mb-4 md:mb-8 text-[#5d6aa8] px-4 py-2 border border-[#5D6AA8] rounded-3xl hover:bg-[#5D6AA8] hover:text-white transition-all duration-300 ease-out"
              >
                Register as a job seeker
              </Link>
            </div>

            {/* Vertical Divider */}
            <div className="border-l border-[#5D6AA8] h-[25rem] hidden md:block"></div>

            {/* Box 2 */}
            <div className="flex flex-col items-center">
              <img
                className="w-[15rem] md:w-[20rem] h-auto mb-4"
                src="recruitment 2.png" // Replace with your image source
                alt="Box 2"
              />
              <Link
                to="/businessSignup"
                className="mb-4 md:mb-8 text-[#5d6aa8] px-4 py-2 border border-[#5D6AA8] rounded-3xl transition-all duration-300 ease-out hover:bg-[#5D6AA8] hover:text-white"
              >
                Register as a business
              </Link>
            </div>
          </div>

          <h3 className="text-lg md:text-xl mt-10 text-[#444] mb-12">
            Already have an account?{" "}
            <Link to="/Jobseekerlogin" className="text-[#5D6AA8]">
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signup;
