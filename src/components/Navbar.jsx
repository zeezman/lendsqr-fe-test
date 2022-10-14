import React from 'react'
import { useGlobalContext } from '../context'
import { FaAccessibleIcon } from "react-icons/fa"; 

const Navbar = () => { 
  // const { setSearchTerm } = useGlobalContext()
  // const searchValue = React.useRef('')

  // React.useEffect(() => {
  //   searchValue.current.focus()
  // }, [])

  // function searchCocktail() {
  //   setSearchTerm(searchValue.current.value)
  // }
  // function handleSubmit(e) {
  //   e.preventDefault()
  // }

  return (
    <div className="nav">
      <nav className='rol'>
        <div className="logo"></div>
        <div className='section search'>
          {/* <form className='search-form' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='name'>search your favorite cocktail</label>
              <input
                type='text'
                name='name'
                id='name'
                ref={searchValue}
                onChange={searchCocktail}
              />
            </div>
          </form> */}
        </div>
        <div className="menu-link">
          <a href="#">Docs</a>
          <span> <FaAccessibleIcon/> </span> 
        </div>
      </nav>
    </div>
  )
}

export default Navbar