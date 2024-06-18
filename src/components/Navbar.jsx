import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <nav className="bg-seaBlue p-6 text-white relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-3xl font-cocktail text-sand">Sam, Barman</a>
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-turquoise text-xl">Home</a>
          <a href="#features" className="hover:text-turquoise text-xl">Servizi</a>
          <a href="#contact" className="hover:text-turquoise text-xl">Contatti</a>
          <a href="#social" className="hover:text-turquoise text-xl">Social</a>
        </div>
      </div>
      {/* Fullscreen menu */}
      {isOpen && (
        <div className={`absolute inset-0 bg-seaBlue flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out md:hidden z-40 h-screen`}>
          <a href="#" className="hover:text-turquoise text-3xl" onClick={toggleMenu}>Home</a>
          <a href="#features" className="hover:text-turquoise text-3xl" onClick={toggleMenu}>Servizi</a>
          <a href="#contact" className="hover:text-turquoise text-3xl" onClick={toggleMenu}>Contatti</a>
          <a href="#social" className="hover:text-turquoise text-3xl" onClick={toggleMenu}>Social</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
