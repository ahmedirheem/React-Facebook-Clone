import React, {useContext} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import Postsender from './Postsender'
import Post from './Post'

import { Context } from "./ContextProvider";

function Feed() {
    const {username, photo} = useContext(Context)
    return (
        <div className='Feed'>
            <StoryReel/>
            <Postsender/>
            <Post 
                profilePic={photo}
                username={username}
                image='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0'
                timestamp='12 12 12'
                message='Wooo! Its working gooooood!'
            />
            <Post 
                profilePic={photo}
                username={username}
                timestamp='12 12 12'
                message='Wooo! Its working gooooood!'
            />
        </div>
    )
}

export default Feed