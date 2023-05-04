import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({message}) =>{
  return(
  
  <div className={
    `chat-message ${message.user === 'gpt' && "chatgpt"}`}>

    <div className='chat-message-center'>

      <div className={
      `avatar ${message.user === 'gpt' && "chatgpt"}`}
      >
        {message.user === "gpt" && 
        
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        enable-background="new 0 0 1877 1526" 
        version="1.1" viewBox="0 0 1877 1526"
        width={36}
        height={42}
  
        >
                        <path
                          d=""
                          fill="currentColor"
                          style={{
                            "--darkreader-inline-fill": "currentColor",
                          }}
                        />
                      </svg>
                }
      </div>
  
      <div className='message'>
        {message.message}
      </div>
  
    </div>
  </div>
  )
}

export default ChatMessage