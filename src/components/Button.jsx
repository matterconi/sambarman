import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ onClick, children, color, icon, colorIcon }) => {
  return (
    <div className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <button
        onClick={onClick}
        className={`w-full min-w-64 sm:w-auto py-3 px-6 sm:px-8 md:px-10 lg:px-12 ${color} text-white rounded-lg hover:bg-opacity-75 transition duration-300`}
      >
        <div className="flex items-center justify-center space-x-2">
          <span className='font-semibold'>{children}</span>
          <FontAwesomeIcon icon={icon} className={colorIcon} />
        </div>
      </button>
    </div>
  );
};

export default Button;
