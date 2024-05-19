import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'tailwind-styled-components';

const DropdownContainer = tw.div`
  relative
`;

const DropdownTrigger = tw.button`
  bg-blue-500 text-white px-4 py-2 rounded
`;

const DropdownContent = tw.div`
  absolute bg-white text-black py-2 mt-2 rounded shadow-lg w-48
`;

const DropdownItem = tw.div`
  px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer
`;

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownTrigger onClick={toggleDropdown}>
        Dropdown
      </DropdownTrigger>
      {isOpen && (
        <DropdownContent>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option.value)}>
              <FontAwesomeIcon icon={option.icon} className="mr-2" />
              {option.label}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
