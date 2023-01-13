import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import Postsender from './Postsender'
import Post from './Post'

function Feed() {
    return (
        <div className='Feed'>
            <StoryReel/>
            <Postsender/>
            <Post 
                profilePic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/299860806_3222269074709308_2530190862854621773_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Qya3ZrhB2YEAX88Iu5Y&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBR0ygmjnUSx1FFL4RqZLjnbbNYE-PNASHg6Sw6YD4XXw&oe=63C61496'
                username='Ahmed Irheem'
                image='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/322382949_554918269881257_1433298775788974951_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JDM_IAh_0cgAX_W8ng9&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBtQHVSTbe3G4SKt7BMXcXdwjD9KugWRx3ff0bvx54PGg&oe=63C6184C'
                timestamp='12 12 12'
                message='Wooo! Its working gooooood!'
            />
            <Post 
                profilePic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/299860806_3222269074709308_2530190862854621773_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Qya3ZrhB2YEAX88Iu5Y&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBR0ygmjnUSx1FFL4RqZLjnbbNYE-PNASHg6Sw6YD4XXw&oe=63C61496'
                username='Ahmed Irheem'
                timestamp='12 12 12'
                message='Wooo! Its working gooooood!'
            />
        </div>
    )
}

export default Feed