import React from 'react' 
import logo from '../assets/logo.svg';
import { FaArrowCircleDown, FaBell, FaSearch, FaUser,} from "react-icons/fa"; 
import { Link } from 'react-router-dom'; 

const Navbar = () => {   
      function handleSubmit(e) {
        e.preventDefault()
      }
  
  return (
    <div className="nav">
      <nav className='rol'>
        <div className="logo__new">
          <Link to={'/'}>
          <img src={logo} alt="company logo" />
          </Link>
        </div>
       <div className="search-section"> 
          <form  className="search" onSubmit={handleSubmit}>
            <input type='text' name='name' id='name' placeholder='search anything' 
            />
          </form>
          <div className="search-btn"> <FaSearch/> </div>          
       </div>
        <div className="menu-link">
          <h4>Docs</h4> 
          <div className="icon"> <FaBell/>  </div> 
          <div className="ava"><FaUser/></div>
          <FaArrowCircleDown/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar