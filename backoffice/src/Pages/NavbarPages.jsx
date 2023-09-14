import { NavLink } from "react-router-dom";
import { IoLogoReact } from "react-icons/io5";
import { BsPieChart } from "react-icons/Bs";
import { FaRegUserCircle } from "react-icons/Fa";
import { LuClipboardList } from "react-icons/Lu";
import  { LuNewspaper } from "react-icons/Lu"
import {PiMapPinBold} from "react-icons/Pi"
import { IoNotificationsOutline } from "react-icons/io5"
import '../Css/inicio.css'

function Navbar() {
    return(
        <div className="principal bg-black">
            <div className="contenedor h-10">
                    <div className="icon-title flex items-center border border-transparent border-b-white">
                        <div className="icono text-xl "><IoLogoReact/></div>
                        <a href="/"><h1 className="titulo text-xl " >CREATE TIM</h1></a>
                    </div>
                <nav className="navegador">
                    <ul>
                        <li><NavLink to='/'className={({isActive})=> isActive ? "flex items-center h-10 w-19 bg-gray-500 rounded font-bold font-bold" : "flex items-center font-bold " }><div className="li"><BsPieChart/></div>DASHBOARD</NavLink></li>
                        <li><NavLink to='/Porfile'className={({isActive})=> isActive ? "flex items-center h-10 w-19 bg-gray-500 rounded font-bold" : "flex items-center font-bold" }><div className="li"><FaRegUserCircle/></div>USER PROFILE</NavLink></li>
                        <li><NavLink to='/TABLE LIST'className={({isActive})=> isActive ? "flex items-center h-10 w-19 bg-gray-500 rounded font-bold" : "flex items-center font-bold" }><div className="li"><LuClipboardList/></div>TABLE LIST</NavLink></li>
                        <li><NavLink to='/TYPOGRAPHY'className={({isActive})=> isActive ? "flex items-center h-10 w-19 bg-gray-500 rounded font-bold" : "flex items-center font-bold" }><div className="li"><LuNewspaper/></div>TYPOGRAPHY</NavLink></li>
                        <li><NavLink to='/ICONS'className={({isActive})=> isActive ? "flex items-center h-10 w-19 bg-gray-500 rounded font-bold" : "flex items-center font-bold" }><div className="li"><IoLogoReact/></div>ICONS</NavLink></li>
                        <li><NavLink to='/MAPS'className={({isActive})=> isActive ? "flex items-center h-10 w-19 bg-gray-500 rounded font-bold" : "flex items-center font-bold" }><div className="li"><PiMapPinBold/></div>MAPS</NavLink></li>
                        <li><NavLink to='/NOTIICATIONS'className={({isActive})=> isActive ? "flex items-center h-10 w-19 bg-gray-500 rounded font-bold" : "flex items-center font-bold" }><div className="li"><IoNotificationsOutline/></div>NOTICATIONS</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar