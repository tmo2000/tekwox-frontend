import React from 'react'

const ScreeningB = ({ question, answer }) => {
  return (
    <div>
          <div className="m-4 border border-2 border-black rounded-xl h-auto w-[80%] text-left">
        <span className="pl-2">{question}</span>
        
        <div className="border border-1 border-black"></div>
        <p className="pl-2">Ideal Answer: {answer}</p>
        <br />
        <input className="ml-5" type="checkbox" />
        <label className="pl-2" htmlFor="qualification">
          Must-have qualification
        </label>
      </div>
    </div>
  );
}

export default ScreeningB
