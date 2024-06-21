import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="overflow-y-none">
      <img src="logo.png" className="w-32 h-auto ml-12 mt-2" />
      <div className="text-center items-center mt-2">
        <h1 className="text-center text-5xl text-gray-700 mb-5">
          are you a job seeker or a business?
        </h1>
        <div className="flex border border-[#5D6AA8] rounded-xl justify-center items-between ml-[8rem] w-[60rem] h-[24rem] gap-[3rem]">
<div> <img
              className="w-[20rem] h-auto "
              src="international 2.png" // Replace with your image source
              alt="Box 1"
            />
            <Link
              to="/jobseekersignup"
              className="mb-8 text-[#5d6aa8] mr-14 px-4 py-2 border border-[#5D6AA8] rounded-3xl	 hover:bg-[#5D6AA8] hover:text-white transition-all duration-3000 ease-out "
            >
              register as a job seeker
            </Link></div>
          <div className="border-l border-[#5D6AA8] h-auto"></div>

          <div><img
              className="w-[20rem] h-auto"
              src="recruitment 2.png" // Replace with your image source
              alt="Box 2"
            />
            <Link
              to="/businessSignup"
              className="mb-8 text-[#5d6aa8] border border-[#5D6AA8] px-4 py-2 rounded-3xl	transition-all duration-3000 ease-out hover:bg-[#5D6AA8] hover:text-white "
            >
              register as a business{" "}
            </Link></div>
        </div>
        {/* <div className="items-center mx-auto w-[60%] flex justify-center gap-12"> */}
          {/* Box 1 */}
          {/* <div className="w-1/2 p-4  rounded-md border-2 border-[#5D6AA8]">
            <img
              className="w-[20rem] h-auto  mb-2"
              src="international 2.png" // Replace with your image source
              alt="Box 1"
            />
            <Link
              to="/jobseekersignup"
              className="mb-8 text-[#5d6aa8] px-4 py-2 border border-[#5D6AA8] rounded-3xl	 hover:bg-[#5D6AA8] hover:text-white transition-all duration-3000 ease-out "
            >
              register as a job seeker
            </Link>
          </div> */}

          {/* Box 2 */}
          {/* <div className="w-1/2 p-4 border-2 rounded-md border-[#5D6AA8]">
            <img
              className="w-full h-auto mb-2"
              src="recruitment 2.png" // Replace with your image source
              alt="Box 2"
            />
            <Link
              to="/businessSignup"
              className="mb-8 text-[#5d6aa8] border border-[#5D6AA8] px-4 py-2 rounded-3xl	transition-all duration-3000 ease-out hover:bg-[#5D6AA8] hover:text-white "
            >
              register as a business{" "}
            </Link>
          </div>
        </div> */}
        <h3 className="text-2xl mt-10 text-[#444] mb-12">
          Already have an account?{" "}
          <Link to="/Login" className="text-[#5D6AA8]">
            Login
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Signup;
