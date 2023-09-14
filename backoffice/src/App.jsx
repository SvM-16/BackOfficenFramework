import {BrowserRouter, useRoutes} from 'react-router-dom'
import './index.css'

import Navbar from './Pages/NavbarPages'
import InicioPages from './Pages/inicioPages'
import LogutPages from './Pages/LogutPages'
import PorfilePages from './Pages/PorfilePages'

function Router() {
  let router = useRoutes([
    {path:'/', element:<InicioPages/>},
    {path: '/logut', element:<LogutPages/>},
    {path: '/Porfile', element:<PorfilePages/>}
  ])
  return router
}

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Router>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
