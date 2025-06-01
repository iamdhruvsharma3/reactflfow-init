import React from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({
  id,
  label,
  children,
  outputs = [],
  inputs = [],
  style = {},
  className = '',
}) => {
  return (
    <div
      className={`rounded-md p-4 w-48 min-h-20 flex flex-col ${className}`}
      style={style}
    >
      <div className="mb-2 font-bold text-gray-800 text-center">{label}</div>
      <div className="flex-grow">{children}</div>

      {outputs.map((outputId) => (
        <Handle
          key={outputId}
          type="source"
          position={Position.Right}
          id={outputId}
          className="bg-blue-600"
          style={{ width: 12, height: 12, borderRadius: '50%' }}
        />
      ))}

      {inputs.map((inputId) => (
        <Handle
          key={inputId}
          type="target"
          position={Position.Left}
          id={inputId}
          className="bg-green-600"
          style={{ width: 12, height: 12, borderRadius: '50%' }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
