
import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

const App = () => {
  return (
    <div className="flex flex-col gap-2 p-4 min-h-screen bg-gray-50">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
};

export default App;
