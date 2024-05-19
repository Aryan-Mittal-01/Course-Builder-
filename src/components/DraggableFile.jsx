import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableFile = ({ file, moduleIndex, fileIndex, onRename, onDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'file',
    item: { moduleIndex, fileIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <li
      ref={drag}
      className={`flex justify-between items-center py-2 border-b last:border-none ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <span>{file.name}</span>
      <div className="flex items-center">
        <button
          className="text-blue-500 hover:underline mr-4"
          onClick={onRename}
        >
          Rename
        </button>
        <button
          className="text-red-500 hover:underline"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default DraggableFile;
