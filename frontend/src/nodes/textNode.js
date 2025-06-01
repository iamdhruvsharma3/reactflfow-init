import React, { useState, useEffect } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [inputHandles, setInputHandles] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const regex = /{{\s*([\w$]+)\s*}}/g;
    const variables = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      variables.push(`${id}-${match[1]}`);
    }
    setInputHandles(variables);
  }, [currText, id]);

  const outputs = [`${id}-output`];

  return (
    <BaseNode
      id={id}
      label="Text"
      inputs={inputHandles}
      outputs={outputs}
      className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 border-none shadow-lg text-white"
    >
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold text-sm">
          Text:
          <textarea
            value={currText}
            onChange={handleTextChange}
            className="mt-1 block w-full min-h-[60px] resize-y rounded-md border border-green-300 bg-white bg-opacity-20 p-2 text-white text-sm placeholder-white focus:border-green-400 focus:ring focus:ring-green-400 focus:outline-none"
            placeholder="Enter your text with {{variables}}"
          />
        </label>
      </div>
    </BaseNode>
  );
};
