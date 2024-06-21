import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import BusinessInfoForm from "../component/Businessprofile/BusinessInfoForm";
import IndustryForm from "../component/Businessprofile/IndustryForm";
import WebsiteForm from "../component/Businessprofile/WebsiteForm";
import ContactForm from "../component/Businessprofile/ContactForm";
import AddressForm from "../component/Businessprofile/AddressForm";

const businessProfile = () => {
  const cookieNames = "Tekwox";
  const [businessDetails, setBusinessDetails] = useState({
    businessName: "",
    industry: "",
    website: "",
    bio: "",
  });

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
      {" "}
      <div>
        <div className="relative z-10">
          <nav className="bg-white fixed top-0 left-0 w-full border-b">
            <div className="py-4 px-6 w-full flex items-center justify-between">
              <div className='flex items-center gap-8 className="ml-4"'>
                <img src="logo.png" className="w-24 h-auto" />
                <ul className="flex items-center gap-4">
                  <li>
                    <a href="#" className="ml-4">
                      Posted Jobs{" "}
                    </a>
                    <a href="#" className="ml-4">
                      Posted Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div></div>
              <div className="flex items-center gap-2">
                <div className="mr-4">
                  <FontAwesomeIcon icon={faBell} size="1x" />
                </div>

                {/* Settings Icon */}
                <div>
                  <FontAwesomeIcon icon={faCog} size="1x" />
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div className="w-[100%] h-96 top-12 relative">
            <Link to="/businessdashboard" className="absolute top-6 left-0">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            </Link>
            <div className="w-[40%] h-64 left-0 mt-4 absolute flex-col justify-center items-center gap-4 inline-flex">
  <div className="w-40 h-40 left-[-10rem] relative">
    <img src="profile.png" alt="" className="w-full h-full rounded-full" />
  </div>
  <div className="text-justify text-black w-full text-2xl flex font-medium font-inter relative">
    {/* {businessDetails.businessName} */} <h3>Ascentree Service </h3>
    <span className="inline-block border text-slate-500 text-[1rem] border-dotted border-blue-500 rounded-2xl px-2 py-1">
      {businessDetails.verificationStatus ? "Verified" : "Unverified"}
      {businessDetails.verificationStatus ? (
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 ml-1" />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 ml-1" />
      )}
    </span>
  </div>
</div>


            <div className="w-[100%] left-0 top-[262.80px] absolute justify-start items-start gap-32 inline-flex">
              <div className="w-[46%] flex-col justify-start items-start gap-6 inline-flex">
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
              <div className="w-[54%] flex-col justify-start items-start gap-6 inline-flex">
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
    </div>
  );
};

export default businessProfile;
