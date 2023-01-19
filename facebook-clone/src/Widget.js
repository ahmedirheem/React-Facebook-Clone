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
                    <Avatar style={{width: '60px', height: '60px'}} src='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0'/>
                    <div class="info">
                        <div class="name">
                            <h4>Salah Se</h4>
                            <span>2d</span>
                        </div>
                        <div class="mutual-friends">
                            <Avatar style={{width: '18px', height: '18px'}}  src='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0'/>
                            <Avatar style={{width: '18px', height: '18px', marginLeft: '-8px', zIndex: '-1'}} src='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0'/>
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
                    <Contact contactPic='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0' ContactName='Vamos Barcalona'/>
                    <Contact contactPic='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/325935453_662712712295870_1274327430994856731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r1AuiZEIAsQAX9RSF9-&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfDo_XMvQjJIsdgF72bTPivhM7pzfeXiLuoBXPFyYUBsKA&oe=63CF48F0' ContactName='Vamos Barcalona'/>
                </div>
            </div>
        </div>
    )
}

export default Widget