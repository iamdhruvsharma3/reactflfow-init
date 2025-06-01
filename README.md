
Reactflow Pipeline Builder
A full-stack visual pipeline builder app to create, style, and validate workflows with dynamic nodes — powered by React, reactflow on the frontend and FastAPI on the backend.

Overview
This project lets users build pipelines by dragging and connecting nodes on a canvas. It features:

Node Abstraction: A reusable BaseNode to efficiently create varied node types.

Dynamic Text Nodes: Auto-resizing inputs with dynamic variable handles.

Unified Styling: Clean, modern UI with Tailwind CSS and React Flow.

Backend Validation: A FastAPI server that checks pipeline integrity and responds with stats.

Users can build pipelines, submit them, and instantly see validation results.

Getting Started
Requirements
Node.js (v16+)

Python 3.8+

uvicorn for backend server

Installation & Run
Install frontend dependencies and start frontend server:

cd frontend
npm install
npm start
Install backend dependencies and start backend server:

cd backend
pip install -r requirements.txt
uvicorn main:app --reload
How It Works
Frontend
Drag nodes (Input, LLM, Text, Output) from the toolbar onto the canvas.

Connect nodes by dragging edges between their input/output handles.

Text nodes dynamically resize and create input handles for variables defined as {{variable}}.

Submit button sends the pipeline (nodes + edges) to the backend for validation.

Backend
Receives pipeline data via /pipelines/parse endpoint.

Calculates total nodes, edges, and checks if the pipeline forms a Directed Acyclic Graph (DAG).

Returns validation info to frontend.

User Flow
Open the app in your browser (default: localhost:3000).

Drag and drop nodes to build your pipeline.

Connect the nodes in valid sequences (e.g., Input → Text → LLM → Output).

Add variables inside text nodes using {{variable}} syntax; input handles appear automatically.

Click Submit to send the pipeline to backend.

Receive an alert showing node count, edge count, and DAG validity.

Project Structure


/frontend
  ├── src/
  │   ├── nodes/         # Specialized node components (InputNode, TextNode, etc.)
  |   ├── draggableNode.js
  |   ├── submit.js
  |   ├── toolbar.js
  |   ├── ui.js
  │   ├── store.js         # Zustand state management for nodes and edges
  │   └── App.js         # Main pipeline UI component using React Flow

/backend
  ├── main.py            # FastAPI backend with DAG validation endpoint
  
Tech Stack
Frontend: React, React Flow, Zustand, Tailwind CSS

Backend: Python, FastAPI
