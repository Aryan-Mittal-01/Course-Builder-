import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableModule = ({ module, moduleIndex, moveModule, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'module',
    item: { moduleIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'module',
    hover: (draggedItem) => {
      if (draggedItem.moduleIndex !== moduleIndex) {
        moveModule(draggedItem.moduleIndex, moduleIndex);
        draggedItem.moduleIndex = moduleIndex;
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`bg-white p-4 rounded-lg shadow-md mb-5 ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      {children}
    </div>
  );
};

export default DraggableModule;
