import React from 'react'
import './style.scss'

const ChatBox = () => {
    return (
        <div className='chatbox'>

            <div className="chatbox__messages" >
                <div className="chatbox__messages__user-message">
                    <div className="chatbox__messages__user-message--ind-message">
                        <p className="name">Tekworx exceeded my expectations for job searching. Their platform is user-friendly, allowing me to easily navigate through listings and find the perfect match for my skills and preferences.</p>
                        <br />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChatBox
