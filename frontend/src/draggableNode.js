import React from 'react';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify({ nodeType })
    );
    event.dataTransfer.effectAllowed = 'move';
    event.target.style.cursor = 'grabbing';
  };

  const onDragEnd = (event) => {
    event.target.style.cursor = 'grab';
  };

  return (
    <div
      className="cursor-grab select-none min-w-[100px] min-h-[60px] flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-700 text-white font-bold text-center p-3"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
      aria-label={`Draggable node: ${label}`}
    >
      <span>{label}</span>
    </div>
  );
};
