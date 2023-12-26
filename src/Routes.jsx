import Login from './pages/Login.jsx'
import { Home } from './pages/Home.jsx'
import { CreatAccount } from './pages/CreatAccount.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export function AppRoutes(){


  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/CreatAccount' element={<CreatAccount/>}/>
      </Routes>
    </Router>
  )
}