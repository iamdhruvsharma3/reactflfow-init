from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional

app = FastAPI()

origins = [
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],   
    allow_headers=["*"],   
)

class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict

class Edge(BaseModel):
    id: Optional[str] = None
    source: str
    target: str

class PipelinePayload(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(payload: PipelinePayload):
    num_nodes = len(payload.nodes)
    num_edges = len(payload.edges)

    is_dag = True

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }
