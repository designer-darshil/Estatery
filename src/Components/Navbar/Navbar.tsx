import React, { useState } from 'react';
import LogoImage from '../../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeNavbar, setActiveNavbar] = useState(false);

  // Sample data for demonstration
  const menuItems = [
    { label: 'Manage Property', items: ['Manage Property 1', 'Manage Property 2', 'Manage Property 3', 'Manage Property 4', 'Manage Property 5'] },
    { label: 'Resources', items: ['Resources 1', 'Resources 2', 'Resources 3', 'Resources 4'] }
  ];

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <nav className="bg-white/40 backdrop-blur-xl fixed w-full z-10">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={LogoImage} alt="" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setActiveNavbar(!activeNavbar)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${activeNavbar ? "block h-screen" : "hidden"}`} id="navbar-default">
            <div className="flex max-md:block items-center gap-3">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-start">
              <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "golden-gradient-text text-xl border-b-2 border-b-[#A17433] block"
                    : "p-2 block text-xl text-[#F1E484] duration-200 hover:opacity-50"
                }
                to="/rent"
              >
                Rent
              </NavLink>
                {/* <a href="/rent" className="block py-2 px-3 bg-blue-700 rounded max-md:text-start md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Rent</a> */}
              </li>
              <li>
                <a href="/buy" className="block py-2 px-3 text-gray-900 rounded max-md:text-start hover:bg-gray-100 md:hover:text-blue-700 md:p-0">Buy</a>
              </li>
              <li>
                <a href="/sell" className="block py-2 px-3 text-gray-900 rounded max-md:text-start hover:bg-gray-100 md:hover:text-blue-700 md:p-0">Sell</a>
              </li>
              {menuItems.map((menuItem, index) => (
                <li key={index} className='relative'>
                  <div className='flex items-center gap-2'>
                  <a
                    role='button'
                    onClick={() => toggleDropdown(index)}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0"
                  >
                    {menuItem.label}
                  </a>
                  <i className={`ri-arrow-down-s-line ${activeDropdown === index ? "rotate-180" : ""}`}></i>
                  </div>
                  <ul className={`absolute max-md:left-0 right-0 top-14 w-56 z-10 shadow-lg bg-white rounded-xl text-start ${activeDropdown === index ? "block" : "hidden"}`}>
                    {menuItem.items.map((item, idx) => (
                      <li key={idx} className='border-b border-b-gray border-opacity-10'>
                        <a className='block w-full h-full p-3' href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className='flex items-center gap-3'>
                <button className='py-2 px-4 max-md:p-4 text-sm rounded-lg border-2 border-[#E0DEF7] transition duration-150 ease-in-out hover:text-white hover:bg-primary hover:border-primary max-md:w-full'>Login</button>
                <button className='py-2 px-4 max-md:p-4 text-sm rounded-lg bg-primary text-white max-md:w-full'>Sign up</button>
            </div>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
