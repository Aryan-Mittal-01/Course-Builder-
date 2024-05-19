import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import DraggableFile from './DraggableFile';
import ModuleDropZone from './ModuleDropZone';
import DraggableModule from './DraggableModule';

const ModuleManager = ({ modules, deleteModule, renameModule, addFileToModule, deleteFileFromModule, renameFileInModule, moveFile, moveModule }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleFileUpload = (e, moduleIndex) => {
    const file = e.target.files[0];
    if (file) {
      addFileToModule(moduleIndex, { name: file.name, file });
    }
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Modules</h2>
      {modules.map((module, moduleIndex) => (
        <DraggableModule key={moduleIndex} module={module} moduleIndex={moduleIndex} moveModule={moveModule}>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{module.name}</h3>
            <div className="relative">
              <button onClick={() => toggleDropdown(moduleIndex)}>
                <FontAwesomeIcon icon={faEllipsisV} className="text-gray-600" />
              </button>
              {dropdownOpen === moduleIndex && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => {
                      const newName = prompt("Enter new module name:", module.name);
                      if (newName) renameModule(moduleIndex, newName);
                      setDropdownOpen(null);
                    }}
                  >
                    Rename Module
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => {
                      deleteModule(moduleIndex);
                      setDropdownOpen(null);
                    }}
                  >
                    Delete Module
                  </button>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload(e, moduleIndex)}
                    className="hidden"
                    id={`file-upload-${moduleIndex}`}
                  />
                  <label
                    htmlFor={`file-upload-${moduleIndex}`}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    Upload File
                  </label>
                </div>
              )}
            </div>
          </div>
          <ModuleDropZone moduleIndex={moduleIndex} onDropFile={moveFile} />
          <ul className="mt-4">
            {module.files.map((file, fileIndex) => (
              <DraggableFile 
                key={fileIndex} 
                file={file} 
                moduleIndex={moduleIndex} 
                fileIndex={fileIndex} 
                onRename={() => {
                  const newFileName = prompt("Enter new file name:", file.name);
                  if (newFileName) renameFileInModule(moduleIndex, fileIndex, newFileName);
                }}
                onDelete={() => deleteFileFromModule(moduleIndex, fileIndex)}
              />
            ))}
          </ul>
        </DraggableModule>
      ))}
    </div>
  );
};

export default ModuleManager;
