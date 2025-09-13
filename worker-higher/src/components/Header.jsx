import { useState } from "react";
import LL1 from "../assets/LL1.png";
import LL2 from "../assets/LL 2.png";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={LL1} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center space-x-6">
           <img src={LL2} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
              হোম
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              সম্পর্কে
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
              সার্ভিস
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              যোগাযোগ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
