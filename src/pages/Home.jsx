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
    <div>
      <Navbar />

      <div className="flex p-8 max-w-7xl mx-auto flex-col h-[80vh]  pt-24 gap-8 mb-24">
        <ul className="flex items-center gap-4 justify-start pl-4">
          <li>
            <a href="#"> AI Services</a>
          </li>
          <li>
            <a href="#"> Website Design</a>
          </li>
          <li>
            <a href="#">Software Developer</a>
          </li>
          <li>
            <a href="#"> UI/UX</a>
          </li>
          <li>
            <a href="#">More</a>
            <FontAwesomeIcon className="ml-2 " icon={faAngleDown} />
          </li>
        </ul>
        {/* First Div */}
        <div className="grid grid-cols-2 text-left items-center justify-between">
          <div className="w-full">
            <h1 className="text-6xl font-bold mb-4">
              Find <span className="">exceptional</span> <br></br> tech talents
              from <br></br>anywhere in the <br></br> world.
            </h1>
            <div className="flex items-center rounded-3xl border bg-[#ffffff]  hover:bg-[#B8C1EC] border-[#bbbbbb] p-2 mb-4">
           <FontAwesomeIcon icon={faSearch} />   
  <input
    type="text"
    className="flex-grow px-4 py-2 mr-2 bg-transparent border-gray-300 rounded-lg placeholder-black::placeholder"
    placeholder="Search..."
  />
  <select
    id="category"
    name="category"
    className="px-4 py-2 bg-[#ffffff] hover:bg-[#ffffff]  text-gray-500 rounded-3xl "
  >
    <option value="jobs">Jobs</option>
    <option value="projects">Projects</option>
  </select>
