import React,{useState, useEffect} from 'react'
import { FaArrowDown, FaBlender, FaEdit, FaFileExcel, FaHamburger, FaHome, FaMoneyBill, FaMoneyBillAlt, FaMoneyBillWave, FaMoneyCheck, FaPeopleCarry, FaRegHandScissors, FaSave, FaToolbox, FaUser, FaUserCog, FaUserFriends, FaUsers } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="side-container">
      
      <button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><FaHamburger/> menu </button>
     
      {activeMenu && (

      <div className="side__links">
        <div className="each-links"> 
          <FaToolbox/>
          <h4>Switch Organization</h4>
          <FaArrowDown/>
        </div> <br /><br />
        <div className="each-links"> 
         <FaHome/>
          <h4>Dashboard</h4>
        </div> <br />

        {/* sUBTITLE TEXT  */}
            <h3>COSTUMERS</h3>
        {/* sUBTITLE TEXT  */}
        <div className="each-links bg">
          <FaUsers/>
          <h4>Users</h4>
        </div> <br />
        <div className="each-links">
          <FaUser/>
          <h4>Guarantor</h4>
        </div> <br />
        <div className="each-links">
          <FaMoneyCheck/>
          <h4>Loan</h4>
        </div> <br />
        <div className="each-links">
          <FaRegHandScissors/>
          <h4>Decision Model</h4>
        </div> <br />
        <div className="each-links">
          <FaMoneyCheck/>
          <h4>Savings</h4>
        </div> <br />
        <div className="each-links">
          <FaBlender/>
          <h4>Loan Request</h4>
        </div> <br />
        <div className="each-links">
          <FaUserCog/>
          <h4>Whitelist</h4>
        </div> <br />
        <div className="each-links">
          <FaUserCog/>
          <h4>Karma</h4>
        </div> <br />

        {/* sUBTITLE TEXT  */}
        <h3>BUSINESSES</h3>
        <div className="each-links">
          <FaToolbox/>
          <h4>Organization</h4>
        </div> <br />
        <div className="each-links">
          <FaMoneyBill/>
          <h4>Loan Products</h4>
        </div> <br />
        <div className="each-links">
          <FaSave/>
          <h4>Saving Products</h4>
        </div> <br />
        <div className="each-links">
          <FaMoneyCheck/>
          <h4>Fees And Charges</h4>
        </div> <br />
        <div className="each-links">
          <FaMoneyBillWave/>
          <h4>Transaction</h4>
        </div> <br />
        <div className="each-links">
          <FaUserFriends/>
          <h4>Service</h4>
        </div> <br />
        <div className="each-links">
          <FaMoneyBill/>
          <h4>Settlements</h4>
        </div> <br />
        <div className="each-links">
          <FaFileExcel/>
          <h4>Reports</h4>
        </div> <br />

        {/* sUBTITLE TEXT  */}
        <h3>SETTINGS</h3>
        <div className="each-links">
          <FaPeopleCarry/>
          <h4>Preferences</h4>
        </div> <br />
        <div className="each-links">
          <FaMoneyBillAlt/>
          <h4>Fee and Pricing</h4>
        </div> <br />
        <div className="each-links">
          <FaEdit/>
          <h4>Audit Logs</h4>
        </div> <br />
         <div className="each-links"> 
            <FaUserCog/>
          <Link to={'/'}>
              <h4>Logout</h4>          
          </Link> 
        </div>
      </div> 
        )}
    </div>
  )
}

export default Sidebar