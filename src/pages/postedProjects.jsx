import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PostedProjects = () => {
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
      <div className="flex relative">
        <Link to="/listedprojects" className="absolute top-1 ">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </Link>
      </div>
      <div>
        <div className="flex">
          <div className="border border-1 rounded-2xl overflow-x-auto overflow-y-auto max-h-[70vh] max-w-[70%] px-10 mt-[2rem] ml-[3rem] text-left flex-grow ">
            <div className="flex justify-center pb-12 font-semibold mt-8 gap-7">
              <div className="flex items-center">
  <img src="Locationicon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Lagos, Nigeria</p>
</div>
<div className="flex items-center">
  <img src="Statusicon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Open to only Local Businesses</p>
</div>
<div className="flex items-center">
  <img src="Bidlimiticon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Bid Limit</p>
</div>
<div className="flex items-center">
  <img src="Liveprojecticon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Live Project</p>
</div>
            </div>
            <h2 className="text-2xl font-bold">
              Project A01 <br />
              Adaptive Soft Robotic Limb for Rehabilitation Assistance
            </h2>
            <div className="mt-[4rem] text-xl font-semibold">
              <h3 className="text-2xl">PROJECT DETAILS</h3>
              <p>
                <span className="font-bold">Overview:</span>This project aims to
                develop a programmable soft robotic limb designed to aid in
                rehabilitation exercises for individuals recovering from limb
                injuries or surgeries. The soft robotic limb will employ a
                combination of flexible materials, sensors, and programmable
                controls to assist patients in performing prescribed exercises,
                monitoring progress, and adapting to the user's abilities.
              </p>
            </div>
            <div className="mt-[2rem] text-xl">
              <h3 className="font-semibold">Key Components and Features:</h3>
              <p>
                1. Soft Robotic Limb: Constructed using silicone-based materials
                and pneumatic actuators, the limb will mimic the natural
                movements and flexibility of human limbs. It will consist of
                multiple segments to simulate joints and allow for a wide range
                of motion.
              </p>
              <p>
                2. Sensors and Feedback Systems: Integrated sensors, such as
                pressure sensors and motion trackers, will gather data on the
                user's movement, muscle engagement, and force exertion. This
                feedback will be used to adjust the assistance provided by the
                robotic limb in real time.
              </p>
              <p>
                3. Programmable Control Unit: A central control system, possibly
                utilizing machine learning algorithms, will interpret sensor
                data and adjust the robotic limb's behavior. It will be
                programmable to adapt to different rehabilitation exercises,
                customizing assistance levels and movement patterns based on the
                individual's needs.
              </p>
              <p>
                4. User Interface: An intuitive interface, such as a smartphone
                app or a user-friendly control panel, will allow patients and
                therapists to input exercise plans, track progress, and make
                adjustments to the robotic limb's behavior easily.
              </p>
            </div>
            <div className="mt-[2rem] text-xl">
              <h3 className="font-semibold">Project Goals:</h3>
              <p>
                1. Functionality: Develop a soft robotic limb prototype capable
                of assisting users in performing a range of rehabilitation
                exercises, providing appropriate support and resistance as
                needed.
              </p>
              <p>
                2. Adaptability: Implement machine learning algorithms or
                adaptable control systems that can learn and adjust the
                assistance levels based on user feedback and performance.
              </p>
              <p>
                3. User-Friendly Interface: Create an easy-to-use interface for
                both patients and therapists, ensuring smooth interaction and
                data monitoring.
              </p>
              <p>
                4. Safety and Comfort: Prioritize safety features to prevent
                injury during rehabilitation exercises and ensure the soft
                robotic limb's comfort during prolonged use.
              </p>
            </div>
            <div className="mt-[2rem] text-xl">
              <h3 className="font-semibold">Expected Impact:</h3>
              <ul className="list-disc">
                <li>
                  Enhanced rehabilitation experience for individuals recovering
                  from limb injuries or surgeries.
                </li>
                <li>
                  Improved adherence to prescribed exercises due to the
                  personalized and adaptable assistance provided by the soft
                  robotic limb
                </li>
                <li>
                  Potential to reduce recovery time and increase overall
                  rehabilitation effectiveness.
                </li>
              </ul>
            </div>
          </div>
          <Link className="border border-1 rounded-xl mt-[2rem] h-[30%] w-[20%] mx-auto" to="/viewbids">
          <div>
            <div className="flex pb-10">
              <div className="">
                <h1 className="mt-10 ml-[4.0rem] font-bold text-2xl">5</h1>
                <p className="mt-4 ml-[3.9rem]">bids</p>
              </div>
              <div>
                <h1 className="mt-10 ml-[1.9rem] font-bold text-2xl">24</h1>
                <p className="mt-4 ml-[2.1rem]">views</p>
              </div>
            </div>
          </div>
          </Link>
          
        </div>
      </div>
      <div className="absolute top-[21rem] right-[1rem]">
        <Link to="/viewbids" className="ml-[54rem]">
          <button
            type="button"
            className="bg-[#5D6AA8] bg-opacity-95 hover:bg-[#5D6AA8] text-white font-bold py-1 px-[3.6rem] rounded-full "
          >
            View bids
          </button>
        </Link>
        <button
          type="button"
          className="bg-[#5D6AA8] bg-opacity-95 ml-[54rem] mt-2 hover:bg-[#5D6AA8] text-white font-bold py-1 px-10 rounded-full "
        >
          Repost Project
        </button>
      </div>
    </div>
  );
};

export default PostedProjects;
