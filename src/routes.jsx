import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './pages/Home'
import Login from './pages/Login'

export default function Navegacao(){
    return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<App/>} />
              <Route path='/login' element={<Login/>} />
         </Routes>
      </BrowserRouter>
  )
}