import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const seeMore = () => {
    return (
       <div>
      <div className="flex">
        {/* Left-aligned image */}
        <div>
          <img
            src="logo.png" // Replace with your actual logo path
            alt="Logo"
            className="w-32 h-auto ml-12 mt-6"
          />
        </div>

        {/* Right-aligned image */}
        <div className="ml-auto">
          <img
            src="profile.png" // Replace with your actual profile image path
            alt="Another Image"
            className="w-12 h-auto mr-12 mt-6"
          />
        </div>
      </div>

      <h3 className="text-left font-bold ml-10 mb-2">Edgewater solutions</h3>
      <div className="flex font-semibold mt-2 ml-10 gap-7">
        <div>Remote</div>
        <div>1 year work Experience</div>
        <div>Salary</div>
      </div>

      <div className="relative">
        <Link to="/jobseekerdashboard" className="absolute top-1 left-1">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-left mt-5 ml-10 mb-4">Web Developer Intern</h2>

      <div className="border border-1 rounded-2xl overflow-x-auto overflow-y-auto max-h-[70vh] w-[90%] px-10 mt-[2rem] ml-10 text-left">
        {/* Job description */}
        <p className="font-semibold">
          As a web development intern, you'll have the opportunity to gain practical experience in designing,
          developing, and maintaining websites and web applications. While specific responsibilities may vary
          depending on the organization and the stage of the internship, here are some common details you might
          expect:
          <br />
          1. **Assisting in Web Development Projects**: Work closely with experienced developers and designers
          to contribute to various web development projects. This could involve tasks such as coding, testing,
          debugging, and troubleshooting.
          <br />
          2. **Frontend Development**: Learn and apply HTML, CSS, and JavaScript to create visually appealing
          and user-friendly interfaces. Gain hands-on experience with frontend frameworks and libraries such as
          React, Angular, or Vue.js.br
          <br />
          3. **Backend Development**: Gain exposure to server-side scripting languages like PHP, Python, or
          Node.js. Assist in developing server-side logic, database integration, and API endpoints to support
          web applications.
          <br />
          4. **Content Management Systems (CMS)**: Learn to work with popular CMS platforms like WordPress,
          Drupal, or Joomla. Assist in customizing themes, creating plugins/modules, and managing website
          content.
          <br />
          5. **Version Control**: Gain proficiency in version control systems such as Git. Learn to collaborate
          with team members effectively by managing code repositories, branching, merging, and resolving
          conflicts.
          <br />
          6. **Responsive Web Design**: Understand the principles of responsive web design and ensure that
          websites and applications are optimized for various devices and screen sizes.
          <br />
          7. **Testing and Debugging**: Assist in testing websites and web applications across different
          browsers, devices, and operating systems. Learn to identify and fix bugs and performance issues.
          <br />
          8. **User Experience (UX) Design**: Gain insights into UX/UI design principles and best practices.
          Collaborate with designers to create intuitive navigation, user flows, and interactive elements.
          <br />
          9. **Documentation**: Document your work, including code comments, technical documentation, and
          project notes. Maintain organized files and folders to facilitate knowledge sharing and future
          development.
          <br />
          10. **Learning and Growth**: Take advantage of learning opportunities provided during the
          internship, such as workshops, training sessions, and mentorship programs. Stay updated on industry
          trends, technologies, and best practices in web development.
          <br />
          11. **Collaboration and Communication**: Participate actively in team meetings, discussions, and
          brainstorming sessions. Communicate effectively with team members to clarify requirements, share
          progress updates, and seek assistance when needed.
          <br />
          12. **Project Management**: Assist in managing project timelines, priorities, and deliverables. Learn
          to prioritize tasks, manage workload efficiently, and meet deadlines effectively.
          <br />
          13. **Professionalism and Work Ethic**: Demonstrate professionalism, punctuality, and a strong work
          ethic throughout the internship. Take initiative, ask questions, and seek feedback to maximize your
          learning and contribution to the team.
          <br />
          <p className="mb-3">
            Overall, as a web development intern, you'll have the opportunity to gain valuable hands-on
            experience, expand your technical skills, and lay the foundation for a successful career in web
            development. Embrace the learning opportunities and challenges that come your way, and make the
            most of your internship experience.
          </p>
          <br />
        </p>
      </div>

      <div className="w-[40rem] justify-between items-left mt-4 mr-[34rem] inline-flex">
        <div className="flex mt-3 ml-10 gap-6">
          {/* Apply Button */}
          <Link to="/screenquestions">
            <button
              type="button"
              className="bg-[#5D6AA8] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-full"
            >
              Apply
            </button>
          </Link>

            {/* Save Job Button */}
            <Link to="/jobseekerdashboard">
              <button
            type="button"
            className="bg-[#F2AB39] hover:bg-blue-700 text-black font-bold py-1 px-8 rounded-full"
          >
            Save Job
          </button>
            </Link>
          
        </div>
      </div>
    </div>
    )
}

export default seeMore
