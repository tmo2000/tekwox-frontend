import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const businessbuildprofile = () => {
  const cookieNames = 'Tekwox'; // Name of the cookie
  const [email, setEmail] = useState('');
  const [businessname, setBusinessname] = useState('');
  const [website, setWebsite] = useState('');
  const [industry, setIndustry] = useState('');
  const [no_of_employee, setNo_of_employee] = useState('');
  const [error, setError] = useState('');
  const [bio, setBio] = useState('');
  const [country, setCountry] = useState('');
  const [nationality, setNationality] = useState('Nigerian');

  const history = useNavigate ();

  useEffect(() => {
    const getEmailFromCookie = () => {
      const decodedCookie = decodeURIComponent(document.cookie); // Decode the cookie string
      const cookieArray = decodedCookie.split(';'); // Split the cookie string into an array

      let cookieValue = '';
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieNames + '=') === 0) {
          cookieValue = cookie.substring(cookieNames.length + 1);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://tekwox.com/api/personaldetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          businessname: businessname,
          website: website,
          industry: industry,
          bio: bio,
          country: country,
          nationality: nationality,
          no_of_employee: no_of_employee
        })
      });

      if (response.ok) {
        // Store form data in the cookie
        const formData = {
          businessname: businessname,
          website: website,
          industry: industry,
          bio: bio,
          country: country,
          nationality: nationality,
          no_of_employee: no_of_employee
        };
        const cookieData = {
          data: {
            user: {
              email: email,
              businessDetails: formData
            }
          }
        };
        document.cookie = `${cookieNames}=${JSON.stringify(cookieData)};path=/`;

        // Handle successful submission
        history('/businessDashboard');
        console.log('Form submitted successfully');
      } else {
        // Handle submission failure
        console.error('Failed to submit form');
        setError('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while submitting the form.');
    }
  };
  const cookieName = 'Tekwox'; // Name of the cookie
  const decodedCookie = decodeURIComponent(document.cookie); // Decode the cookie string
  const cookieArray = decodedCookie.split(';'); // Split the cookie string into an array
  
  // Loop through each cookie to find the one we're interested in
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
    // Log the cookie value in JSON format
    console.log('Cookie data:', cookieValue);
  
    // Parse the JSON string stored in the cookie
    const parsedData = JSON.parse(cookieValue);
  
    // Access the user object within the data object
    const userData = parsedData.data.user;
  
    // Access the user's first name from the user object
    if (userData.firstname) {
      console.log('User first name:', userData.firstname);
    } else {
      console.log('User first name not found in cookie data.');
    }
  } else {
    console.log('Cookie not found or data not set.');
  }

  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(prevState => !prevState);
  };

  const [currencies, setCurrencies] = useState([]);
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
    const currency = selectedCountry.currencies ? Object.keys(selectedCountry.currencies)[0] : 'undefined';
    setCountry(`${countryName} - ${currency}`);
    setFilteredCountries([]);
    setShowTable(false);
  };

  const [industryOptions] = useState([
    'Information Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Manufacturing',
  'Retail',
  'Hospitality',
  'Construction',
  'Transportation',
  'Telecommunications',
  'Media and Entertainment',
  'Automotive',
  'Real Estate',
  'Energy',
  'Agriculture',
  'Fashion',
  'Pharmaceuticals',
  'Biotechnology',
  'Consulting',
  'Government',
  'Non-profit',
    // Add more industry options as needed
  ]);

  const handleIndustryChange = (selectedIndustry) => {
    setIndustry(selectedIndustry);
  };


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
          className="w-12 h-auto mr-12 mt-6 cursor-pointer"
          onClick={toggleCard}
        />
      </div>
      {showCard && (
        <div className="absolute right-0 top-[2.5rem] w-[15%] mt-16 mr-12 bg-white shadow-md rounded-md">
          <ul className="list-none text-left">
          <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex items-center border-b border-gray-300">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Biz Profile
            </li>
            <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex items-center border-b border-gray-300">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </li>
          </ul>
        </div>
      )}
      </div>

      <div className="mt-16">
        <form className="w-[60%]" onClick={handleSubmit}>
          <div className="ml-3 mt-16 ">
          {cookieValue ? (
          (() => {
            // Parse the JSON string stored in the cookie
            const parsedData = JSON.parse(cookieValue);
            // Access the user object within the data object
            const userData = parsedData.data.user;
            return (
              <h2 className="text-left text-[#444] text-2xl mb-12 ">
                <span className="text-[#444]">Welcome, {userData.firstname}</span> Take your Time to fill in your details 
              </h2>
            );
          })()
        ) : (
          <h2 className="text-[#5D6AA8] text-2xl mb-12 ">Welcome, Take your Time to fill in your details </h2>
        )}
            <h1 className="text-left ml-16 text-4xl ">Business Information </h1>
            <div className="mb-4 ml-16 mt-9">
              <div className="mb-2">
                <label
                  htmlFor="businessName"
                  className="mb-2 block text-left text-sm font-medium text-gray-700"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={businessname}
                  onChange={(e) => setBusinessname(e.target.value)}
                  className="mt-1 mb-8 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="businessInfo"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Business Info
                </label>
                <input
                  type="text"
                  id="bio"
                  name="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full h-20"
                />
              </div>
              <input
                  type="hidden"
                  id="nationality"
                  name="nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full h-20"
                />
              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
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
          className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full"
          placeholder="Search for a country..."
          autoComplete="off"
        />
        {showTable && (
          <div className="absolute text-left z-10 w-[40%] max-h-40 overflow-y-auto  bg-white border border-gray-300 rounded-md mt-1">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Country
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Currency
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCountries.map((country) => (
                  <tr key={country.cca2} onClick={() => handleSelectCountry(country)}>
                    <td className="px-6 py-4 whitespace-nowrap">{country.name.common}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {country.currencies ? Object.keys(country.currencies)[0] : 'undefined'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div>
  <label htmlFor="industry" className="mb-2 block text-left text-sm font-medium text-gray-700">
    Industry
  </label>
  <select
    id="industry"
    name="industry"
    value={industry}
    onChange={(e) => handleIndustryChange(e.target.value)}
    className="mt-1 p-2 mb-8 border border-gray-300 rounded-md w-full"
    style={{ height: 'auto' }} // Set the height of the select element to auto
  >
    <option value="">Select an industry</option>
    {industryOptions.map((option) => (
      <option key={option} value={option} className="h-16"> {/* Apply a fixed height to each option */}
        {option}
      </option>
    ))}
  </select>
</div>

              <div className="w-[100%] mb-4">
                <label
                  htmlFor="numOfEmployee"
                  className="mb-2 block  text-left text-sm font-medium text-gray-700"
                >
                  Number of Employee
                </label>
                <select
                  type="file"
                  id="no_of_employee"
                  name="no_of_employee"
                  value={no_of_employee}
                  onChange={(e) => setNo_of_employee(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md mr-[25rem] w-[50%]"
                >
                  <option value="" disabled selected>
                    Select number of employees
                  </option>
                  <option value="1">1</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>
          <div className="pt-9 flex justify-between ml-16 mb-16">
            <div className="flex gap-5">
                <button
                  type="submit"
                  className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full "
                >
                  Submit
                </button>
              

             
            </div>
            <Link to="/businessdashboard">
              <span className="text-[#5D6AA8]">save for later</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default businessbuildprofile;
