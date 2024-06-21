import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const jobDetails = () => {
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
      <h3 className="text-left font-bold ml-10 mb-2">
        Consumer Focus Marketing
      </h3>
      <div className=" rounded-2xl h-auto w-[70%]  px-10 mt-[2rem] mr-[30rem] text-left  ">
        <h2 className="text-2xl font-bold">Web Development Intern</h2>
        <div className="mt-[1rem] text-xl">
          <h3 className="text-2xl font-semibold">United states</h3>
          <p>
            Consumer Focus™ Marketing is searching for a Web Developer Intern to
            assist in developing, editing, and troubleshooting websites.
            Consumer Focus Marketing is a unique product-service marketing
            agency that specializes in providing services to the energy
            industry. The Web Developer Intern will work closely with Consumer
            Focus Marketing's Web Developer and marketing team on a variety of
            website projects.
          </p>
        </div>
        <div className="mt-[2rem] text-xl">
          <h4 className="font-semibold">Requirements:</h4>
          <p>
            Proficiency with HTML5/CSS3 Prior experience with WordPress
            Comfortable working in a Mac OS environment Excellent organization
            skills, including file management Must be able to work with the web
            team and graphic designers to complete projects Responsible for
            accurate, timely, and efficient job production within the team
            Promote good customer relations through a positive, service-oriented
            attitude and effective communication Must be detail oriented and
            able to independently problem solve and troubleshoot issues Able to
            work and thrive in a fast-paced environment Must be able to juggle
            multiple tasks with short deadlines Additional Skills (Not
            Required): Knowledge of JavaScript, jQuery, PHP and MySQL databases
            a plus Custom WordPress theming or plugin development Experience
            working with current web standards (accessibility, adherence to
            coding standards, web security, etc.) Comfortable working on
            responsive and mobile websites (experience using Bootstrap framework
            a plus) Design and conceptual skills Knowledge of Adobe Software
            Creative Suite (Specifically Photoshop and Illustrator) Knowledge of
            SEO, hosting, email, and DNS management
          </p>
        </div>
        <div className="mt-[2rem] text-xl">
          <h3 className="font-semibold">Specific Tasks:</h3>
          <p>
            Update WordPress and plugins Provide technical support to clients
            and internal team members Assist in troubleshooting web issues
            Update and edit website content, posts and pages
          </p>
        </div>
        <div className="mt-3 text-xl">
          <p>
            <span className="font-semibold">Job Types:</span> Part-time,
            Internship
          </p>
        </div>
        <div className="mt-3 text-xl">
          <p>
            <span className="font-semibold">Pay:</span> $15.00 per hour
          </p>
        </div>
        <div className="mt-3 text-xl">
          <p>
            <span className="font-semibold">Expected hours:</span> 10 – 20 per
            week
          </p>
        </div>
        <div className="mt-3 text-xl">
          <p>
            <span className="font-semibold">Benefits:</span> Flexible schedule
          </p>
        </div>
        <div className="mt-3 text-xl">
          <span className="font-semibold">Experience level:</span>
          <p>1 year</p>
          <p>Under 1 year</p>
        </div>
        <div className="mt-3 text-xl">
          <span className="font-semibold">Schedule:</span>
          <p>4 hour shift</p>
          <p>Choose your own hours</p>
          <p>Day shift</p>
          <p>Monday to Friday</p>
        </div>
        <div className="mt-3 text-xl">
          <span className="font-semibold">Experience:</span>
          <p>web development: 1 year (Required)</p>
        </div>
        <div className="mt-3 text-xl">
          <p>
            <span className="font-semibold">Work Location:</span> Remote
          </p>
        </div>
      </div>
    </div>
  );
};

export default jobDetails;
