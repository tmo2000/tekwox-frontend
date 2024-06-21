import React from "react";
import { Link } from "react-router-dom";
import ScreeningTags from "../component/ScreeningTags";
import ScreeningBox from "../component/screeningBox";

const questionsList = [
  { label: 'Education', question: "Have you completed the following level of Education: Bachelor’s?  ", ideal: 'yes' },
  { label: 'Background Check', question: "Are you willing to undergo a background check, in accordance with local law/regulations?", ideal: 'yes' },
  { label: 'Work Experience', question: " ", ideal: '' },
  { label: 'Location', question: " ", ideal: '' },
  { label: 'Visa Status', question: "Will you now or in the future require sponsorship for employment visa status? ", ideal: 'yes' },



]

const ScreeningQuestions = () => {
  const [questions, setQuestion] = React.useState([])
  const handleQuestionsChanges = (question) => {
    setQuestion([...questions, question])
  }
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

      <div className="border border-1 rounded-2xl  w-[70%] px-10 mt-[2rem] ml-[11rem] text-left h-[50rem] ">
        {/* Form with Email, Password, and Button */}

        <form className="text-left w-[100%]">
          <h3 className="mt-8 font-bold text-xl ml-3">Screening Questions</h3>
          <div className="ml-3  mt-16 ">
            <div className="mb-4 ml-2 mt-9">
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-left text-sm font-medium text-gray-700"
                >
                  Ask a screening question
                </label>
              </div>
            </div>
          </div>
          <div>
            {questions.map((quest) => (
              <ScreeningBox key={quest?.label} question={quest?.question} answer={quest?.ideal} />
            ))}
            <br />
          </div>
          <div className="flex flex-wrap justify-between">
            {questionsList.map((quest) => (
              <ScreeningTags key={quest?.label} label={quest.label} onClick={() => handleQuestionsChanges(quest)} />
            ))}


          </div>
          <div>
            <Link to="/jobdescription" className="pt-[20rem] pr-2">
              <button className="px-16 py-2 mt-[30rem] bg-[#5d6aa8]  text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
                Back
              </button>
            </Link>
            <Link to="/postedjob" className="pt-[20rem]">
              <button className="px-16 py-2 mt-[30rem] bg-[#5d6aa8]  text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
                Post
              </button>
            </Link>

          </div>

        </form>
      </div>
    </div>
  );
};

export default ScreeningQuestions;
