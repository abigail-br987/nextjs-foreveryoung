interface StarIconProps {
    className?: string;
  }
  
export const StarIcon: React.FC<StarIconProps> = ({
    className = "text-deepOrange",
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={`w-12 h-12 stroke-current stroke-2 ${className}`}
      >
        <path
          d="M12 2.5l2.95 6.36 7.03.61-5.34 4.88L18.4 22 12 18.68 5.6 22l1.76-7.65-5.34-4.88 7.03-.61L12 2.5z"
          className="stroke-darkBlue stroke-1"
          fill="currentColor"
        />
      </svg>
    );
  };
  