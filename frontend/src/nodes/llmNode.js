import React from 'react';
import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const inputs = [`${id}-system`, `${id}-prompt`];
  const outputs = [`${id}-response`];

  return (
    <BaseNode
      id={id}
      label="LLM"
      inputs={inputs}
      outputs={outputs}
      className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 border-none shadow-lg text-white"
    >
      <div className="p-2 rounded-md bg-white bg-opacity-20 text-white font-medium text-sm">
        This is a LLM.
      </div>
    </BaseNode>
  );
};
