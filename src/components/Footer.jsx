const Footer = () => {
    return (
      <footer className="bg-seaBlue p-4 border border-seaBlue text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Sam Barman. Tutti i diritti riservati.</p>
          <div className="space-x-4 mt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-turquoise">Instagram</a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-turquoise">YouTube</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  