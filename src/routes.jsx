import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './pages/Home'
import Login from './pages/Login'
import Administracao from './pages/Administracao'

export default function Navegacao(){
    return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<App/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/administracao' element={<Administracao/>} />
         </Routes>
      </BrowserRouter>
  )
}