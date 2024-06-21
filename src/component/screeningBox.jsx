import React from 'react'

const ScreeningBox = ({ key, question, answer }) => {
    return (
        <div key={key}>
            <div className='border border-2 border-black rounded-xl mb-5 h-auto w-[100%] text-left'>
                <span className=''>{question || ''}<button className='ml-[4.5rem]'>x</button></span>
                <div className='border border-1 border-black'></div>
                <p className='pl-2'>
                    Ideal Answer: {answer || ''}
                </p>
                <br />
                <input className='ml-5' type="checkbox" />
                <label className='pl-2' htmlFor="qualification">Must-have qualification</label>
            </div>
        </div>
    )
}

export default ScreeningBox
