import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuLogIn} from "react-icons/lu";
import { MdPersonAdd } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";
import { Link } from "react-router";
import Avatar from "../assets/avatar.png";


export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="navbar-start"></div>
                <div className="navbar-center mt-4">
                    <div className="relative flex items-center">
                        <input type="text" placeholder="Search..." className="bg-(--blackDark) text-gray-300 p-3 pl-12 w-md rounded-3xl border border-(--blackDark) outline-none focus:border-(--turchese) placeholder:text-gray-300"/>
                        <Link className="absolute left-1 top-1/2 -translate-y-1/2 btn bg-transparent px-3 py-5 shadow-none border-none">
                           <FiSearch className="text-gray-300 hover:text-(--turchese)" size={25}/>
                        </Link> 
                    </div>
                </div>
                
                <div className="navbar-end mt-4 gap-5">

                    <button className="btn bg-(--bluDark) btn-circle border-none shadow-none">
                        <div className="indicator">
                            <IoNotificationsOutline size={25} color="white"/>
                            <span className="badge badge-xs bg-(--turchese) border-(--turchese) indicator-item"></span>
                        </div>
                    </button>

                    <button className="btn  bg-(--bluDark) btn-circle border-none shadow-none">
                        <div className="indicator">
                            <TbMessageDots size={25} color="white"/>
                            <span className="badge badge-xs bg-(--turchese) border-(--turchese) indicator-item"></span>
                        </div>
                    </button>

                    
                    <div className="dropdown dropdown-end md:mr-5">
                        <div tabIndex={0} role="button" className="btn btn-circle w-12 avatar focus:scale-105">
                            <div className="rounded-full ring-2 ring-(--turchese)">
                                <img alt="Profile image" src={Avatar}/>
                            </div>
                        </div>
                            
                        <ul tabIndex="-1" className="menu dropdown-content text-lg md:text-base text-white bg-(--bluLight)/95 rounded-box z-1 mt-5 w-50 p-2 shadow-md">
                            <li className="rounded-md hover:bg-(--bluDark) hover:text-(--turchese)">
                                <Link><LuLogIn />Login</Link>
                            </li>

                            <li className="rounded-md hover:bg-(--bluDark) hover:text-(--turchese)">
                                <Link><MdPersonAdd />Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}