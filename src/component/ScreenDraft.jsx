import React from "react";

const ScreenDraft = ({ question, answer }) => {
  return (
    <div>
      <div className="border border-2 border-black rounded-xl h-auto w-[100%] text-left">
        <span className="pl-2">{question}<button className="ml-[1rem]">x</button></span>
        
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
};

export default ScreenDraft;
