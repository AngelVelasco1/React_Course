import { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {

  const [state, setState] = useState(false)


  return (
    <nav className="bg-white w-100 border-b md:border-0 md:static">
      <div className="d-flex items-center px-4 w-100 mx-auto md:flex md:px-8">
        <div className="d-flex items-center justify-content-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
        
        </div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li>
              <NavLink
                to="/useContext"

              >
                User
              </NavLink>
            </li>

            <li>
              <NavLink to="/login">
                Login
              </NavLink>;
            </li>
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a href="javascript:void(0)" className="py-3 px-4 text-white bg-dark hover:bg-indigo-700 rounded-md shadow">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}