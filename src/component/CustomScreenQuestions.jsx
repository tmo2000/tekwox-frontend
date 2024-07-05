import React from 'react'

const CustomScreenQuestions = () => {
  return (
    <div>
      <div className='border border-2 border-black rounded-xl mb-5 h-auto w-full text-left p-4'>
        <span className='block mt-4 ml-2 text-sm md:text-base'>Write your own screening question</span>
        <div className='border border-black my-2'></div>
        <input 
          type="text" 
          className='border rounded bg-white mt-3 ml-4 w-[90%] md:w-[95%]' 
        />
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mt-4'>
          <div className='flex flex-col md:flex-row md:items-center'>
            <p className='ml-4 mt-2'>
              Response Type: 
              <select 
                name="response-type" 
                id="response-type" 
                className='border bg-[#D9D9D9] bg-opacity-[21%] rounded p-1 ml-2'
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </p>
            <p className='ml-4 mt-2 md:ml-8'>
              Ideal Answer: 
              <select 
                name="ideal-answer" 
                id="ideal-answer" 
                className='border bg-[#D9D9D9] bg-opacity-[21%] rounded p-1 ml-2'
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </p>
          </div>
          <div className='flex items-center ml-4 mt-2 md:ml-8'>
            <input 
              type="checkbox" 
              id="qualification" 
              className='mr-2' 
            />
            <label 
              htmlFor="qualification" 
              className='text-sm md:text-base'
            >
              Must-have qualification
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomScreenQuestions
