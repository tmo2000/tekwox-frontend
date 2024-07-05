import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCog, faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Function to close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to handle click on navigation items in the modal
  const handleNavItemClick = () => {
    setShowMenu(false);
  };

  // Close menu function
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full border-b z-20 transition-all duration-300">
      <div className="py-4 px-6 md:px-12 lg:px-24 w-full flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="logo.png" className="w-24 h-auto" alt="Logo" />
        </div>

        {/* Jobs, Reports, Messaging */}
        <ul className="hidden md:flex items-center gap-4 text-base md:text-lg">
          <li className="relative">
            <a href="#" className="ml-4 hover:text-gray-800">
              Job
            </a>
            <FontAwesomeIcon className="ml-2" icon={faAngleDown} />
          </li>
          <li className="relative">
            <a href="#" className="ml-4 hover:text-gray-800">
              Report
            </a>
            <FontAwesomeIcon className="ml-2" icon={faAngleDown} />
          </li>
          <li className="relative">
            <a href="#" className="ml-4 hover:text-gray-800">
              Messaging
            </a>
            <FontAwesomeIcon className="ml-2" icon={faAngleDown} />
          </li>
        </ul>

        {/* Search Bar (always visible, right aligned) */}
        <div className="flex items-center ml-auto">
          <input
            type="text"
            className="border p-2 w-48 rounded-3xl"
            placeholder="Search..."
          />
        </div>

        {/* Notifications and Settings */}
        <div className="hidden md:flex items-center gap-2 ml-4">
          <div>
            <FontAwesomeIcon icon={faBell} size="1x" className="hover:text-gray-800" />
          </div>
          <div>
            <FontAwesomeIcon icon={faCog} size="1x" className="hover:text-gray-800" />
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden ml-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Hamburger Menu Modal */}
      {showMenu && (
        <div ref={menuRef} className="md:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 z-30 flex flex-col items-start justify-start p-8 transition-transform duration-300 ease-in-out">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <a href="#" className="ml-4 hover:text-gray-800" onClick={handleNavItemClick}>
                Job
              </a>
            </li>
            <li>
              <a href="#" className="ml-4 hover:text-gray-800" onClick={handleNavItemClick}>
                Report
              </a>
            </li>
            <li>
              <a href="#" className="ml-4 hover:text-gray-800" onClick={handleNavItemClick}>
                Messaging
              </a>
            </li>
            <li>
              <a href="#" className="ml-4 hover:text-gray-800" onClick={handleNavItemClick}>
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="ml-4 hover:text-gray-800" onClick={handleNavItemClick}>
                Notifications
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
