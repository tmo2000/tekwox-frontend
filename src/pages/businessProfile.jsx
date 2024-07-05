import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faBars, faTimes, faArrowLeft,faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BusinessInfoForm from "../component/Businessprofile/BusinessInfoForm";
import IndustryForm from "../component/Businessprofile/IndustryForm";
import WebsiteForm from "../component/Businessprofile/WebsiteForm";
import ContactForm from "../component/Businessprofile/ContactForm";
import AddressForm from "../component/Businessprofile/AddressForm";

const BusinessProfile = () => {
  const cookieNames = "Tekwox";
  const [businessDetails, setBusinessDetails] = useState({
    businessName: "",
    industry: "",
    website: "",
    bio: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    // Function to retrieve business details from cookie
    const getBusinessDetailsFromCookie = () => {
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(";");

      let cookieValue = "";
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieNames + "=") === 0) {
          cookieValue = cookie.substring(cookieNames.length + 1);
          break;
        }
      }

      if (cookieValue) {
        const parsedData = JSON.parse(cookieValue);
        const userDetails = parsedData?.data?.user?.businessDetails;
        if (userDetails) {
          setBusinessDetails({
            businessName: userDetails.businessname || "",
            industry: userDetails.industry || "",
            website: userDetails.website || "",
            bio: userDetails.bio || "",
          });
        }
      }
    };

    getBusinessDetailsFromCookie();
  }, []);

  return (
    <div>
      <div>
        <div className="relative z-10">
          <nav className="bg-white fixed top-0 left-0 w-full border-b">
            <div className="py-4 px-6 w-full flex items-center justify-between">
              <div className='flex items-center gap-8'>
                <img src="logo.png" className="w-24 h-auto" alt="Logo" />
                <ul className="hidden md:flex items-center gap-4">
                  <li>
                    <Link to="/postedjobs" className="ml-4">
                      Posted Jobs
                    </Link>
                    <Link to="/postedprojects" className="ml-4">
                      Posted Projects
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <div className="mr-4  md:block">
                  <FontAwesomeIcon icon={faBell} size="1x" />
                </div>
                <div className=" md:block">
                  <FontAwesomeIcon icon={faCog} size="1x" />
                </div>
                <div className="block md:hidden">
                  <FontAwesomeIcon icon={faBars} size="1x" onClick={toggleModal} />
                </div>
              </div>
            </div>
          </nav>
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl">Menu</h2>
                  <FontAwesomeIcon icon={faTimes} size="1x" onClick={toggleModal} />
                </div>
                <ul>
                  <li>
                    <Link to="/postedjobs" className="block py-2" onClick={toggleModal}>
                      Posted Jobs
                    </Link>
                  </li>
                  <li>
                    <Link to="/postedprojects" className="block py-2" onClick={toggleModal}>
                      Posted Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="w-full max-w-[1000px] mt-[6rem]">
          <div className="lg:ml-10 ml-2">
 <Link to="/businessdashboard">
              <FontAwesomeIcon icon={faArrowLeft} size="2x" className="mr-2" />
            </Link>
          </div>
           
            <div className="w-72 h-64 lg:left-6 mt-4 absolute flex-col justify-center items-center  gap-4 inline-flex ml-[3rem]">
  <div className="w-40 h-40 flex ml-10 lg:ml-2 justify-center items-center">
    <img src="profile.png" alt=""  />
  </div>
  <div className="text-justify text-black text-2xl font-medium font-inter relative">
              {/* {businessDetails.businessName}*/}  <h3 className="text-2xl mb-[1rem] lg:ml-1 ml-8">Ascentree Service </h3>
    <span className="inline-block border text-slate-500 text-[1rem] border-dotted border-blue-500 lg:ml-10 ml-[4.5rem] rounded-2xl px-2 py-1">
      {businessDetails.verificationStatus ? "Verified" : "Unverified"}
      {businessDetails.verificationStatus ? (
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 ml-1" />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 ml-1" />
      )}
    </span>
  </div>
</div>

<div className="w-[100%] px-5 md:ml-5 mt-[20rem] absolute justify-start items-start gap-28 md:inline-flex">
              <div className="md:w-[34%] flex-col justify-start items-start gap-6 mb-10 inline-flex">
                <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
                  <div className="justify-start items-start gap-96 inline-flex">
                    <BusinessInfoForm />
                  </div>
                  <div className="w-[80%] justify-start text-left inline-flex">
                    <div className="w-[90%] text-black text-lg font-normal font-['Inter']">
                      {businessDetails.bio}
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
                  <div className="justify-start items-start gap-6 inline-flex">
                    <IndustryForm />
                  </div>
                  <div className="self-stretch justify-start items-center gap-7 inline-flex">
                    <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="w-[80%] justify-start text-left inline-flex">
                        <div className="w-[90%] text-black text-lg font-normal font-['Inter']">
                          {businessDetails.industry}
                        </div>
                        <div className="w-6 h-6 relative" />
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
                  <div className="justify-start items-start gap-6 inline-flex">
                    <div className="text-slate-500 text-2xl font-semibold font-['Inter']">
                      Languages
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-7 inline-flex">
                    <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="w-[80%] justify-start text-left inline-flex">
                        <div className="w-[90%] text-black text-lg font-normal font-['Inter']">
                          English:Fluent
                        </div>
                        <div className="w-6 h-6 relative" />
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
                  <div className="justify-start items-start gap-6 inline-flex">
                    <div className="text-slate-500 text-2xl font-semibold font-['Inter']">
                      Verification
                    </div>
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="w-[80%] justify-start text-left inline-flex">
                        <div className="w-[90%] text-black text-lg font-normal font-['Inter']">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </div>
                        <div className="w-6 h-6 relative" />
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
              </div>
              <div className="md:w-[46%] flex-col justify-start items-start gap-6 inline-flex">
                <div className="h-auto self-stretch px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
                  <div className="justify-start items-start gap-96 inline-flex">
                    <WebsiteForm />
                  </div>
                  <div className="self-stretch justify-start items-center gap-24 inline-flex">
                    <div className="w-[100%] px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="w-[100%] justify-start text-left inline-flex">
                        <div className="w-[80%] grow shrink basis-0 text-black text-lg font-medium font-['Inter']">
                          {businessDetails.website}
                        </div>
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="self-stretch h-40 px-10 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
                  <div className="justify-start items-start gap-6 inline-flex">
                    <ContactForm />
                  </div>
                  <div className="self-stretch justify-start items-center gap-7 inline-flex">
                    <div className="grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch justify-start items-start gap-2 inline-flex">
                        <div className="text-black text-base font-normal font-['Inter']">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
                <div className="self-stretch h-auto px-4 py-8 bg-white rounded-2xl border border-zinc-400 border-opacity-75 flex-col justify-start items-start gap-8 flex">
                  <div className="justify-start items-start gap-6 inline-flex">
                    <AddressForm />
                  </div>
                  <div className="self-stretch text-left justify-start items-center gap-7 inline-flex">
                    <div className="w-[100%] grow shrink basis-0 px-px py-2 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="w-[100%] self-stretch justify-start items-start gap-2 inline-flex">
                        <div className="w-[80%]">
                          <span className="text-black text-lg font-['Inter'] leading-relaxed">
                            Lorem ipsum dolor sit amet
                            <br />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default BusinessProfile;
