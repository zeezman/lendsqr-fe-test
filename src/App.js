import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Login, User, Home} from "./components";
import UserDetails from "./pages/UserDetails";
import './App.scss'

const App = () => {
  
  return (
    <div className="app__container">
      <BrowserRouter>
        <div className="main">
          <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='user' element={<User/>} /> 
            <Route path='login' element={<Login/>} /> 
            <Route path='details/:id' element={<UserDetails />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App