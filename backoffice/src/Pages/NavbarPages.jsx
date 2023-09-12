import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/Fa"
import { BsPieChart } from "react-icons/Bs"
import { FaRegUserCircle } from "react-icons/Fa"
import { LuClipboardList } from "react-icons/Lu"
import '../Css/inicio.css'

function Navbar() {
    return(
        <div className="principal">
            <div className="contenedor h-10">
                <div className="icon-title flex items-center border border-transparent border-b-black">
                    <div className="icono text-xl "><FaReact/></div>
                    <a href="/"><h1 className="titulo text-xl font-bold " >CREATE TIM</h1></a>
                </div>
                <nav className="navegador">
                    <ul>
                        <li className="flex items-center"><div className=""><BsPieChart/></div><NavLink to='/'className={({isActive})=> isActive ? "" : "" }>DASHBOARD</NavLink></li>
                        <li className="flex items-center"><div className=""><FaRegUserCircle/></div><NavLink to='/USER PROFILE'className={({isActive})=> isActive ? "" : "" }>USER PROFILE</NavLink></li>
                        <li className="flex items-center"><div className=""><LuClipboardList/></div><NavLink to='/TABLE LIST'className={({isActive})=> isActive ? "" : "" }>TABLE LIST</NavLink></li>
                        <li className="flex items-center"><div className=""><BsPieChart/></div><NavLink to='/TYPOGRAPHY'className={({isActive})=> isActive ? "" : "" }>TYPOGRAPHY</NavLink></li>
                        <li className="flex items-center"><div className=""><BsPieChart/></div><NavLink to='/ICONS'className={({isActive})=> isActive ? "" : "" }>ICONS</NavLink></li>
                        <li className="flex items-center"><div className=""><BsPieChart/></div><NavLink to='/MAPS'className={({isActive})=> isActive ? "" : "" }>MAPS</NavLink></li>
                        <li className="flex items-center"><div className=""><BsPieChart/></div><NavLink to='/NOTIICATIONS'className={({isActive})=> isActive ? "" : "" }>NOTIICATIONS</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar