import { ChatBubble, Share, ThumbUp } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'

function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className='Post'>
        <div className="post_user_info">
            <Avatar src={profilePic}/>
            <div className="post_info_add">
                <h3>{username}</h3>
                <p>{timestamp}</p>
            </div>
            <MoreHorizIcon style={{color: 'grey'}}/>
        </div>
        <div className="post_message">
            <p>{message}</p>
        </div>
        <div className="post_image">
            <img src={image} alt=''/>
        </div>
        <div className="post_options">
            <div className="post_option">
                <ThumbUp style={{color: 'grey'}}/>
                <h3>Like</h3>
            </div>
            <div className="post_option">
                <ChatBubble style={{color: 'grey'}}/>
                <h3>Comment</h3>
            </div>
            <div className="post_option">
                <Share style={{color: 'grey'}}/>
                <h3>Share</h3>
            </div>
        </div>
    </div>
  )
}

export default Post