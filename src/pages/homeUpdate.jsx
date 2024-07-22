import React from 'react';
import Navbar from '../component/Navbar';

const HomeUpdate = () => {
  return (
    <div>
         <Navbar />
      <div className="bg-[#c4cee9] flex flex-col items-center justify-center min-h-1/2">
        <div className="bg-[#5d6aa8] p-20 px-[4rem] rounded-md shadow-md text-center w-[70%] mb-8">
          <h1 className="text-white text-3xl mb-12">Find Your Dream Job</h1>
          <form className="flex justify-between gap-4">
            <select className="p-2 border w-full border-gray-300 rounded-md">
              <option>All Countries</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <select className="p-2 border w-full border-gray-300 rounded-md">
              <option>Skills Level</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <select className="p-2 border w-full border-gray-300 rounded-md">
              <option>Job Type</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <button className="bg-[red] w-[60%] text-white p-1 rounded-md">Find</button>
          </form>
        </div>
        <div className=" p-8  text-center w-[50%]">
          <h2 className="text-[#444] text-3xl mb-6">Explore Projects Opportunities</h2>
          <form className="flex justify-between gap-4">
            <select className="p-2 w-full border border-gray-300 rounded-md">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <select className="p-2 w-full border border-gray-300 rounded-md">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <button className="bg-[#444] w-[60%] text-white p-1 rounded-md">Proceed</button>
          </form>
        </div>
      </div>
        {/* New content */}
      
       <div className="flex justify-center  mt-8">
       
        <div className="border border-gray-400 rounded-md p-4 m-4 w-1/2">
          <h3 className="bg-gray-500 text-left text-[#ffffff] p-2 rounded-md">Job Title</h3>
          <div className="p-4">
            <span className="text-left block mt-2">Full Stack Developer - remote.</span>
            <h3 className="mt-4 text-left text-[#5d6aa8]">Expire Date</h3>
            <span className="text-left block mt-2">14/06/2024.</span>
            <h3 className="mt-4 text-left text-[#5d6aa8]">Overview</h3>
            <div className="flex justify-between items-center mt-2">
            <p className="text-left">This is a paragraph below Heading 3.</p>
            <button className="bg-[#5d6aa8] text-white p-2 rounded-md">Click Me</button>
          </div>
          </div>
          
        </div>
        <div className="border border-gray-400 rounded-md p-4 m-4 w-1/2 overflow-y-auto max-h-64">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="p-2 text-left">Live Project</th>
              </tr>
              <hr/>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
              </tr>
              <tr>
              <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
              </tr>
              <tr>
              <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
              </tr>
              <tr className="border-bottom ">
              <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
              </tr>
              <tr>
              <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
                <td className="p-2">Project 1</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

    <div className="flex items-center gap-4 p-4" style={{backgroundColor: "#c4cee9"}}>
            <h2 className="text-black font-bold text-3xl mb-12 m-4 w-1/2">Find exceptional tech <br />talents from <br />anywhere in <br />the world</h2>
            <input
                type="text"
                placeholder="Search"
                className="p-2 flex-grow border rounded-md"
            />
            <button className="bg-[red] w-[10%] text-white p-2 rounded-md">Proceed</button>
        </div>
    </div>
  )
}

export default HomeUpdate