import React,{useEffect, useState} from 'react'
import { FaArrowLeft, FaUser } from 'react-icons/fa';
import { Link,useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios'

const UserDetails = () => { 
  const [data, setData] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
        console.log(response)   
      setData(response.data) 
    } catch (error) {
      console.error(error);
    }
  }  
     
    useEffect(() => { 
      localStorage.setItem('dataKey', JSON.stringify(data));
      fetchData();
    },[data, fetchData])

  return (
    <>
      <div className="details-home">
        <Navbar/>

        <div className="dashboard-hero">
              <Sidebar/>

         
            <div className="details">
              <div className="details-header">
             
                <div className="details-top">
                  <Link to={'/dashboard'}>
                    <FaArrowLeft/>
                    <h3>Basic To Users </h3>
                  </Link>
                </div>

                <div className="details-bottom">
                  <div className="left-title">User Details</div>
                    <div className="right-title">
                      <button type="submit" className='details-btn'>Backlist User</button>
                      <button type="submit" className='details-btn md'>Active User</button>
                    </div>
                </div>
              </div>
 
              {/* profile header */}
             
            {data && (
             
              <div className="detail-profile" >
                <div className="profile-top">
                  <div className="avatar"><FaUser/> </div>
                  <div className="profile-title"><h4 className="name"> {data.guarantor.firstName} <br /> <span className='name-id'> {data.guarantor.orgName} </span> </h4></div>
                  <div className="tier"> User Tiers</div>
                  <div className="number">N{data.accountBalance} <br /> <span> {data.accountNumber}</span></div>
                </div>

                  <div className="profile-links">
                    <Link to={'/details'} className='underline p'> General Details </Link>
                    <Link to={'/details'} className='underline'> Documents </Link>
                    <Link to={'/details'} className='underline'> Bank Details </Link>
                    <Link to={'/details'} className='underline'> Savings </Link>
                    <Link to={'/details'} className='underline'> Loans </Link>
                    <Link to={'/details'} className='underline'> App and Systems </Link>
                  </div>
               </div>
            )}
 

              {/* profile bottom */}
            {data && (
              <div className="profile__b" >

                {/* PERSONAL iNFORMATION  */}
                <div className="p-info" >
                  <h3 className="info-head-title">Personal Information</h3> <br />

                  <div className="info-text">
                    <div className='sm'><h3 className="lg"> FULL NAME <br />
                    <span className="b"> {data.profile.firstName} </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> PHONE NUMBER <br />
                    <span className="b">{data.profile.firstName} </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> EMAIL <br />
                    <span className="b"> {data.email}</span></h3> </div>
                    <div className='sm'> <h3 className="lg"> BVN <br />
                    <span className="b">{data.profile.bvn} </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> GENDER <br />
                    <span className="b"> {data.profile.gender}</span></h3> </div>
                    <div className='sm'> <h3 className="lg"> MATERIAL STATUS <br />
                    <span className="b">Single </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> CHILDREN <br />
                    <span className="b"> None </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> TYPE OF RESIDENCE <br />
                    <span className="b"> {data.profile.address}</span></h3> </div>
                  </div>
                </div>
                  <hr />  <br /> 

                   {/* EDUCATIONAL iNFORMATION  */}
                <div className="p-info">
                  <h3 className="info-head-title">Education And Employment</h3> <br />

                  <div className="info-text">
                    <div className='sm'> <h3 className="lg"> LEVEL OF EMPLOYMENT <br />
                    <span className="b"> {data.education.level}</span></h3> </div>
                    <div className='sm'> <h3 className="lg"> EMPLOYMENT STATUS <br />
                    <span className="b">{data.education.employmentStatus} </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> SECTOR OF EMPLOYMENT <br />
                    <span className="b"> {data.education.sector}</span></h3> </div>
                    <div className='sm'> <h3 className="lg"> DURATION OF EMPLOYMENT <br />
                    <span className="b"> {data.education.duration}</span></h3> </div>
                    <div className='sm'> <h3 className="lg"> OFFICE EMAIL <br />
                    <span className="b"> {data.education.officeEmail}</span></h3> </div>
                    <div className='sm'> <h3 className="lg"> MONTHLY INCOME <br />
                    <span className="b"> {data.education.monthlyIncome}</span></h3> </div>
                    <div className='sm'> <h3 className="lg"> LOAN REPLACEMENT<br />
                    <span className="b"> {data.education.loanRepayment}</span></h3> </div> 
                  </div>
                </div>
                  <hr /> <br />

                    {/* SOCIALS iNFORMATION  */}
                <div className="p-info">
                  <h3 className="info-head-title"> Socials</h3> <br />

                  <div className="info-text">
                    <div className='sm'> <h3 className="lg"> TWITTER <br />
                    <span className="b">{data.socials.twitter} </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> FACEBOOK <br />
                    <span className="b">{data.socials.facebook}  </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> INSTAGRAM <br />
                    <span className="b"> {data.socials.instagram} </span></h3> </div>  
                  </div>
                </div>
                  <hr /> <br />

                    {/* GUARANTOR iNFORMATION  */}
                <div className="p-info">
                  <h3 className="info-head-title"> Guarantor</h3> <br />

                  <div className="info-text">
                    <div className='sm'> <h3 className="lg"> FULL NAME <br />
                    <span className="b"> {data.guarantor.firstName} {data.guarantor.lastName}  </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> PHONE NUMBER <br />
                    <span className="b">{data.guarantor.phoneNumber}  </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> EMAIL ADDRESS <br />
                    <span className="b"> {data.email} </span></h3> </div>                      
                    <div className='sm'> <h3 className="lg"> RELATIONSHIP <br />
                    <span className="b"> Brother</span></h3> </div> 
                  </div>
                </div>
                  <hr /> <br />

                     {/* OTHER iNFORMATION  */}
                <div className="p-info"> 
                    <br /> <br />

                  <div className="info-text">
                    <div className='sm'> <h3 className="lg"> FULL NAME <br />
                    <span className="b">{data.profile.firstName} {data.profile.lastName}  </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> PHONE NUMBER <br />
                    <span className="b"> {data.profile.phoneNumber} </span></h3> </div>
                    <div className='sm'> <h3 className="lg"> EMAIL ADDRESS <br />
                    <span className="b">{data.email}  </span></h3> </div>                      
                    <div className='sm'> <h3 className="lg"> RELATIONSHIP <br />
                    <span className="b"> Brother </span></h3> </div> 
                  </div>
                </div> 

              </div>

              )}
            </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails;