import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  // Sample data for dropdown options
  const roles = ['Role', 'Role 1', 'Role 2', 'Role 3'];
  const locations = ['Location', 'Location 1', 'Location 2', 'Location 3'];
  const types = ['Type', 'Type 1', 'Type 2', 'Type 3'];

  // State for modal visibility and selected filters
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Toggle modal function
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex items-center mt-3 border border-gray-300 rounded-md lg:w-[51.16rem] w-[16.5rem] bg-neutral-100">
      {/* Role Dropdown */}
      <select className="mr-2 px-3 pr-[10rem] py-2 bg-transparent border-none focus:outline-none">
        {roles.map((role, index) => (
          <option key={index} value={role}>{role}</option>
        ))}
      </select>
      {/* Location Dropdown (visible for larger screens) */}
      <select className="hidden md:block mr-2 px-3 pr-[10rem] py-2 bg-transparent border-none focus:outline-none">
        {locations.map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>
      {/* Type Dropdown (visible for larger screens) */}
      <select className="hidden md:block mr-2 px-3 pr-[10rem] py-2 bg-transparent border-none focus:outline-none">
        {types.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
      {/* Search Button */}
      <button className="px-4 py-2 bg-[#5D6AA8] text-white lg:rounded rounded-l-md">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      {/* Filter Icon for Smaller Screens */}
      <button
        className="md:hidden px-4 py-2 bg-[#5D6AA8] text-white rounded-r-md"
        onClick={toggleModal}
      >
        <FontAwesomeIcon icon={faFilter} />
      </button>
      {/* Modal for Filter (visible on smaller screens) */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            {/* Location Dropdown in Modal */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="mb-2 px-3 py-2 w-full bg-transparent border border-gray-300 rounded-md focus:outline-none"
            >
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
            {/* Type Dropdown in Modal */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="mb-2 px-3 py-2 w-full bg-transparent border border-gray-300 rounded-md focus:outline-none"
            >
              {types.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
            {/* Close Modal Button */}
            <button
              className="px-4 py-2 bg-[#5D6AA8] text-white rounded-md mt-2"
              onClick={toggleModal}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
