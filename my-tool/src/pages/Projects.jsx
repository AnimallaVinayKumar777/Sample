import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./project.css";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "",
    status: "Active",
    completionDate: "",
  });
  const [editProject, setEditProject] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container mt-4" style={{ backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
      <h1 className="text-center text-primary mb-4">Projects</h1>
      <button className="btn btn-info mb-3" onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="card p-3 mb-4 shadow" style={{ backgroundColor: "#ffffff" }}>
        <h5 className="text-primary">{editProject ? "Edit Project" : "Add New Project"}</h5>
        <input
          type="text"
          className="form-control mb-2"
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          className="form-control mb-2"
          name="description"
          placeholder="Description"
        />
        <input
          type="text"
          className="form-control mb-2"
          name="category"
          placeholder="Category"
        />
        <select
          name="status"
          className="form-control mb-2"
          value={newProject.status}
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
        {newProject.status === "Completed" && (
          <input
            type="date"
            className="form-control mb-2"
            name="completionDate"
            placeholder="Completion Date"
          />
        )}
        <button className="btn btn-warning w-100">Add Project</button>
      </div>
    </div>
  );
};

export default Projects;
