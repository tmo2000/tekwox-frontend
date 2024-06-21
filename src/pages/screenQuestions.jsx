import React from "react";
import { Link } from "react-router-dom";

const screenQuestions = () => {
  return (
    <div>
      <div className="flex">
        {/* Left-aligned image */}
        <div>
          <img
            src="logo.png" // Replace with the actual path to your logo image
            alt="Logo"
            className="w-32 h-auto ml-12 mt-6"
          />
        </div>

        {/* Right-aligned image */}
        <div className="ml-auto">
          <img
            src="profile.png" // Replace with the actual path to your second image
            alt="Another Image"
            className="w-12 h-auto mr-12 mt-6"
          />
        </div>
      </div>
      <div className="items-center justify-center border border-1 rounded-2xl h-auto w-[80%] ml-[10rem] text-left">
        <h1 className="ml-[3rem] mt-4">Screening Questions</h1>
        <p className="ml-[3rem] mt-4">Answer these screening questions</p>
        <br /> <br />
        <div className="border border-1 border-black rounded-xl h-auto w-[75%]  ml-[3rem] mb-9 text-left">
          <span className="pl-2">Have you completed the following level of Education: Bachelor's?</span>
          {/* <button className="ml-[10rem]">x</button> */}
          <div className="border border-1 border-black"></div>
          <label className="pl-2" htmlFor="qualification">
            Answer   <select
                    type="text"
                    id="country"
                    name="country"
                    className="mt-4 p-2 ml-4 mb-8  border border-gray-300 rounded-3xl  text-gray-500 w-[10rem] h-auto"
                    placeholder=""
                  >
                    <option value="" className="" disabled selected>
                        
                    </option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>
          </label>
        </div>
        <div className="border border-1 border-black rounded-xl h-auto w-[75%] ml-[3rem] mb-9 text-left">
          <span className="pl-2">Are you willing to undergo a background check, in accordance with local law/regulations?</span>
          {/* <button className="ml-[10rem]">x</button> */}
          <div className="border border-1 border-black"></div>
          <label className="pl-2" htmlFor="qualification">
            Answer  <select
                    type="text"
                    id="country"
                    name="country"
                    className="mt-4 p-2 ml-4 mb-8  border border-gray-300 rounded-3xl  text-gray-500 w-[10rem] h-auto"
                    placeholder=""
                  >
                    <option value="" className="" disabled selected>
                      
                    </option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>
          </label>
        </div>
        <div className="border border-1 border-black rounded-xl h-auto w-[75%] ml-[3rem] mb-9 text-left">
          <span className="pl-2">Will you now or in the future require sponsorship for employment visa status?  </span>
          {/* <button className="ml-[10rem]">x</button> */}
          <div className="border border-1 border-black"></div>
          <label className="pl-2" htmlFor="qualification">
            Answer  <select
                    type="text"
                    id="country"
                    name="country"
                    className="mt-4 p-2 ml-4 mb-8  border border-gray-300 rounded-3xl  text-gray-500 w-[10rem] h-auto"
                    placeholder=""
                  >
                    <option value="" className="" disabled selected>
                      
                    </option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>
          </label>
        </div>
      </div>
      <div className=" items-center justify-center w-[40rem] justify-between items-left mt-4 ml-[14rem] inline-flex">
                <div className="flex mt-3 ml-10  gap-6">
                    <Link to="/jobseekerdashboard">
                        <button
                            type="button"
                            className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                        >
                            Submit Application
                        </button>
                    </Link >
                    <Link to="/jobseekerdashboard">
                    <button
                        type="button"
                        className="bg-[#F2AB39] hover:bg-blue-700 text-black font-bold py-1 px-8 rounded-full "
                    >
                        Save for later
                    </button>
                    </Link>
                   
                </div>
            </div>
    </div>
  );
};

export default screenQuestions;
