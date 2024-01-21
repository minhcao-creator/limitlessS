import { useState } from "react"
import {close, logo1, menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href={"/"}>
        <img src={logo1} alt="limitlessstartup" className="w-[400px] h-[100px] sm:flex hidden"/>
      </a>
      
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className='font-poppins font-nomal cursor-pointer text-[20px] mr-10 text-white'
          >
            <a href={`/${nav.id}`}>
              {nav.title}
            </a>
          </li>
          ))}
      </ul>
      
      <div className="sm:hidden flex flex-1 justify-between items-center">
        <a href={"/"}>
          <img src={logo1} alt="limitlessstartups" className="w-[200px] h-[50px] flex"/>
        </a>
        
        <img 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-nomal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`/${nav.id}`}>
                  {nav.title}
                </a>
              </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar