import { NavLink, Link } from "react-router-dom";

import { kymLogo, pdf } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={kymLogo} alt='logo' className='w-[50px] h-[50px] rounded-lg outline-none md:justify-start items-center' />
      </NavLink>
      <nav className='flex md:flex ml-2 items-center text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <a href={pdf} download className="text-black hover:text-blue-600">Download Resume</a>
      </nav>
    </header>
  );
};

export default Navbar;
