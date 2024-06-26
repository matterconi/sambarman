import { useNavigate } from 'react-router-dom';

const SecondaryButton = ({ to, children, color }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(to);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className={`w-full sm:w-auto px-8 py-3 text-white rounded-lg hover:bg-opacity-75 transition duration-300 ${color}`}
      >
        <div className="flex items-center justify-center">
          <span className="text-sm font-bold">{children}</span>
        </div>
      </button>
    </div>
  );
};

export default SecondaryButton;

