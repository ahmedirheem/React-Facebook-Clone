import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import Postsender from './Postsender'

function Feed() {
    return (
        <div className='Feed'>
            <StoryReel/>
            <Postsender/>
        </div>
    )
}

export default Feed