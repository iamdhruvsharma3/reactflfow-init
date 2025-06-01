import React from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      alert(
        `Pipeline Stats:
Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? 'Yes' : 'No'}`
      );
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to submit pipeline. Please check the console for details.');
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </div>
  );
};
