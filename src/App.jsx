import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ModuleManager from './components/ModuleManager';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const [modules, setModules] = useState([]);

  const addModule = (name) => {
    setModules([...modules, { name, files: [] }]);
  };

  const deleteModule = (index) => {
    setModules(modules.filter((_, i) => i !== index));
  };

  const renameModule = (index, newName) => {
    const updatedModules = [...modules];
    updatedModules[index].name = newName;
    setModules(updatedModules);
  };

  const addFileToModule = (index, file) => {
    const updatedModules = [...modules];
    updatedModules[index].files.push(file);
    setModules(updatedModules);
  };

  const deleteFileFromModule = (moduleIndex, fileIndex) => {
    const updatedModules = [...modules];
    updatedModules[moduleIndex].files = updatedModules[moduleIndex].files.filter((_, i) => i !== fileIndex);
    setModules(updatedModules);
  };

  const renameFileInModule = (moduleIndex, fileIndex, newFileName) => {
    const updatedModules = [...modules];
    updatedModules[moduleIndex].files[fileIndex] = { ...updatedModules[moduleIndex].files[fileIndex], name: newFileName };
    setModules(updatedModules);
  };

  const moveFile = (fromModuleIndex, toModuleIndex, fileIndex) => {
    const updatedModules = [...modules];
    const file = updatedModules[fromModuleIndex].files[fileIndex];
    updatedModules[fromModuleIndex].files.splice(fileIndex, 1);
    updatedModules[toModuleIndex].files.push(file);
    setModules(updatedModules);
  };

  const moveModule = (fromIndex, toIndex) => {
    const updatedModules = [...modules];
    const [movedModule] = updatedModules.splice(fromIndex, 1);
    updatedModules.splice(toIndex, 0, movedModule);
    setModules(updatedModules);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Navbar addModule={addModule} />
        <ModuleManager 
          modules={modules} 
          deleteModule={deleteModule}
          renameModule={renameModule}
          addFileToModule={addFileToModule}
          deleteFileFromModule={deleteFileFromModule}
          renameFileInModule={renameFileInModule}
          moveFile={moveFile}
          moveModule={moveModule}
        />
      </div>
    </DndProvider>
  );
};

export default App;
