import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect } from 'react';
import Pusher from "pusher-js"
import axios from "./axios"

function App() {
  const [messages, setMessages] = useState([])
  useEffect(()=>{
    axios.get('./messages/new').then((response)=>setMessages(response.data)).catch((err)=>console.log(err))
  },[])
  useEffect(()=>{
    const pusher = new Pusher('5059c08ce5ce49931a62', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(data));
      setMessages([...messages, newMessage])

      return ()=>{
        channel.unbind_all()
        channel.unsubscribe()
      }
    });
  },[messages])
  return (
    <div className="app">
      <div className='app__body'>

      <Sidebar/>
      <Chat messages={messages} />
     

      </div>
    </div>
  );
}

export default App;
