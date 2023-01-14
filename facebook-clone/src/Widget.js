import { Avatar } from '@mui/material'
import React from 'react'
import './Widget.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CakeIcon from '@mui/icons-material/Cake';
import { Search } from '@mui/icons-material';
import Contact from './Contact'

function Widget() {
    return (
        <div className='Widget'>
            <div class="head">
                <h3>Your Pages and profiles</h3>
                <MoreHorizIcon style={{color: 'grey'}}/>
            </div>
            <div class="friends">
                <div class="title">
                    <h3>Friend requests</h3>
                    <span>See all</span>
                </div>
                <div class="content">
                    <Avatar style={{width: '60px', height: '60px'}} src='https://scontent.fgza9-1.fna.fbcdn.net/v/t39.30808-6/325578638_725343722246009_606403944736901357_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=S46whCIdNMUAX9CelHo&_nc_oc=AQmIkUUi7RLqpF-rEJ7z_uYT0mJa63efQ6iH7i8nDUNej5-sMsACryj_vs-ZiD-GkU4&_nc_ht=scontent.fgza9-1.fna&oh=00_AfBoxnEvxgU4e2UV7dbvFtegdxAFOsj2dkEphMP8EwKeVQ&oe=63C70615'/>
                    <div class="info">
                        <div class="name">
                            <h4>Salah Se</h4>
                            <span>2d</span>
                        </div>
                        <div class="mutual-friends">
                            <Avatar style={{width: '18px', height: '18px'}}  src='https://scontent.fgza9-1.fna.fbcdn.net/v/t39.30808-6/325578638_725343722246009_606403944736901357_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=S46whCIdNMUAX9CelHo&_nc_oc=AQmIkUUi7RLqpF-rEJ7z_uYT0mJa63efQ6iH7i8nDUNej5-sMsACryj_vs-ZiD-GkU4&_nc_ht=scontent.fgza9-1.fna&oh=00_AfBoxnEvxgU4e2UV7dbvFtegdxAFOsj2dkEphMP8EwKeVQ&oe=63C70615'/>
                            <Avatar style={{width: '18px', height: '18px', marginLeft: '-8px', zIndex: '-1'}} src='https://scontent.fgza9-1.fna.fbcdn.net/v/t39.30808-6/325578638_725343722246009_606403944736901357_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=S46whCIdNMUAX9CelHo&_nc_oc=AQmIkUUi7RLqpF-rEJ7z_uYT0mJa63efQ6iH7i8nDUNej5-sMsACryj_vs-ZiD-GkU4&_nc_ht=scontent.fgza9-1.fna&oh=00_AfBoxnEvxgU4e2UV7dbvFtegdxAFOsj2dkEphMP8EwKeVQ&oe=63C70615'/>
                            <span>15 mutual friends</span>
                        </div>
                        <div class="buttons">
                            <a href="/" class="confirm">Confirm</a>
                            <a href="/" class="delete">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="birthdays">
                <h3>Birthdays</h3>
                <div class="content">
                    <CakeIcon style={{color: '#1876F2', width: '40px', height: '40px'}}/>
                    <p><span>Dayaa Yassen</span> and <span>Ahmed S.</span> have birthdays today.</p>
                </div>
            </div>
            <div class="contacts">
                <div class="head">
                    <h3>Contacts</h3>
                    <div class="icons">
                        <VideoCallIcon/>
                        <Search/>
                        <MoreHorizIcon/>
                    </div>
                </div>
                <div class="people">
                    <Contact contactPic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' ContactName='Vamos Barcalona'/>
                </div>
            </div>
        </div>
    )
}

export default Widget