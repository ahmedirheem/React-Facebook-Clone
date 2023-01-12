import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import './Sidebar.css'


function SidebarRow({title, src, Icon}) {
    return (
        <div className='SidebarRow'>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow