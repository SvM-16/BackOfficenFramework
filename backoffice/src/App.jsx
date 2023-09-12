import {BrowserRouter, useRoutes} from 'react-router-dom'
import './index.css'

import Navbar from './Pages/NavbarPages'
import LogutPages from './Pages/LogutPages'
import PorfilePages from './Pages/PorfilePages'

function Router() {
  let router = useRoutes([
    {path: '/', element:<inicio/>},
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
