import React from 'react';
import Dropdown from './Dropdown';
import { faPlus, faTasks, faUpload } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ addModule }) => {
  const options = [
    { value: 'create', label: 'Create a Module', icon: faPlus },
    { value: 'add', label: 'Add a Task', icon: faTasks },
    { value: 'upload', label: 'Upload', icon: faUpload }
  ];

  const handleDropdownSelect = (value) => {
    if (value === 'create') {
      const moduleName = prompt("Enter the name of the module:");
      if (moduleName) {
        addModule(moduleName);
      }
    }
    // Handle other dropdown options here if needed
  };

  return (
    <div className='flex m-20 justify-around'>
      <div className='text-black text-xl font-semibold'>
        Course Builder
      </div>
      <div>
        <Dropdown options={options} onSelect={handleDropdownSelect} />
      </div>
    </div>
  );
};

export default Navbar;
