import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      label="Input"
      outputs={[`${id}-value`]}
      className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 border-none shadow-lg text-white"
    >
      <div className="flex flex-col gap-4">
        <label className="block">
          <span className="font-semibold mb-1 block">Name</span>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            placeholder="Enter input name"
            className="w-full rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </label>

        <label className="block">
          <span className="font-semibold mb-1 block">Type</span>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            className="w-full rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