</div>

          </div>

          {/* Second Div for Image */}
          <img
            src="bg.png"
            alt="Placeholder Image"
            className="w-screen h-screen object-contain"
          />
        </div>
      </div>

      <section className="mt-56 pt-52 p-8">
        <h2 className="text-4xl mr-[17rem] font-bold">
          Job seekers, made just for you.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
          <div className="mb-8 ">
            <img
              src="img1.png"
              className="w-[22rem] h-auto ml-32 object-contain"
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
                  Job seeker, sign up{" "}<FontAwesomeIcon icon={faArrowRight} className="rounded-3xl p-1 ml-5 text-black bg-[#5d6aa8]" />
                </p>

                {/* <a href="" className="flex items-center ml-2 text-white p-8">
                  <span className="text-xl bg-indigo-600 round">&#8594;</span>
                </a> */}
              </Link>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-24 w-full mx-auto bg-gray-100">
        <h2 className="text-center p-8 text-4xl">Everything you need.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex  flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg">
            <img src="image 20.png" alt="Item 1" className="w-28 h-32 mb-2" />
            <h3 className="text-sm font-bold">Web Programmer</h3>
          </div>

          <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg">
            <img src="image 21.png" alt="Item 2" className="w-32 h-32 mb-2" />
            <h3 className="text-sm font-bold">SEO Consultant</h3>
          </div>

          <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg">
            <img src="image 19.png" alt="Item 3" className="w-32 h-32 mb-2" />
            <h3 className="text-sm font-bold">Growth Hacker</h3>
          </div>

          <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg">
            <img src="image 17.png" alt="Item 4" className="w-32 h-32 mb-2" />
            <h3 className="text-sm font-bold">UX designer</h3>
          </div>

          <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg">
            <img src="image 16.png" alt="Item 5" className="w-32 h-32 mb-2" />
            <h3 className="text-sm font-bold">Full-Stack Developer</h3>
          </div>

          <div className="flex flex-col items-center bg-white hover:bg-[#5d6aa8] p-2 rounded-lg">
            <img src="image 18.png" alt="Item 6" className="w-32 h-32 mb-2" />
            <h3 className="text-sm font-bold">Data Architect</h3>
          </div>
        </div>
      </section>
      <section className=" pt-52 p-28">
        <h2 className="text-4xl font-bold mb-8 md:ml-24">
          Businesses, its a blessings
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full text-left md:w-1/2 mb-8 md:mb-0">
            <ul className="flex flex-col space-y-8 w-full">
              <li className="flex items-center">
                <img
                  src="target icon.png"
                  className="w-8 h-8"
                  alt="Money Icon"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-2xl">
                    attract niche candidates
                  </h3>
                  <p className="text-2xl text-gray-700">
                    reduce the noise of traditional recruitment. focus
                    exclusively on tech-related roles.
                  </p>
                </div>
              </li>

              <li className="flex items-center">
                <img src="key icon.png" className="w-8 h-8" alt="Key Icon" />
                <div className="ml-4">
                  <h3 className="font-bold text-2xl">
                    get verified candidates
                  </h3>
                  <p className="text-2xl text-gray-700">
                    rely on us to verify employees to avoid incompetence and
                    unreliabilty
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  src="job for you icon.png"
                  className="w-8 h-8"
                  alt="Job Icon"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-2xl">
                    you’ll find the employee just for you.
                  </h3>
                  <p className="text-2xl text-gray-700">
                    our AI integrated platform seamlessly connects you with
                    various tailor-made employees.
                  </p>
                </div>
              </li>
              <Link to="/businesssignup" className="flex hover:bg-[#5d6aa8] hover:text-white  rounded-3xl max-w-[18.5rem] items-center mt-4">
                <p className="text-2xl text-[#5d6aa8] hover:text-white p-1 flex items-center">
                  Businesses, sign up{" "}<FontAwesomeIcon icon={faArrowRight} className="rounded-3xl p-2 ml-5 text-white bg-[#5d6aa8]" />
                </p>

                {/* <a href="" className="flex items-center ml-2 text-white p-8">
                  <span className="text-xl bg-indigo-600 round">&#8594;</span>
                </a> */}
              </Link>
            
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="earth.png"
              className="w-[22rem] h-auto mr-16 object-contain"
              alt="Image"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-200 p-20">
        <div className="border border-grey rounded-md h-[40rem] flex items-stretch">
          <img
            src="Rectangle 41.png"
            className="w-3/4  object-cover"
            alt="Your Image"
          />
          <div className="w-1/4 text-center bg-blue-700 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white block mb-8 px-9 ">
              Get that job 3x faster with our AI integrated platform
            </h3>
            <button className="w-[20] px-8 py-2 bg-white rounded">
              Sign up
            </button>
          </div>
        </div>
      </section>
      <section className="p-20">
        <div className="text-center pb-16 text-3xl">
          <p>
            "At Ascentree, they don't just find jobs – they engineer careers.
            Their commitment to understanding my aspirations and matching them
            with the perfect tech opportunities is unparalleled. With their
            guidance, I didn't just land a job; I embarked on a path of growth,
            innovation, and endless possibilities. They truly connect tech
            talent with a world of potential."
          </p>
        </div>
        <div className="border border-1 border-[#e8dede] rounded-md p-4 h-[46rem]">
          {/* <ChatBox /> */}
          <div className="p-6 flex justify-between ">
            <img
              src="man AI.png"
              className="w-[15rem] h-[15rem]"
              alt="man AI"
            />

            <div className="border  text-left h-[8rem] bg-[#5D6AA8] p-6 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
              Tekworx exceeded my expectations for job searching. Their platform
              is user-friendly, allowing me to easily navigate through listings
              and find the perfect match for my skills and preferences.
            </div>
          </div>

          <div className="p-6 flex justify-between ">
            <div className="border text-left h-[8rem] bg-[#D9D9D9] p-6 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
              What really set them apart was the personalized support I
              received; they genuinely cared about helping me succeed. Thanks to
              Tekworx, I landed my dream job quickly and felt supported
              throughout the entire process.{" "}
            </div>
            <img
              src="Woman AI.png"
              className=" w-[15rem] h-[15rem]"
              alt="man AI"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-200 p-16">
        <div className="flex justify-between">
          <p className="text-3xl">Start your tech career journey today.</p>

          <Link to="/signup" className="flex items-center hover:bg-[#5d6aa8] pl-2 rounded-3xl max-w-[18.5rem] items-center ">
                <p className="text-2xl p-1 flex items-center">
                  Sign up<FontAwesomeIcon icon={faArrowRight} className="rounded-3xl p-1 ml-5 text-black bg-[#5d6aa8]" />
                </p>

                {/* <a href="" className="flex items-center ml-2 text-white p-8">
                  <span className="text-xl bg-indigo-600 round">&#8594;</span>
                </a> */}
              </Link>
        </div>
      </section>
      <footer className=" bg-indigo-600 text-white p-4">
        <div className="flex ">
          <div className="flex">
            <div className="flex flex-col mr-4">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                className="px-2 py-1 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                className="px-2 py-1 border rounded"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="px-2 py-1 border rounded"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
