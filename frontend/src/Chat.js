import React, { useEffect, useRef, useState } from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material'
import { BsFillMicFill, BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import {IoMdAttach} from "react-icons/io"
import {FaRegLaugh} from "react-icons/fa"
import axios from './axios'

const Chat = ({messages}) => {
  const [input, setInput] = useState()

  const sendMessage=async(e)=>{
    e.preventDefault()
    await axios.post("/messages/new",{
      message: input,
      name: "User",
      received: false
    })

    setInput("")
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar/>
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <BsSearch/>
          </IconButton>
          <IconButton>
            <IoMdAttach/>
          </IconButton>
          <IconButton>
            <BsThreeDotsVertical/>
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        {messages && messages.map((message)=>{
          return(

        <p className={`chat__message ${message.received && "chat__receiver"}`}>
          <span className='chat__name'>{message.name}</span>
        {message.message}
        <span className='chat__timestamp'>
          {message.timestamp}
        </span>
        </p>
          )
        })}

        {/* <p className='chat__message chat__receiver'>
          <span className='chat__name'>Sonny</span>
        This is a message
        <span className='chat__timestamp'>
          {new Date().toUTCString()}
        </span>
        </p>

        <p className='chat__message'>
          <span className='chat__name'>Sonny</span>
        This is a message
        <span className='chat__timestamp'>
          {new Date().toUTCString()}
        </span>
        </p>
      </div> */}
      </div>

      <div className='chat__footer'>
        <FaRegLaugh/>

        <form>
          <input value={input} onChange={e=> setInput(e.target.value)} placeholder='Type a message' type='text' />
          <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        
        <BsFillMicFill/>
      </div>
    </div>
  )
}

export default Chat