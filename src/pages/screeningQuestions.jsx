import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import ScreeningTags from "../component/ScreeningTags";
import ScreeningBox from "../component/screeningBox";
import CustomScreenQuestions from "../component/CustomScreenQuestions";

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
    const exist = questions.find(item => (item.label === question.label))
    if (exist) {
      return
    }
    setQuestion([...questions, question])
  }

  const removeQuestion = (question) => {
    const newQuest = questions.filter(item => (item.label !== question.label))
    setQuestion(newQuest)
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        {/* Left-aligned image */}
        <div>
          <img
            src="logo.png" // Replace with the actual path to your logo image
            alt="Logo"
            className="w-32 h-auto ml-4 mt-6"
          />
        </div>

        {/* Right-aligned image */}
        <div className="mr-4">
          <img
            src="profile.png" // Replace with the actual path to your second image
            alt="Another Image"
            className="w-12 h-auto mt-6"
          />
        </div>
      </div>

      <div className="border border-1 rounded-2xl w-full md:w-[60%] px-6 md:px-10 mx-auto mt-8 md:mt-16 h-auto">
        {/* Form with Email, Password, and Button */}
        <form className="text-left w-full">
          <h3 className="mt-8 font-bold text-xl ml-3">Screening Questions</h3>
          <div className="mt-4 md:mt-16 ml-3">
            <div className="mb-4 ml-2 mt-9">
              <label
                htmlFor="country"
                className="mb-2 block text-left text-sm font-medium text-gray-700"
              >
                Ask a screening question
              </label>
            </div>
          </div>
       
          <div>
            {questions.map((quest, index) => (
              <ScreeningBox key={quest?.label + index} question={quest?.question} answer={quest?.ideal} onClick={() => removeQuestion(quest)} />
            ))}
            <br />
          </div>
          <div className="flex flex-wrap justify-between">
            {questionsList.map((quest) => (
              <ScreeningTags key={quest?.label} label={quest.label} onClick={() => handleQuestionsChanges(quest)} />
            ))}
          </div>
          <div className="mt-4">
            <CustomScreenQuestions />
          </div>
        </form>
        <div className="mt-8 mb-4 flex justify-center gap-2">
          <Link to="/jobdescription" className="pr-2">
            <button className="px-8 md:px-16 py-2 bg-[#5d6aa8] text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
              Back
            </button>
          </Link>
          <Link to="/postedjob" className="">
            <button className="px-8 md:px-16 py-2 bg-[#5d6aa8] text-white font-bold rounded-full hover:bg-white hover:text-[#5d6aa8] hover:border-[#5d6aa8] hover:border">
              Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScreeningQuestions;
