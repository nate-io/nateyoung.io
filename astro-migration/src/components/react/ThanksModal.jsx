import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const thanks = [
  {
    link:
      "https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    label: "Paweł Czerwiński",
  },
  {
    link:
      "https://unsplash.com/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    label: "Unsplash",
  },
];

const ThanksLink = ({ link, label }) => (
  <a href={link} target='_blank' rel='noopener noreferrer' className="text-highlight-blue hover:underline">
    {label}
  </a>
);

function ThanksModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    
    document.addEventListener('openThanksModal', handleOpen);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('openThanksModal', handleOpen);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);
  
  const handleClose = () => setIsModalOpen(false);
  
  if (!isModalOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-dark-gray rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center border-b border-medium-gray p-4">
          <h3 className="text-xl font-bold">Thanks!</h3>
          <button 
            onClick={handleClose}
            className="text-light-gray hover:text-white"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <p className="mb-4">
            A special thanks to the following people for the resources they
            created:
          </p>

          <ul className="list-disc pl-5">
            <li className="mb-2">
              Background image provided by <ThanksLink {...thanks[0]} /> via{" "}
              <ThanksLink {...thanks[1]} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// No props needed as modal manages its own state

export default ThanksModal;
