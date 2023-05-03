import '../App.css';

import paired_server from '../pages/paired_servers';
import discord from '../pages/discord';

interface SideBarProps {
    setLoadedPage: Function
}

export default function SideBar({ setLoadedPage }: SideBarProps) {
    return (
        <div className="sidebar">
            <div className="sidebar_links">
                <a href="#" onClick={() => {
                    setLoadedPage(paired_server);
                }}>Paired Servers</a>
                <a href="#" onClick={() => {
                    setLoadedPage(discord);
                }}>Discord</a>
            </div>
        </div>
    )
}
