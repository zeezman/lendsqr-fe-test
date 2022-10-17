import React,{useEffect, useState} from 'react' 
import Navbar  from "./Navbar";
import Sidebar  from "./Sidebar";
import User from './User';
import axios from 'axios'
import { FaCaretSquareDown, FaCashRegister, FaDropbox, FaMoneyBill, FaUser, FaUsers } from 'react-icons/fa'; 

const Dashboard = () => {
  const [data, setData] = useState([])
  const [isHovering, setIsHovering] = useState(false)
  const [loading, setLoading] = useState(true)  

// Organization Tab Dropdown function 
const handleMouseOver = () => {
  setIsHovering(true)
}
const handleMouseOut = () => {
  setIsHovering(false)
}

// Data Fetching Function 
  const fetchData = async () => {
    try {
      const response = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users') 
        // setData(paginate(data))
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }  

  useEffect(() => { 
    fetchData();
  },[data, fetchData])
 

  return (
    <div>
        <div className="dash">
              <Navbar/>

            <div className="dashboard-hero">
                <Sidebar/>

              {/* DASHBOARD COMPONENTS  */}
                <div className="dashboard-left">
                      <div className="title-header">
                        <h3>Users</h3>
                      </div>

                      <div className="grid-block">
                        <div className="grid-menu">
                          <div className="item">
                              <div className="icon-top"> <FaUser/> </div> 
             
                                <h3 className="text">USERS <br /> <span className="number">2,458</span> </h3>
                            </div>
                            <div className="item">
                              <div className="icon-top"> <FaUsers/> </div> 
                                <h3 className="text">ACTIVE USERS <br /> <span className="number">2,458</span> </h3>
                            </div> 
                            <div className="item">
                              <div className="icon-top"> <FaMoneyBill/> </div> 
                                <h3 className="text">USERS WITH LOAN <br /> <span className="number">12,458</span> </h3>
                            </div>
                            <div className="item">
                              <div className="icon-top"> <FaCashRegister/> </div> 
                                <h3 className="text">USERS WITH SAVINGS  <br /> <span className="number">102,458</span> </h3>
                            </div>
                        </div>
                          
                      </div>

                      
                      {/* User Dropdown header */}
                      <div className="user-header">                        
                          <div className="rol">
                            <div className="col" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
                                <h2 className='text-title'>ORGANIZATION</h2> 
                                <FaCaretSquareDown/>            
                            </div>                         
                            <div className="col"> 
                                <h2 className='text-title'>USERNAME</h2> 
                                <FaCaretSquareDown/>             
                            </div>
                            <div className="col"> 
                                <h2 className='text-title'>EMAIL</h2> 
                                <FaCaretSquareDown/>             
                            </div>
                            <div className="col"> 
                                <h2 className='text-title'>PHONE NUMBER</h2> 
                                <FaCaretSquareDown/>             
                            </div>
                            <div className="col"> 
                                <h2 className='text-title'>DATE JOINED</h2> 
                                <FaCaretSquareDown/>             
                            </div>
                              <div className="col"> 
                                <h2 className='text-title'>STATUS</h2> 
                                <FaCaretSquareDown/>             
                            </div>
                          </div>

                          {/* hover element section  */}
                        {isHovering && (

                          <div className="drop-box">
                            <div className="row-box">
                              <div className="each__box"> 
                                <h2 className='text-title'>Organization</h2> 
                                <input className='box-input' type="text" name="name" placeholder='Select' />
                              </div>
                              <div className="each__box"> 
                                <h2 className='text-title'>Username</h2> 
                                <input className='box-input' type="text" name="name" placeholder='User' />
                              </div>
                              <div className="each__box"> 
                                <h2 className='text-title'>Email</h2> 
                                <input className='box-input' type="text" name="name" placeholder='Email' />
                              </div>
                                <div className="each__box"> 
                                <h2 className='text-title'>Date</h2> 
                                <input className='box-input' type="text" name="name" placeholder='Date' />
                              </div>
                              <div className="each__box"> 
                                <h2 className='text-title'>Phone Number</h2> 
                                <input className='box-input' type="text" name="name" placeholder='Phone Number' />
                              </div>
                              <div className="each__box"> 
                                <h2 className='text-title'>Status</h2> 
                                <input className='box-input' type="text" name="name" placeholder='Select' />
                              </div>
                              <div className="b-button">
                                <button type="reset" className='input-btn'> Reset </button>
                                <button type="submit" className='input-btn filter'>Filter</button>
                              </div>
                            </div>
                          </div>
                          )}
                       </div>

                      {loading && <h2> Loading... </h2>}
                      {/* User section  */}
                      {data.map((item) => {
                        return <User item={item} />                       
                      })} 
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Dashboard