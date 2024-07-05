import React from 'react'

const ScreeningBox = ({ question, answer, onClick }) => {
    const removeQuestion = () => {
        onClick();
    }
    return (
        <div className='mb-5'>
            <div className='border border-2 border-black rounded-xl h-auto w-full text-left p-4'>
                <div className='flex justify-between items-center'>
                    <span>{question || ''}</span>
                    <button className='ml-2' onClick={removeQuestion}>x</button>
                </div>
                <div className='border border-1 border-black my-2'></div>
                <p className='pl-2'>
                    Ideal Answer: {answer || ''}
                </p>
                <br />
                <div className='pl-2'>
                    <input className='ml-5' type="checkbox" />
                    <label className='pl-2' htmlFor="qualification">Must-have qualification</label>
                </div>
            </div>
        </div>
    )
}

export default ScreeningBox
