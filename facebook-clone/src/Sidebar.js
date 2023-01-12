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
            <SidebarRow src='https://www.facebook.com/photo/?fbid=3222269081375974&set=a.1383930968543137' title='Ahmed Irheem'/>
            <hr/>
            <SidebarRow Icon={SmartDisplayIcon} title='Watch'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={SportsEsportsIcon} title='Gaming'/>
            <SidebarRow className='main_menu' Icon={AppsIcon} title='See all'/>
            <hr/>
            <SidebarRow src='https://www.facebook.com/VamosBarca.Ar/photos/a.360082714078633/5801774876576029/' title='Access AMIDEAST'/>
            <SidebarRow src='https://www.facebook.com/VamosBarca.Ar/photos/a.360082714078633/5801774876576029/' title='GSG Community'/>
            <SidebarRow src='https://www.facebook.com/VamosBarca.Ar/photos/a.360082714078633/5801774876576029/' title='Elzero Web School'/>
            <SidebarRow className='main_menu' Icon={GroupsIcon} title='See all groups'/>
            <hr/>
            <SidebarRow src='https://www.facebook.com/VamosBarca.Ar/photos/a.360082714078633/5801774876576029/' title='Reach Eduction Fund'/>
            <SidebarRow src='https://www.facebook.com/VamosBarca.Ar/photos/a.360082714078633/5801774876576029/' title='Freinds'/>
            <SidebarRow className='main_menu' Icon={InsertLinkIcon} title='See all shortcuts'/>

            <p className='SidebarLinks'><a href="../public/index.html">Privacy</a> . <a href="../public/index.html">Terms</a> . <a href="../public/index.html">Advertising</a> . <a href="../public/index.html">Ad Choices</a> . <a href="../public/index.html">Cookies</a> .. <a href="../public/index.html">Meta © 2023</a></p>
        </div>
    )
}

export default Sidebar