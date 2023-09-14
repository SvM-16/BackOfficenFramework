import '../Css/Principal.css';
import { NavLink } from 'react-router-dom';
import {IoColorPaletteOutline} from 'react-icons/io5';
import {IoPlanetOutline} from 'react-icons/io5';
import {BiSearchAlt2} from 'react-icons/bi';
import {TbChartDonut3} from "react-icons/tb";
import {LiaBezierCurveSolid} from "react-icons/lia";
import {IoFlashlightOutline} from "react-icons/io5";
import {AiOutlineHeart} from "react-icons/ai";
import {PiArrowClockwiseBold} from "react-icons/Pi";
import {IoCalendarOutline} from "react-icons/io5"
import {TbClockHour4} from "react-icons/tb"
import Diagrama from "../images/diagrama-en-puntos.png"

const inicioPages = () => {
  return (
    <div>
        <div className="Principal1">
          <div className="contenedor1 flex items-center border border-transparent border-b-gray-200">
            <h1>Dashbord</h1>
            <div className="iconos flex items-center">
              <div className='paleta'><IoColorPaletteOutline/></div>
              <div className='planeta'><IoPlanetOutline/></div>
            </div>
            <div className="b-busqueda flex items-center"><BiSearchAlt2/><input type="text" placeholder='Shearch' /></div>
            <nav className="navegador1">
              <ul className='flex items-center'>
                <li><NavLink to='/'className={({isActive})=> isActive ? "" : "" }>Account</NavLink></li>
                <li><NavLink to='/'className={({isActive})=> isActive ? "" : "" }>Dropdown</NavLink></li>
                <li><NavLink to='/logut'className={({isActive})=> isActive ? "" : "" }>Logut</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="contenedor2">
            <div className="cuadro1 ">
              <div className='icono-tex flex items-center' >
                <div className="icono1"><TbChartDonut3/></div>
                  <div className='texto flex flex-col '>
                    <h1>Number</h1>
                    <h2>150GB</h2>
                  </div>
              </div>
              <div className="icono-tex1 flex items-center">
                <div className="icono2"><PiArrowClockwiseBold/></div>
                <h1 className='Update'>Update Now</h1>
              </div>
            </div>
            <div className="cuadro1 ">
              <div className='icono-tex flex items-center' >
                <div className="icono3"><IoFlashlightOutline/></div>
                  <div className='texto flex flex-col '>
                    <h1>Revenue</h1>
                    <h2>$1,345</h2>
                  </div>
              </div>
              <div className="icono-tex1 flex items-center">
                <div className="icono2"><IoCalendarOutline/></div>
                <h1 className='Update'>Last day</h1>
              </div>
            </div>
            <div className="cuadro1 ">
              <div className='icono-tex flex items-center' >
                <div className="icono4"><LiaBezierCurveSolid/></div>
                  <div className='texto1 flex flex-col '>
                    <h1>Erros</h1>
                    <h2>23</h2>
                  </div>
              </div>
              <div className="icono-tex1 flex items-center">
                <div className="icono2"><TbClockHour4/></div>
                <h1 className='Update'>In the last hour</h1>
              </div>
            </div>
            <div className="cuadro1 ">
              <div className='icono-tex flex items-center' >
                <div className="icono1"><AiOutlineHeart/></div>
                  <div className='texto flex flex-col '>
                    <h1>Followers</h1>
                    <h2>+45PK</h2>
                  </div>
              </div>
              <div className="icono-tex1 flex items-center">
                <div className="icono2"><PiArrowClockwiseBold/></div>
                <h1 className='Update'>Update Now</h1>
              </div>
            </div>
          </div>
          <div className='contenedor3 flex '>
            <div className='cuadro2'>
              <h2>Users Behavior</h2>
              <h1>24 Horus performace</h1>
              <img src={Diagrama} className='h-10' />
              <div className='colors-cl flex items-center'>
                <h1>Open</h1>
                <h1>Click</h1>
                <h1>Click Second Time</h1>
              </div>
              <div className="icono-tex1 flex items-center">
                <div className="icono2"></div>
                <h1 className='Update'>Update Now</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default inicioPages;
