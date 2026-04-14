import {BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi";
import { FaHeart, FaRegHeart, FaUserFriends} from "react-icons/fa";
import { IoGameController, IoGameControllerOutline, IoSettingsOutline} from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router";

export default function Sidebar(){

    return(
        <>
          <div className="h-screen flex flex-col bg-(--bluDark) w-25 rounded-r-3xl">
            <ul className="menu w-full flex items-center">
                <li className="transition duration-200 hover:scale-110">
                    <IoGameController color="var(--turchese)" size={65} />
                </li>
            </ul>    

            <ul className="menu w-full grow flex items-center justify-center gap-5">
                <li className="relative group">
                    <Link to={'/'} className="w-11 h-11 flex items-center justify-center rounded-full bg-(--bluLight) hover:bg-(--turchese) transition duration-200 hover:scale-125">
                       <BiHomeAlt2 size={20} className="text-white group-hover:hidden"/>
                       <BiSolidHomeAlt2 size={20} className="text-(--bluDark) hidden group-hover:block"/>
                    </Link>
                    <span className="tooltip-custom">Home</span>                                                    
                </li>

                <li className="relative group">
                    <Link className="w-11 h-11 flex items-center justify-center rounded-full bg-(--bluLight) hover:bg-(--turchese) transition duration-200 hover:scale-125">
                       <IoGameControllerOutline size={20} className="text-white group-hover:hidden"/>
                       <IoGameController size={20} className="text-(--bluDark) hidden group-hover:block"/> 
                    </Link>
                    <span className="tooltip-custom">Games</span>
                </li>

                <li className="relative group">
                    <Link className="w-11 h-11 flex items-center justify-center rounded-full bg-(--bluLight) hover:bg-(--turchese) transition duration-200 hover:scale-125">
                       <FaRegHeart size={20} className="text-white group-hover:hidden"/>
                       <FaHeart size={20} className="text-(--bluDark) hidden group-hover:block"/>
                    </Link>
                    <span className="tooltip-custom">Favorites</span>                                    
                </li>

                <li className="relative group">
                    <Link className="w-11 h-11 flex items-center justify-center rounded-full bg-(--bluLight) hover:bg-(--turchese) transition duration-200 hover:scale-125">
                       <LiaUserFriendsSolid size={20} className="text-white group-hover:hidden"/> 
                       <FaUserFriends size={20} className="text-(--bluDark) hidden group-hover:block"/>
                    </Link>
                    <span className="tooltip-custom">Friends</span>                                 
                </li>

                <li className="relative group">
                    <Link className="w-11 h-11 flex items-center justify-center rounded-full bg-(--bluLight) hover:bg-(--turchese) transition duration-200 hover:scale-125">
                       <IoSettingsOutline size={20} className="text-white group-hover:hidden"/>
                       <IoSettings size={20} className="text-(--bluDark) hidden group-hover:block"/>
                    </Link>
                    <span className="tooltip-custom">Settings</span>                                                          
                </li>
            </ul>    
          </div>    
        </>
    )
}