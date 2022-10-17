import React from 'react';
import { Link } from "react-router-dom";

const User = ({item}) => {
  const {orgName, userName, email, phoneNumber, id, createdAt, lastActiveDate} = item

  return (
    <div className="user-section">  
      <div className="user-item" >
        <div className="rol-item" key={id}>  
            <div className="col" >
              <Link to={`/details/${id}`} className='btn-details'>
                  <h3 className='item-p'>lendsqr</h3>
              </Link>
            </div>
            <div className="col">
              <Link to={`/details/${id}`} className='btn-details'>
                  <h3 className='item-p'>{userName}</h3>
              </Link>
            </div>
            <div className="col">
              <Link to={`/details/${id}`} className='btn-details'>
                  <h3 className='item-p'>{email}</h3>
              </Link>
            </div>
            <div className="col">
              <Link to={`/details/${id}`} className='btn-details'>
                  <h3 className='item-p'>{phoneNumber}</h3>
              </Link>
            </div>
            <div className="col">
              <Link to={`/details/${id}`} className='btn-details'>
                  <h3 className='item-p'>{createdAt}</h3>
              </Link>
            </div>
            <div className="col">
              <Link to={`/details/${id}`} className='btn-details'>
                  <h3 className='item-p'>{lastActiveDate}</h3>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default User