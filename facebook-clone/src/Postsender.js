import { Avatar } from '@mui/material'
import React, { useState, useContext } from 'react'
import './Postsender.css'
import {Videocam, InsertEmoticon, PhotoLibrary } from '@mui/icons-material'

import { Context } from "./ContextProvider";

function Postsender() {
    const {username, photo} = useContext(Context)
    
    const [input, setInput] = useState('')

    const PostSubmit = (e) =>{
        e.preventDefault();

        setInput('');
    }

    return (
        <div className='Postsender'>
            <div className="top_post">
                <Avatar src={photo}/>
                <form>
                <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder={`What's on your mind, ${username}?`} />
                <button type="submit" onClick={PostSubmit}>Hidden button</button>
                </form>
            </div>
            <div className="bottom_post">
                <div className="post_option">
                    <Videocam style={{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="post_option">
                    <PhotoLibrary style={{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="post_option">
                    <InsertEmoticon style={{color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default Postsender