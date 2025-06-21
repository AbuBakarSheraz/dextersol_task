import React, { useState, useEffect } from 'react';
import logo from '../assets/images/igs_logo.png';
import rectangle from '../assets/icons/rectangle 42.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const navItems = [
    'Partner',
    'Company',
    'Managed Services',
    'Industries',
    'Careers'
  ];

  const strategyItems = [
    { text: 'STRATEGY', prefix: '1IGS' },
    { text: 'PROCEDURE', prefix: '1IGS i' },
    { text: 'SUPPLY', prefix: '1IGS i' },
    { text: 'MANAGED SERVICES', prefix: '1IGS' }
  ];

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleStrategyDropdown = () => {
    setActiveDropdown(activeDropdown === 'strategy' ? null : 'strategy');
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center py-3 px-4 md:px-8 md:py-6 relative z-50">
        {/* Logo */}
        <div className="flex gap-1 items-center flex-shrink-0">
          <img src={logo} alt="IGS Logo" className="h-8 md:h-12" />
          <img src={rectangle} alt="Separator" className="h-8 md:h-12 bg-white" />
          <div className="flex flex-col justify-between h-8 md:h-12 text-white leading-tight">
            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-wide">RESHAPING</p>
            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-wide">PROCUREMENT</p>
            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-wide">THROUGH INNOVATION</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="text-white flex gap-6 xl:gap-8 font-semibold text-sm xl:text-base leading-[26px] tracking-normal font-poppins">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-gray-300 transition-colors duration-200 flex items-center whitespace-nowrap">
                {item}
                <ArrowDropDownIcon className="ml-1 text-lg" />
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors z-50 relative"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#2D53A4] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-white font-bold text-lg font-poppins">Menu</h2>
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 hover:bg-white/10 rounded transition-colors"
            aria-label="Close mobile menu"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full overflow-y-auto pb-20">
          {/* Main Navigation Items */}
          <nav className="flex-1">
            <ul className="text-white font-semibold text-base leading-[26px] tracking-normal font-poppins">
              {navItems.map((item, index) => (
                <li key={index} className="border-b border-white/10">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full text-left px-4 py-4 hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                  >
                    {item}
                    <ArrowDropDownIcon 
                      className={`text-lg transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {/* Dropdown Content Placeholder */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeDropdown === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="bg-white/5 px-6 py-3">
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="block py-1 hover:text-gray-300">Submenu Item 1</a></li>
                        <li><a href="#" className="block py-1 hover:text-gray-300">Submenu Item 2</a></li>
                        <li><a href="#" className="block py-1 hover:text-gray-300">Submenu Item 3</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* IGS Strategy Section in Mobile Menu */}
          <div className="border-t border-white/10 mt-4">
            <button
              onClick={toggleStrategyDropdown}
              className="w-full text-left px-4 py-4 hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
            >
              <span className="text-white font-bold font-poppins text-base">
                <span className="text-[#F36434]">1IGS</span> SERVICES
              </span>
              <ArrowDropDownIcon 
                className={`text-lg text-white transition-transform duration-200 ${
                  activeDropdown === 'strategy' ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeDropdown === 'strategy' ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white/5 px-4 py-3">
                <ul className="space-y-3">
                  {strategyItems.map((item, index) => (
                    <li key={index} className="flex items-center cursor-pointer hover:text-[#506BA4]/80 transition-colors text-sm">
                      <span className="text-[#F36434] font-bold">{item.prefix}</span>
                      <span className="text-white font-bold ml-1">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop IGS Strategy Bar */}
      <div className="hidden lg:block px-4 md:px-8 mt-2">
        <ul className="flex flex-col md:flex-row text-[#506BA4] gap-3 md:gap-3 lg:gap-4 font-bold font-poppins text-sm lg:text-sm">
          {strategyItems.map((item, index) => (
            <li key={index} className="flex items-center cursor-pointer hover:text-[#506BA4]/80 transition-colors">
              <span className="text-[#F36434]">{item.prefix}</span>&nbsp;{item.text}
              <ArrowDropDownIcon className="text-lg text-white " />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;