import React, { useContext, useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import Postsender from './Postsender'
import Post from './Post'

// import { Context } from "./ContextProvider";

import db from './firebase'
function Feed() {
    // const { username, photo } = useContext(Context)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot)=> {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className='Feed'>
            <StoryReel />
            <Postsender />
            {posts.map((post) =>(
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    username={post.data.username}
                    image={post.data.image}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                />
            ))}

        </div>
    )
}

export default Feed