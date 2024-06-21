import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ScreenDraft from "../component/ScreenDraft";

const postedJob = () => {
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
      <div className="flex relative">
        <Link to="/listedprojects" className="absolute top-1 ">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </Link>
      </div>
      <div className="flex">
        <div>
          <div className="border border-1 rounded-2xl overflow-x-auto overflow-y-auto max-h-[70vh] w-[90%] px-10 ml-[1rem] mt-10 text-left flex-grow relative">
            <div className="header flex bg-white w-[100%] h-[2%] sticky mt-3 pb-12 font-semibold gap-7">
                 <div className="flex items-center">
  <img src="Locationicon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Lagos, Nigeria</p>
</div>
<div className="flex items-center">
  <img src="Statusicon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Open to only Local Businesses</p>
</div>
<div className="flex items-center">
  <img src="Bidlimiticon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Bid Limit</p>
</div>
<div className="flex items-center">
  <img src="Liveprojecticon.png" alt="" className="ml-2 w-4 h-4" />
  <p className="ml-2">Live Project</p>
</div>
            </div>

            <h2 className="text-2xl mt-3 font-bold">Project Manager</h2>
            <div className="mt-[2rem] text-xl font-semibold">
              <h3 className="text-2xl">JOB DETAILS</h3>
              <p>
                A project manager plays a critical role in overseeing the
                planning, execution, and completion of projects within an
                organization. The job description for a project manager
                typically includes the following responsibilities:.
              </p>
            </div>
            <div className="mt-[2rem] text-xl">
              <p>
                1. **Project Planning**: Develop project plans, including scope,
                goals, deliverables, timelines, and resource allocation.
                Collaborate with stakeholders to define project requirements and
                objectives.
              </p>
              <br />
              <p>
                2. **Project Execution**: Lead project teams in executing tasks
                according to the project plan. Monitor progress, manage risks,
                and resolve issues to ensure project objectives are met on time
                and within budget.
              </p>
              <br />
              <p>
                3. **Resource Management**: Allocate resources effectively,
                including personnel, equipment, and materials, to support
                project activities. Coordinate with department managers to
                secure necessary resources.
              </p>
              <br />
              <p>
                4. **Team Leadership**: Provide leadership and guidance to
                project team members. Foster a collaborative and productive team
                environment. Delegate tasks and responsibilities appropriately.
              </p>
              <br />
              <p>
                5. **Stakeholder Communication**: Maintain open communication
                with project stakeholders, including clients, sponsors, and team
                members. Provide regular updates on project status, milestones,
                and issues.
              </p>
              <br />
              <p>
                6. **Risk Management**: Identify potential risks and develop
                strategies to mitigate them. Proactively address issues that may
                impact project timelines or outcomes.
              </p>
              <br />
              <p>
                7. **Quality Assurance**: Ensure that project deliverables meet
                quality standards and adhere to project requirements. Conduct
                quality reviews and implement corrective actions as needed.
              </p>
              <br />
              <p>
                8. **Budget Management**: Monitor project expenses and ensure
                adherence to budget constraints. Identify cost-saving
                opportunities and manage project finances effectively.
              </p>
              <br />
              <p>
                9. **Documentation**: Maintain accurate project documentation,
                including project plans, progress reports, meeting minutes, and
                change orders. Ensure documentation is organized and accessible
                to project stakeholders.
              </p>
              <br />
              <p>
                10. **Continuous Improvement**: Evaluate project performance and
                identify opportunities for process improvement. Implement best
                practices and lessons learned to enhance future project
                outcomes.
              </p>
              <br />
              <p>
                11. **Conflict Resolution**: Address conflicts and challenges
                within the project team or with stakeholders in a timely and
                diplomatic manner. Foster a positive and collaborative working
                environment.
              </p>
              <br />
              <p>
                12. **Adaptability**: Be flexible and adaptable to changing
                project requirements, priorities, and constraints. Anticipate
                and respond effectively to unexpected challenges or changes in
                project scope.
              </p>
              <br />
              <p>
                13. **Technical Expertise**: Depending on the nature of the
                projects, project managers may need specialized technical
                knowledge or certifications relevant to their industry or field.
              </p>
              <br />
              <p>
                14. **Customer Satisfaction**: Ensure customer satisfaction by
                delivering projects that meet or exceed expectations. Solicit
                feedback from clients and stakeholders to identify areas for
                improvement.
              </p>
              <br />
              <p>
                Overall, a project manager plays a multifaceted role in
                planning, executing, and delivering projects successfully while
                effectively managing resources, stakeholders, risks, and
                budgets. Strong leadership, communication, and organizational
                skills are essential for success in this role.covery.
              </p>
              <br />
            </div>
          </div>
          <div className="border border-1 absolute overflow-x-auto overflow-y-auto max-h-[30vh] rounded-2xl w-[64%] px-10 ml-[1rem] mt-[2rem] text-left">
            <div className="mt-6">
              <ScreenDraft
                question="Have you completed the following level of Education: Bachelor’s?"
                answer="Yes"
              />
            </div>
            <div className="mt-6">
              <ScreenDraft
                question="Are you willing to undergo a background check, in accordance with local law/regulations?
                "
                answer="Yes"
              />
            </div>
            <div className="mt-6">
              <ScreenDraft
                question="Will you now or in the future require sponsorship for employment visa status?"
                answer="Yes"
              />
            </div>
          </div>
        </div>

        <div className="border border-1 h-[80%] rounded-2xl w-[40%] px-6 mt-[2.5rem] mr-[3rem] text-left flex-shrink ">
          <div className="flex pb-10">
            <div>
              <h1 className="mt-10 ml-[1.0rem] font-bold text-2xl">12</h1>
              <p className="mt-4 ml-[0.2rem]">applicants</p>
            </div>
            <div>
              <h1 className="mt-10 ml-[4.9rem] font-bold text-2xl">24</h1>
              <p className="mt-4 ml-[4.5rem]">views</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[21rem] right-[3rem]">
        <Link to="/viewapplicants" className="ml-[54rem]">
          <button
            type="button"
            className="bg-[#5D6AA8] bg-opacity-95 hover:bg-[#5D6AA8] text-white font-bold py-1 px-8 rounded-full "
          >
            View applicants
          </button>
        </Link>
        <button
          type="button"
          className="bg-[#5D6AA8] bg-opacity-95 ml-[54rem] mt-2 hover:bg-[#5D6AA8] text-white font-bold py-1 px-12 rounded-full "
        >
          Repost Job
        </button>
      </div>
    </div>
  );
};

export default postedJob;
