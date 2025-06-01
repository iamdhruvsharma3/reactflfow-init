import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Output"
      inputs={[`${id}-value`]}
      className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 border-none shadow-lg text-white"
    >
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold text-sm">
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="mt-1 block w-full rounded-md border border-purple-300 bg-white bg-opacity-20 px-2 py-1 text-sm text-white placeholder-white focus:border-purple-400 focus:ring focus:ring-purple-400 focus:outline-none"
            placeholder="Enter output name"
          />
        </label>
        <label className="text-white font-semibold text-sm">
          Type:
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="mt-1 block w-full rounded-md border border-purple-300 bg-white bg-opacity-20 px-2 py-1 text-sm text-white focus:border-purple-400 focus:ring focus:ring-purple-400 focus:outline-none"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
