import React, {useContext} from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import GroupsIcon from '@mui/icons-material/Groups';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import { Context } from "./ContextProvider";

function Sidebar() {
    const {username, photo} = useContext(Context)

    return (
        <div className='Sidebar'>
            <SidebarRow Icon={HomeIcon} title='Home'/>
            <SidebarRow src={photo} title={username}/>
            <hr/>
            <SidebarRow Icon={SmartDisplayIcon} title='Watch'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={SportsEsportsIcon} title='Gaming'/>
            <SidebarRow className='main_menu' Icon={AppsIcon} title='See all'/>
            <hr/>
            <SidebarRow src='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/324742124_1162445744424914_5562916473628956352_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xUn_ItE-W9oAX9h1p8A&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfA0LanDg0T51XRMA8x6C_m3e_-Tz6-MH3dwXIzuGViLYw&oe=63CF35F0' title='Access AMIDEAST'/>
            <SidebarRow src='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/324742124_1162445744424914_5562916473628956352_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xUn_ItE-W9oAX9h1p8A&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfA0LanDg0T51XRMA8x6C_m3e_-Tz6-MH3dwXIzuGViLYw&oe=63CF35F0' title='GSG Community'/>
            <SidebarRow src='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/324742124_1162445744424914_5562916473628956352_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xUn_ItE-W9oAX9h1p8A&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfA0LanDg0T51XRMA8x6C_m3e_-Tz6-MH3dwXIzuGViLYw&oe=63CF35F0' title='Elzero Web School'/>
            <SidebarRow className='main_menu' Icon={GroupsIcon} title='See all groups'/>
            <hr/>
            <SidebarRow src='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/324742124_1162445744424914_5562916473628956352_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xUn_ItE-W9oAX9h1p8A&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfA0LanDg0T51XRMA8x6C_m3e_-Tz6-MH3dwXIzuGViLYw&oe=63CF35F0' title='Reach Eduction Fund'/>
            <SidebarRow src='https://scontent.fjrs24-1.fna.fbcdn.net/v/t39.30808-6/324742124_1162445744424914_5562916473628956352_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xUn_ItE-W9oAX9h1p8A&_nc_ht=scontent.fjrs24-1.fna&oh=00_AfA0LanDg0T51XRMA8x6C_m3e_-Tz6-MH3dwXIzuGViLYw&oe=63CF35F0' title='Freinds'/>
            <SidebarRow className='main_menu' Icon={InsertLinkIcon} title='See all shortcuts'/>

            <p className='SidebarLinks'><a href="../public/index.html">Privacy</a> . <a href="../public/index.html">Terms</a> . <a href="../public/index.html">Advertising</a> . <a href="../public/index.html">Ad Choices</a> . <a href="../public/index.html">Cookies</a> .. <a href="../public/index.html">Meta © 2023</a></p>
        </div>
    )
}

export default Sidebar