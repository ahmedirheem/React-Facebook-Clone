import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import GroupsIcon from '@mui/icons-material/Groups';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <SidebarRow Icon={HomeIcon} title='Home'/>
            <SidebarRow src='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/299860806_3222269074709308_2530190862854621773_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Qya3ZrhB2YEAX88Iu5Y&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBR0ygmjnUSx1FFL4RqZLjnbbNYE-PNASHg6Sw6YD4XXw&oe=63C61496' title='Ahmed Irheem'/>
            <hr/>
            <SidebarRow Icon={SmartDisplayIcon} title='Watch'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={SportsEsportsIcon} title='Gaming'/>
            <SidebarRow className='main_menu' Icon={AppsIcon} title='See all'/>
            <hr/>
            <SidebarRow src='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' title='Access AMIDEAST'/>
            <SidebarRow src='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' title='GSG Community'/>
            <SidebarRow src='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' title='Elzero Web School'/>
            <SidebarRow className='main_menu' Icon={GroupsIcon} title='See all groups'/>
            <hr/>
            <SidebarRow src='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' title='Reach Eduction Fund'/>
            <SidebarRow src='https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/321641337_6097153010295991_6055856874375425826_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Iu0Ud2eHrNQAX-1F8cx&_nc_ht=scontent.fgza2-3.fna&oh=00_AfBGzivGBWbi6OleFNVbVwWbaxWSvHMjLDdj6oZdYp8ErQ&oe=63C69759' title='Freinds'/>
            <SidebarRow className='main_menu' Icon={InsertLinkIcon} title='See all shortcuts'/>

            <p className='SidebarLinks'><a href="../public/index.html">Privacy</a> . <a href="../public/index.html">Terms</a> . <a href="../public/index.html">Advertising</a> . <a href="../public/index.html">Ad Choices</a> . <a href="../public/index.html">Cookies</a> .. <a href="../public/index.html">Meta © 2023</a></p>
        </div>
    )
}

export default Sidebar