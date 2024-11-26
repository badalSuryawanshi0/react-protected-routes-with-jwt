import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon,UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'
import Logout from '../Logout/Logout';
const navigation = [
  { name: 'Home', path: '/home'},
  {name:"Dashboard" ,path:'/dashboard'},
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { 
    name: <UserCircleIcon className='h-[20px] w-[20px]' />, 
    path: '#',
    dropdownItems: [
      { name: 'Signup', path: '/signup' },
      { name: <Logout/>, path: '#' },
      
      
    ]
  },
];

export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);  //for hamburgur  menu below MD
  const [activeItem, setActiveItem] = useState('Home'); //use check which section is open and highlight them
  const [openDropdown, setOpenDropdown] = useState(null);  //This keeps the track of which dropdown currently open in case mutiple
  const [isScrolled, setIsScrolled] = useState(false);  // as name suggest check whether scrolled or not

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (openDropdown === itemName) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <span className={`text-xl font-bold  transition-colors duration-300  ${
                isScrolled ? 'text-indigo-600' : 'text-white'
              }`}>
              </span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => {
                      handleItemClick(item.name); 
                      if (item.dropdownItems) {
                        toggleDropdown(item.name); //if drop down is there then update state according to it
                      }
                    }}
                    className={`flex items-center  mx-3 rounded-md text-sm font-medium transition-colors duration-700 ${
                      activeItem === item.name
                        ? 'text-indigo-600'
                        : isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
                    }`}
                  >
                    <Link
                            key={item.name}
                            to={item.path}
                            
                            role="menuitem"
                          >
                            {item.name}
                          </Link>
                    {item.dropdownItems && (
                      <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        openDropdown === item.name ? 'transform rotate-180' : ''
                      }`} />
                    )}
                  </button>
                 { /*understand the below code*/}
                  {item.dropdownItems && openDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={()=>setOpenDropdown(false)}
                          
                          >
                            {dropdownItem.name}
                            
                          </Link>
                          
                        ))}
                        
                      </div>
                      
                    </div>
                    
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>




      {/*leave the below code */}
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => {
                    handleItemClick(item.name);
                    if (item.dropdownItems) {
                      toggleDropdown(item.name);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                    activeItem === item.name
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {item.dropdownItems && (
                    <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      openDropdown === item.name ? 'transform rotate-180' : ''
                    }`} />
                  )}
                </button>
                {item.dropdownItems && openDropdown === item.name && (
                  <div className="pl-4">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
