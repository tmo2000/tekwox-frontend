import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ChatBox from "../component/chat-box/chat-box";

const Home = () => {
  return (
    <div className="max-w-full ">
      <Navbar />
   
     <div className="flex mt-[5rem] grid grid-cols-1 lg:grid-cols-2 gap-2 border-b-2 border-gray-500 overflow-x-hidden">
  <div className="ml-4 lg:ml-[8rem]">
    <ul className="flex flex-wrap items-center gap-4 justify-start pl-4">
      <li>
        <a href="#">Popular:</a>
      </li>
      <li>
        <a href="#">AI Services</a>
      </li>
      <li>
        <a href="#">Website Design</a>
      </li>
      <li>
        <a href="#">Software Developer</a>
      </li>
      <li>
        <a href="#">UI/UX</a>
      </li>
      <li>
        <a href="#">More</a>
        <FontAwesomeIcon className="ml-2" icon={faAngleDown} />
      </li>
    </ul>
    <div className="mt-4">
      <h1 className="text-3xl lg:text-6xl font-bold mb-4">
        Find <span className="">exceptional</span> <br /> tech talents from <br /> anywhere in the <br /> world.
      </h1>
      <div className="flex items-center rounded-3xl border bg-[#ffffff] hover:bg-[#B8C1EC] border-[#bbbbbb] p-2 mb-4">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          className="flex-grow px-2 py-1 lg:px-4 lg:py-2 mr-2 bg-transparent border-gray-300 rounded-lg placeholder-black::placeholder"
          placeholder="Search..."
        />
        <select
          id="category"
          name="category"
          className="px-2 py-1 lg:px-4 lg:py-2 bg-[#ffffff] hover:bg-[#ffffff] text-gray-500 rounded-3xl"
        >
          <option value="jobs">Jobs</option>
          <option value="projects">Projects</option>
        </select>
      </div>
    </div>
  </div>
  <div className="hidden lg:flex justify-end lg:ml-[24rem]">
    <img
      src="bg.png"
      alt="Placeholder Image"
      className="object-contain"
    />
  </div>
</div>

       <section className="lg:mt-5 mt:10 lg:pt-5 relative p-8">
        <h2 className="lg:text-4xl lg:mr-[17rem] ml-[2rem] font-bold text-xl">
          Job seekers, made just for you.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
          <div className="mb-8 ">
            <img
              src="img1.png"
              className="lg:w-[22rem] lg:ml-32 ml-[5rem] w-[12rem] h-auto  object-contain"
              alt="Image"
            />
          </div>
          <div className="w-full text-left">
            <ul className="flex flex-col space-y-8 w-full">
              <li className="flex items-center mt-4">
                <img
                  src="money icon.png"
                  className="w-8 h-8"
                  alt="Money Icon"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-2xl">It's free.</h3>
                  <p className="text-2xl text-gray-700">
                    Remove financial barriers. Access diverse tech opportunities
                    to launch your career.
                  </p>
                </div>
              </li>
              <li className="flex items-center mt-4">
                <img
                  src="target icon.png"
                  className="w-8 h-8"
                  alt="Target Icon"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-2xl">
                    No hassle, we're all tech bros.
                  </h3>
                  <p className="text-2xl text-gray-700">
                    Reduce the noise of traditional recruitment. Focus
                    exclusively on tech-related roles.
                  </p>
                </div>
              </li>
              <li className="flex items-center mt-4">
                <img src="key icon.png" className="w-8 h-8" alt="Key Icon" />
                <div className="ml-4">
                  <h3 className="font-bold text-2xl">
                    Network. Network. Network.
                  </h3>
                  <p className="text-2xl text-gray-700">
                    Find your tech community. Connect with like-minded tech
                    individuals.
                  </p>
                </div>
              </li>
              <li className="flex items-center mt-4">
                <img
                  src="job for you icon.png"
                  className="w-8 h-8"
                  alt="Job Icon"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-2xl">
                    You'll find the job just for you.
                  </h3>
                  <p className="text-2xl text-gray-700">
                    Our AI integrated platform seamlessly connects you with
                    various tailor-made job opportunities.
                  </p>
                </div>
              </li>

              <Link to="/jobseekersignup" className="flex hover:bg-[#5d6aa8] hover:text-white pl-2 rounded-3xl max-w-[18.5rem] items-center mt-4">
                <p className="text-2xl p-1 flex items-center">
                  Job seeker, sign up{" "}<FontAwesomeIcon icon={faArrowRight} className="rounded-3xl p-1 ml-5 text-white bg-[#5d6aa8]" />
                </p>

              
              </Link>
            </ul>
          </div>
        </div>
      </section>
     <section className="p-8 md:p-24 w-full mx-auto bg-gray-100">
  <h2 className="text-center p-8 text-2xl md:text-4xl">Everything you need.</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img src="image 20.png" alt="Item 1" className="w-28 h-32 mb-2" />
      <h3 className="text-sm font-bold hover:text-white">Web Programmer</h3>
    </div>

    <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img src="image 21.png" alt="Item 2" className="w-32 h-32 mb-2" />
      <h3 className="text-sm font-bold hover:text-white">SEO Consultant</h3>
    </div>

    <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img src="image 19.png" alt="Item 3" className="w-32 h-32 mb-2" />
      <h3 className="text-sm font-bold hover:text-white">Growth Hacker</h3>
    </div>

    <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img src="image 17.png" alt="Item 4" className="w-32 h-32 mb-2" />
      <h3 className="text-sm font-bold hover:text-white">UX Designer</h3>
    </div>

    <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img src="image 16.png" alt="Item 5" className="w-32 h-32 mb-2" />
      <h3 className="text-sm font-bold hover:text-white">Full-Stack Developer</h3>
    </div>

    <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img src="image 18.png" alt="Item 6" className="w-32 h-32 mb-2" />
      <h3 className="text-sm font-bold hover:text-white">Data Architect</h3>
    </div>
  </div>
</section>

 <section className="lg:mt-5 mt-10 lg:pt-5 relative p-8">
  <h2 className="text-4xl font-bold mb-8 md:ml-24">
    Businesses, it's a blessing
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
    <div className="mb-8 md:hidden">
      {/* Image on Top for Small Screens */}
      <img
        src="earth.png"
        className="w-[22rem] h-auto object-contain mx-auto"
        alt="Image"
      />
    </div>
    
    {/* Text Content */}
    <div className="w-full text-left md:w-1/2 mb-8 md:mb-0 md:ml-[10rem]">
      <ul className="flex flex-col space-y-8 w-full">
        <li className="flex items-center">
          <img src="target icon.png" className="w-8 h-8" alt="Money Icon" />
          <div className="ml-4">
            <h3 className="font-bold text-2xl">Attract niche candidates</h3>
            <p className="text-2xl text-gray-700">
              Reduce the noise of traditional recruitment. Focus exclusively on
              tech-related roles.
            </p>
          </div>
        </li>
        <li className="flex items-center">
          <img src="key icon.png" className="w-8 h-8" alt="Key Icon" />
          <div className="ml-4">
            <h3 className="font-bold text-2xl">Get verified candidates</h3>
            <p className="text-2xl text-gray-700">
              Rely on us to verify employees to avoid incompetence and
              unreliability.
            </p>
          </div>
        </li>
        <li className="flex items-center">
          <img src="job for you icon.png" className="w-8 h-8" alt="Job Icon" />
          <div className="ml-4">
            <h3 className="font-bold text-2xl">
              You’ll find the employee just for you.
            </h3>
            <p className="text-2xl text-gray-700">
              Our AI integrated platform seamlessly connects you with various
              tailor-made employees.
            </p>
          </div>
        </li>
        <Link
          to="/businesssignup"
          className="flex hover:bg-[#5d6aa8] hover:text-white pl-2 rounded-3xl max-w-[18.5rem] items-center mt-4"
        >
          <p className="text-2xl p-1 flex items-center">
            Businesses, sign up{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="rounded-3xl p-1 ml-5 text-white bg-[#5d6aa8]"
            />
          </p>
        </Link>
      </ul>
    </div>
    
    {/* Image on Right for Large Screens */}
    <div className="hidden md:block w-full md:w-1/2">
      <img
        src="earth.png"
        className="w-[22rem] h-auto mr-16 object-contain"
        alt="Image"
      />
    </div>
  </div>
</section>
   <section className="bg-gray-200 p-10 md:p-20 flex justify-center overflow-x-hidden items-center">
  <div className="border border-gray-400 rounded-md h-[28rem] flex flex-col md:flex-row items-stretch w-full md:max-w-6xl">
    <img
      src="Rectangle 41.png"
      className="w-full md:w-3/4 h-[20rem] md:h-full object-cover rounded-md md:rounded-l-md"
      alt="Your Image"
    />
    <div className="w-full md:w-1/4 bg-blue-700 flex flex-col justify-center items-center md:rounded-r-md">
      <h3 className="text-lg font-bold text-white mb-8 px-4 md:px-9 text-center">
        Get that job 3x faster with our AI integrated platform
      </h3>
      <button className="w-32 md:w-[17rem] px-8 py-2 bg-white rounded mb-4 md:mb-0">
        Sign up
      </button>
    </div>
  </div>
</section>

<section className="p-4 md:p-20">
  <div className="text-center pb-8 md:pb-16 text-xl md:text-3xl">
    <p>
      "At Tekwox, they don't just find jobs – they engineer careers. Their
      commitment to understanding my aspirations and matching them with the
      perfect tech opportunities is unparalleled. With their guidance, I didn't
      just land a job; I embarked on a path of growth, innovation, and endless
      possibilities. They truly connect tech talent with a world of potential."
    </p>
  </div>
  <div className="border border-1 border-[#e8dede] rounded-md p-4 md:p-8 md:h-[46rem]">
    <div className="p-6 flex flex-col md:flex-row md:justify-between md:items-center relative">
      <img
        src="man AI.png"
        className="w-full md:w-[15rem] h-auto md:h-[15rem] mb-4 md:mb-0"
        alt="man AI"
      />
      <div className="border text-left h-auto md:h-[8rem] bg-[#5D6AA8] text-white p-6 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl relative">
        Tekworx exceeded my expectations for job searching. Their platform is
        user-friendly, allowing me to easily navigate through listings and find
        the perfect match for my skills and preferences.
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#5D6AA8]"></div>
        </div>
      </div>
    </div>

    <div className="p-6 flex flex-col md:flex-row md:justify-between md:items-center relative">
      <div className="border text-left h-auto md:h-[8rem] bg-[#D9D9D9] p-6 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl relative">
        What really set them apart was the personalized support I received;
        they genuinely cared about helping me succeed. Thanks to Tekworx, I
        landed my dream job quickly and felt supported throughout the entire
        process.
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#D9D9D9]"></div>
        </div>
      </div>
      <img
        src="Woman AI.png"
        className="w-full md:w-[15rem] h-auto md:h-[15rem] mt-4 md:mt-0"
        alt="Woman AI"
      />
    </div>
  </div>
</section>




 
      <section className="bg-[#D9D9D9] p-8 md:p-16">
  <div className="flex flex-col md:flex-row items-center justify-between">
    <p className="text-2xl md:text-3xl text-center md:text-left mb-4 md:mb-0">
      Start your tech career journey today.
    </p>

    <Link
      to="/signup"
      className="flex items-center justify-center md:justify-start hover:bg-[#5d6aa8] pl-2 rounded-3xl max-w-[18.5rem] md:ml-4 items-center mt-4 md:mt-0"
    >
      <p className="text-xl md:text-2xl p-1 flex items-center">
        Sign up
        <FontAwesomeIcon
          icon={faArrowRight}
          className="rounded-3xl p-1 ml-3 md:ml-5 text-black bg-[#5d6aa8]"
        />
      </p>
    </Link>
  </div>
</section>

<footer className="bg-[#EDEFF5] text-white p-4">
  <div className="flex flex-col gap-4 mt-10 lg:ml-20 sm:ml-0">
    <h1 className="text-2xl text-black font-inter font-semibold">
      Get updates and tips on how to <br /> best use our platform
    </h1>
    <div className="flex flex-col sm:flex-row gap-2 mt-4">
      <div className="flex flex-col mr-4">
        <input
          type="text"
          id="firstName"
          className="px-2 py-1 bg-[#D9D9D9] border rounded-3xl"
          placeholder="First Name"
        />
      </div>
      <div className="flex flex-col mr-4">
        <input
          type="text"
          id="lastName"
          className="px-2 py-1 bg-[#D9D9D9] border rounded-3xl"
          placeholder="Last Name"
        />
      </div>
    </div>
  </div>
  <div className="flex flex-col mt-4 lg:ml-20 sm:ml-0">
    <input
      type="email"
      id="email"
      className="px-2 py-1 bg-[#D9D9D9] w-full sm:w-[26.35rem] border rounded-3xl"
      placeholder="Email"
    />
  </div>
  <div className="flex justify-center items-center mt-4 lg:ml-20 sm:ml-0 sm:justify-end">
    <ul className="font-semibold text-[#606060] text-center sm:text-right mb-4 space-y-2">
      <li>About</li>
      <li>Contact Us</li>
      <li>Security</li>
      <li>How we compare</li>
      <li>Careers</li>
      <li>Accessibility</li>
      <li>Trust and Safety</li>
    </ul>
  </div>
  <div className="border-[#606060] border-t flex flex-col sm:flex-row mt-4">
    <div className="flex justify-center sm:justify-start items-center mt-4 sm:mt-0">
      <h2 className="text-black flex flex-row">
        Follow us:
        <img className="ml-3 h-7 w-7" src="facebook.png" alt="" />
        <img className="ml-3 h-7 w-7" src="linkedinblack.png" alt="" />
        <img className="ml-3 h-7 w-7" src="instagram.png" alt="" />
        <img className="ml-3 h-7 w-7" src="youtube.png" alt="" />
      </h2>
    </div>
    <div className="flex justify-center items-center mt-4 sm:mt-0 sm:ml-[25rem]">
      <h2 className="text-black text-center flex flex-row">
        <img className="ml-3 h-4 w-4" src="copyright.png" alt="" />
        Ascentree Services Ltd 2024
      </h2>
    </div>
    <div className="flex justify-center sm:justify-end items-center mt-4 sm:mt-0 sm:ml-[30rem] gap-4">
      <h2 className="text-black text-center flex flex-row">
        <img className="h-3 w-3" src="globe.png" alt="" />
        English
      </h2>
      <h2 className="text-black text-center flex flex-row">
        <img className="h-3 w-3" src="aed.png" alt="" />
        DHS
      </h2>
    </div>
  </div>
</footer>


    </div>
  );
};

export default Home;
