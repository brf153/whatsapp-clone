import React from 'react'
import "./Sidebar.css"
import {MdDonutLarge} from "react-icons/md"
import {BsFillChatLeftTextFill, BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import {IconButton,Avatar} from "@mui/material"
import SidebarChat from './SidebarChat'

const Sidebar = () => {
  return (
    <div className='sidebar'> 
    <div className='sidebar__header'>
      <Avatar/>
      <div className='sidebar__headerRight'>
        <IconButton>
        <MdDonutLarge/>
        </IconButton>

        <IconButton>
          <BsFillChatLeftTextFill/>
        </IconButton>

        <IconButton>
          <BsThreeDotsVertical/>
        </IconButton>
      </div>
    </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <AiOutlineSearch fontSize={20}/>
          <input type='text'/>
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar