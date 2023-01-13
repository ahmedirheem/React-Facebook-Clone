import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './Postsender.css'
import {Videocam, InsertEmoticon, PhotoLibrary } from '@mui/icons-material'

function Postsender() {

    const [input, setInput] = useState('')

    const PostSubmit = (e) =>{
        e.preventDefault();

        setInput('');
    }

    return (
        <div className='Postsender'>
            <div className="top_post">
                <Avatar src='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/299860806_3222269074709308_2530190862854621773_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Qya3ZrhB2YEAX88Iu5Y&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBR0ygmjnUSx1FFL4RqZLjnbbNYE-PNASHg6Sw6YD4XXw&oe=63C61496'/>
                <form>
                <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder="What's on your mind, Ahmed?" />
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