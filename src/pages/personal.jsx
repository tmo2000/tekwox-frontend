import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';




const Personal = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('authToken');

      // Send a request to the logout endpoint
      await axios.post(
        'https://tekwox.com/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // Clear the token and user data from localStorage
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');

      // Redirect to the login page
      navigate('/jobseekerlogin');
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error appropriately
    }
  };


  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }

  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [nationality, setNationality] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const [companyname, setCompanyname] = useState('');
  const [jobtitle, setJobtitle] = useState('');
  const [jobdescription, setJobdescription] = useState('');
  const [activework, setActivework] = useState(false);
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');

  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [fos, setFos] = useState('');

  const [certtitle, setCerttitle] = useState('');
  const [institution, setInstitution] = useState('');

  const [skill, setSkill] = useState('');
  const [level, setLevel] = useState('');

  const history = useNavigate();

  useEffect(() => {
    const cookieName = 'Tekwox'; // Name of the cookie

    const getEmailFromCookie = () => {
      const decodedCookie = decodeURIComponent(document.cookie); // Decode the cookie string
      const cookieArray = decodedCookie.split(';'); // Split the cookie string into an array

      let cookieValue = '';
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName + '=') === 0) {
          cookieValue = cookie.substring(cookieName.length + 1);
          break;
        }
      }

      if (cookieValue) {
        const parsedData = JSON.parse(cookieValue);
        setEmail(parsedData.data.user.email);
      }
    };

    getEmailFromCookie();
  }, []);

  const handleSubmit = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(`${url} submitted successfully`);
        if (url.includes('skill')) {
          history('/jobseekerDashboard');
        }
      } else {
        console.error(`Failed to submit ${url}`);
        setError(`Failed to submit ${url}. Please try again.`);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(`An error occurred while submitting ${url}.`);
    }
  };

  const handlePersonalDetailsSubmit = (e) => {
    e.preventDefault();
    handleSubmit('https://tekwox.com/api/personaldetails', {
      email,
      bio,
      nationality,
      country,
    });
  };

  const handleWorkExperienceSubmit = (e) => {
    e.preventDefault();
    handleSubmit('https://tekwox.com/api/workexperience', {
      email,
      companyname,
      jobtitle,
      jobdescription,
      activework,
      startdate,
      enddate,
    });
  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    handleSubmit('https://tekwox.com/api/education', {
      email,
      school,
      degree,
      fos,
      startdate,
      enddate,
    });
  };

  const handleCertificateSubmit = (e) => {
    e.preventDefault();
    handleSubmit('https://tekwox.com/api/certificate', {
      email,
      certtitle,
      institution,
    });
  };

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    handleSubmit('https://tekwox.com/api/skill', {
      email,
      skill,
      level,
    });
  };

  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard((prevState) => !prevState);
  };

  // API CALL FOR COUNTRY

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setFilteredCountries([]);
      return;
    }
    const filtered = countriesData.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleSelectCountry = (selectedCountry) => {
    const countryName = selectedCountry.name.common;
    setCountry(countryName);
    setFilteredCountries([]);
    setShowTable(false);
  };

  return (
    <div>
       <div className="flex items-center justify-between p-4">
      {/* Left-aligned image */}
      <div>
        <img
          src="logo.png" // Replace with the actual path to your logo image
          alt="Logo"
          className="w-32 h-auto ml-4 sm:ml-8 md:ml-12 mt-4 sm:mt-6"
        />
      </div>

      {/* Right-aligned image */}
      <div className="ml-auto relative">
        <img
          src="profile.png" // Replace with the actual path to your second image
          alt="Profile"
          className="w-12 h-auto mr-4 sm:mr-8 md:mr-12 mt-4 sm:mt-6 cursor-pointer"
          onClick={toggleCard}
        />
        {showCard && (
          <div className="absolute right-0 mt-2 w-48 sm:w-60 md:w-72 bg-white shadow-md rounded-md">
            <ul className="list-none text-left">
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex items-center border-b border-gray-300" >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                My Profile
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex items-center border-b border-gray-300"  onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
      <div className="lg:ml-36 ml-4">
        <ul className="flex flex-col sm:flex-row border-b border-gray-300 mb-4 w-full sm:w-[80%]">
  <li
    className={`mb-2 sm:mb-0 sm:mr-8 md:mr-16 cursor-pointer ${toggle === 1 && "active-tab"}`}
    onClick={() => updateToggle(1)}
  >
    Personal
  </li>
  <li
    className={`mb-2 sm:mb-0 sm:mr-8 md:mr-16 cursor-pointer ${toggle === 2 && "active-tab"}`}
    onClick={() => updateToggle(2)}
  >
    Work Experience
  </li>
  <li
    className={`mb-2 sm:mb-0 sm:mr-8 md:mr-16 cursor-pointer ${toggle === 3 && "active-tab"}`}
    onClick={() => updateToggle(3)}
  >
    Education
  </li>
  <li
    className={`mb-2 sm:mb-0 sm:mr-8 md:mr-16 cursor-pointer ${toggle === 4 && "active-tab"}`}
    onClick={() => updateToggle(4)}
  >
    Certificates and Awards
  </li>
  <li
    className={`mb-2 sm:mb-0 sm:mr-8 md:mr-16 cursor-pointer ${toggle === 5 && "active-tab"}`}
    onClick={() => updateToggle(5)}
  >
    Skills
  </li>
</ul>


        <div className="w-[60%]">
          <div className={toggle === 1 ? "show-content" : "content"}>
  <form onSubmit={handlePersonalDetailsSubmit}>
    <div className="ml-3 mt-16 sm:ml-6 md:ml-12">
      <h1 className="text-left ml-0 sm:ml-4 md:ml-16 text-2xl sm:text-3xl md:text-4xl">Personal</h1>
      <div className="mb-4 ml-0 sm:ml-4 md:ml-16 mt-9">
        <div className="mb-4">
          <label
            htmlFor="bio"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full h-20"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nationality"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="country" className="mb-2 block text-left text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              handleSearch(e.target.value);
            }}
            onFocus={() => setShowTable(true)}
            className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
            placeholder="Search for a country..."
          />
          {showTable && (
            <div className="absolute z-10 w-full sm:w-[70%] md:w-[30%] max-h-40 overflow-y-auto bg-white border border-gray-300 rounded-md mt-1">
              <table className="min-w-full divide-y text-left divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Country
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCountries.map((country) => (
                    <tr key={country.cca2} onClick={() => handleSelectCountry(country)}>
                      <td className="px-6 py-4 whitespace-nowrap">{country.name.common}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="bg-gray-200 rounded-[2rem] p-2 items-center w-full max-w-[30rem]">
          <label htmlFor="resume" className="flex items-center cursor-pointer">
            <FontAwesomeIcon
              icon={faPaperclip}
              className="text-gray-500 mr-2"
            />
            <span className="text-sm font-medium text-gray-700">
              Attach Your Resume
            </span>
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf, .doc, .docx"
            className="hidden"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-between ml-0 sm:ml-6 md:ml-16 mb-16">
      <div className="flex gap-5 mb-4 sm:mb-0">
        <button
          type="submit"
          onClick={() => updateToggle(2)}
          className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full"
        >
          Next
        </button>
      </div>
      <Link to="/jobseekerdashboard">
        <span className="text-[#5D6AA8]">save for later</span>
      </Link>
    </div>
  </form>
</div>

         <div className={toggle === 2 ? "show-content" : "content"}>
  <form onClick={handleWorkExperienceSubmit}>
    <div className="ml-3 mt-16 sm:ml-6 md:ml-12">
      <h1 className="text-left ml-0 sm:ml-4 md:ml-16 text-2xl sm:text-3xl md:text-4xl">Work Experience</h1>
      <div className="mb-4 ml-0 sm:ml-4 md:ml-16 mt-9">
        <div className="mb-4">
          <label
            htmlFor="company_name"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyname"
            name="companyname"
            value={companyname}
            onChange={(e) => setCompanyname(e.target.value)}
            className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="Job_title"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Job Title
          </label>
          <input
            type="text"
            id="jobtitle"
            name="jobtitle"
            value={jobtitle}
            onChange={(e) => setJobtitle(e.target.value)}
            className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
            placeholder="What do you do?"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="job_description"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Job Description
          </label>
          <input
            type="text"
            id="jobdescription"
            name="jobdescription"
            value={jobdescription}
            onChange={(e) => setJobdescription(e.target.value)}
            className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full h-20"
            placeholder="Give a brief summary of your job"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="activework" className="block text-left text-sm font-medium text-gray-700">
            Is this your current workspace?
          </label>
          <select
            id="activework"
            name="activework"
            value={activework}
            onChange={(e) => {
              setActivework(e.target.value);
              if (e.target.value === "1") {
                setEnddate(0);
              }
            }}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select an option</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
          <div className="mr-0 sm:mr-4 w-full sm:w-auto">
            <label htmlFor="startdate" className="block text-left text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              id="startdate"
              name="startdate"
              value={startdate}
              onChange={(e) => setStartdate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full sm:w-auto"
            />
          </div>
          {activework === "0" && (
            <div className="mt-4 sm:mt-0 w-full sm:w-auto">
              <label htmlFor="enddate" className="block text-left text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="enddate"
                name="enddate"
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full sm:w-auto"
              />
            </div>
          )}
        </div>

        <div className="flex items-center mb-10">
          <p className="ml-2">Add More</p>
          <FontAwesomeIcon icon={faPlus} className="ml-2" />
          <FontAwesomeIcon icon={faTrash} className="ml-auto sm:ml-[27rem]" />
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-between ml-0 sm:ml-6 md:ml-16 mb-16">
      <div className="flex gap-5 mb-4 sm:mb-0">
        <button
          type="button"
          onClick={() => updateToggle(1)}
          className="border hover:bg-blue-700 font-bold py-1 px-8 rounded-full"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={() => updateToggle(3)}
          className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full"
        >
          Next
        </button>
      </div>
      <Link to="/jobseekerdashboard">
        <span className="text-[#5D6AA8]">save for later</span>
      </Link>
    </div>
  </form>
</div>

          <div className={toggle === 3 ? "show-content" : "content"}>
  <form onClick={handleEducationSubmit}>
    <div className="ml-3 mt-16 sm:ml-6 md:ml-12">
      <h1 className="text-left ml-0 sm:ml-4 md:ml-16 text-2xl sm:text-3xl md:text-4xl">Education</h1>
      <div className="mb-4 ml-0 sm:ml-4 md:ml-16 mt-9">
        <div className="mb-4">
          <label
            htmlFor="school"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            School
          </label>
          <input
            type="text"
            id="school"
            name="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full"
            placeholder="What School did you attend?"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="degree"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Degree
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="fos"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Field of study
          </label>
          <input
            type="text"
            id="fos"
            name="fos"
            value={fos}
            onChange={(e) => setFos(e.target.value)}
            className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
          <div className="mr-0 sm:mr-4 w-full sm:w-auto">
            <label
              htmlFor="startDate"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startdate"
              name="startdate"
              value={startdate}
              onChange={(e) => setStartdate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full sm:w-auto"
            />
          </div>

          <div className="mt-4 sm:mt-0 w-full sm:w-auto">
            <label
              htmlFor="endDate"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Graduation date
            </label>
            <input
              type="date"
              id="enddate"
              name="enddate"
              value={enddate}
              onChange={(e) => setEnddate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full sm:w-auto"
            />
          </div>
        </div>

        <div className="flex items-center mb-10">
          <p className="ml-2">Add More</p>
          <FontAwesomeIcon icon={faPlus} className="ml-2" />
          <FontAwesomeIcon icon={faTrash} className="ml-auto sm:ml-[27rem]" />
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-between ml-0 sm:ml-6 md:ml-16 mb-16">
      <div className="flex gap-5 mb-4 sm:mb-0">
        <button
          type="button"
          onClick={() => updateToggle(2)}
          className="border hover:bg-blue-700 font-bold py-1 px-8 rounded-full"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={() => updateToggle(4)}
          className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full"
        >
          Next
        </button>
      </div>
      <Link to="/jobseekerdashboard">
        <span className="text-[#5D6AA8]">save for later</span>
      </Link>
    </div>
  </form>
</div>

          <div className={toggle === 4 ? "show-content" : "content"}>
  <form onClick={handleCertificateSubmit}>
    <div className="ml-3 mt-16 sm:ml-6 md:ml-12">
      <h1 className="text-left ml-0 sm:ml-4 md:ml-16 text-2xl sm:text-3xl md:text-4xl">Certificates/Awards</h1>
      <div className="mb-4 ml-0 sm:ml-4 md:ml-16 mt-9">
        <div className="mb-4">
          <label
            htmlFor="certtitle"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Name of Certification/Awards
          </label>
          <input
            type="text"
            id="certtitle"
            name="certtitle"
            value={certtitle}
            onChange={(e) => setCerttitle(e.target.value)}
            className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="institution"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Institution
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="bg-gray-200 rounded-2xl p-4 items-center w-[27rem] max-w-full sm:max-w-[20rem] mb-4">
          <label htmlFor="resume" className="flex items-center">
            <FontAwesomeIcon
              icon={faPaperclip}
              className="text-gray-500 mr-2"
            />
            <span className="text-sm font-medium text-gray-700">
              Attach Your Certificates/Awards
            </span>
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf, .doc, .docx"
            className="hidden"
          />
        </div>
      </div>
      <div className="flex items-center mb-12">
        <p className="flex-grow">Add More <FontAwesomeIcon icon={faPlus} className="ml-2" /></p>
        <FontAwesomeIcon icon={faTrash} className="ml-3" />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-between ml-0 sm:ml-6 md:ml-16 mb-16">
      <div className="flex gap-5 mb-4 sm:mb-0">
        <button
          type="button"
          onClick={() => updateToggle(3)}
          className="border hover:bg-blue-700 font-bold py-1 px-8 rounded-full"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={() => updateToggle(5)}
          className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full"
        >
          Next
        </button>
      </div>
      <Link to="/jobseekerdashboard">
        <span className="text-[#5D6AA8]">save for later</span>
      </Link>
    </div>
  </form>
</div>
<div className={toggle === 5 ? "show-content" : "content"}>
  <form onClick={handleSkillSubmit}>
    <div className="ml-3 mt-16 sm:ml-6 md:ml-12">
      <h1 className="text-left ml-0 sm:ml-4 md:ml-16 text-2xl sm:text-3xl md:text-4xl">Skill</h1>
      <div className="mb-4 ml-0 sm:ml-4 md:ml-16 mt-9">
        <div className="mb-4">
          <label
            htmlFor="skill"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Skill
          </label>
          <input
            type="text"
            id="skill"
            name="skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="mt-1 p-2 mb-4 border border-gray-300 rounded-md w-full"
          />
          <div className="mt-2 sm:ml-0 md:ml-[25rem]">
            <p className="flex items-center">
              Add skills here
              <FontAwesomeIcon className="pl-3" icon={faPlus} />
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="level"
            className="mb-2 block text-left text-sm font-medium text-gray-700"
          >
            Skill Level
          </label>
          <select
            type="text"
            id="level"
            name="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="mt-1 p-2 mb-4 border border-gray-300 text-gray-500 rounded-md w-full"
            placeholder="What level are you at for this skill?"
          >
            <option value="" disabled selected>
              What level are you at for this skill?
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="experienced">Experienced</option>
            <option value="master">Master</option>
          </select>
          <div className="mt-2 sm:ml-0 md:ml-[32rem] pb-4">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-between ml-0 sm:ml-6 md:ml-16 mb-16">
      <div className="flex gap-5 mb-4 sm:mb-0">
        <button
          type="button"
          onClick={() => updateToggle(4)}
          className="border hover:bg-blue-700 font-bold py-1 px-8 rounded-full"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={() => updateToggle()}
          className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full"
        >
          Submit
        </button>
      </div>
      <Link to="/jobseekerdashboard">
        <span className="text-[#5D6AA8]">save for later</span>
      </Link>
    </div>
  </form>
</div>

        </div>
          
        
      </div>
    </div>
  );
};

export default Personal;
