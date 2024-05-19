import React from 'react';
import { useDrop } from 'react-dnd';

const ModuleDropZone = ({ moduleIndex, onDropFile }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'file',
    drop: (item) => {
      if (item.moduleIndex !== moduleIndex) {
        onDropFile(item.moduleIndex, moduleIndex, item.fileIndex);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 rounded-lg ${isOver ? 'bg-blue-100' : 'bg-white'}`}
    >
      {isOver ? 'Release to drop' : 'Drop files here'}
    </div>
  );
};

export default ModuleDropZone;
