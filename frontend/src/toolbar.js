import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="mt-3 flex flex-wrap gap-4 justify-center">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </div>
    </div>
  );
};
