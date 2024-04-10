import React from 'react';
import { Link } from 'react-router-dom';
import { navigateToLastLocation } from './NavigationService';

interface BackButtonProps {
  mouseLeave: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onMouseEnter: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const BackButton: React.FC<BackButtonProps> = ({ mouseLeave, onMouseEnter }) => {
  const handleGoBack = () => {
    navigateToLastLocation();
  };

  return (
    <button className="font-light whitespace-nowrap dark:text-grey" onClick={handleGoBack}>
      <div className="flex flex-row">
        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="39" height="24" viewBox="0 0 39 24" fill="none">
          <path d="M6 12H38" stroke="#3D4043" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12 3L6 12L12 21"
            stroke="#3D4043"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="ml-5 font-extralight">Tilbake</p>
      </div>
    </button>
  );
};

export default BackButton;
