import React from 'react'
import './Widget.css'
import { Avatar } from '@mui/material'


function Contact({contactPic, ContactName}) {
    return (
        <div className='Contact'>
            <div class="image">
                <Avatar style={{width: '30px', height: '30px'}} src={contactPic}/>
                <span class="active-circle"></span>
            </div>
            <h3>{ContactName}</h3>
        </div>
    )
}

export default Contact