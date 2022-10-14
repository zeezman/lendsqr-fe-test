import React,{useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg';
import illustration from '../assets/illustration.jpg';

const Login = () => {
  const navigate = useNavigate() 

  const [inputTerm, setInputTerm] = useState(''); 

  const inputRef = useRef('') 

  const inputData = () => {
    setInputTerm( inputTerm.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  useEffect(() => { 
  inputRef.current.focus()
  }, []);

  return (
    <>
      {/* Header logo section */}
      <div className="header-logo">
        <div className="logo">
          <img src={logo} alt="company logo" />
        </div>

        {/* Login section  */}
        <div className="header-hero">
          <div className="rol">
            <div className="image">
                <img src={illustration} alt="company logo" />
            </div>

            {/* Form section  */}
            <div className="form">
              <div className="form__header"> 
                <h3 className="title-text">Welcome! <br /> <span>Enter details to login </span> </h3> 
              </div>
             
                  <form className='action' onSubmit={handleSubmit} >        
                      <input ref={inputRef} type="email" id='email' name='email' className='form-input' placeholder='Email' required onChange={inputData} /> <br /><br />
                      <input ref={inputRef} type="password" id='text' name='text' className='form-input' placeholder='Password' required onChange={inputData} /><br /> <br /> 
                      <span className="large">FORGOT PASSWORD?</span> <br /> <br />
                      <input type="button" value="LOG IN" className='btn-l' onClick={() => {navigate('/dashboard')}}/>       
                </form>            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login