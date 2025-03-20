import React, { useState, useEffect } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [editProject, setEditProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        budget: 0,
        deadline: '',
        skillsRequired: [],
        status: 'open'
    });

    const API_URL = "http://localhost:5000/project/find";

    const fetchData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setNewProject({
            ...newProject,
            [e.target.name]: e.target.value
        });
    };
    

    const handleEditInputChange = (e) => {
        setEditProject({
            ...editProject,
            [e.target.name]: e.target.value
        });
    };

    const addProject = async () => {
        try {
            const response = await fetch("http://localhost:5000/project/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProject),
            });
            if (response.ok) {
                fetchData();
                setNewProject({
                    title: '',
                    description: '',
                    budget: 0,
                    deadline: '',
                    skillsRequired: [],
                    status: 'open'
                });
                setShowModal(false);
            }
        } catch (error) {
            console.error("Error adding project:", error);
        }
    };

    const updateProject = async () => {
        try {
            const response = await fetch(`http://localhost:5000/project/update/${editProject._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editProject),
            });
            if (response.ok) {
                fetchData();
                setEditProject(null);
            }
        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    const deleteProject = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/project/delete/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
                fetchData();
            }
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    return (
        <div className="container">

            <button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>
                Add Project
            </button>

            {showModal && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Project</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            value={newProject.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            name="description"
                                            value={newProject.description}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Budget</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="budget"
                                            value={newProject.budget}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Deadline</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="deadline"
                                            value={newProject.deadline}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Skills Required</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="skillsRequired"
                                            value={newProject.skillsRequired}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Status</label>
                                        <select
                                            className="form-select"
                                            name="status"
                                            value={newProject.status}
                                            onChange={handleInputChange}
                                        >
                                            <option value="open">Open</option>
                                            <option value="inprogress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                                <button className="btn btn-primary" onClick={addProject}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {editProject && (
                <div className="border mt-4 p-3">
                    <h1 className="text-center">Edit Project</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={editProject.title}
                                onChange={handleEditInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                name="description"
                                value={editProject.description}
                                onChange={handleEditInputChange}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Budget</label>
                            <input
                                type="number"
                                className="form-control"
                                name="budget"
                                value={editProject.budget}
                                onChange={handleEditInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Deadline</label>
                            <input
                                type="date"
                                className="form-control"
                                name="deadline"
                                value={editProject.deadline}
                                onChange={handleEditInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Skills Required</label>
                            <input
                                type="text"
                                className="form-control"
                                name="skillsRequired"
                                value={editProject.skillsRequired}
                                onChange={handleEditInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select
                                className="form-select"
                                name="status"
                                value={editProject.status}
                                onChange={handleEditInputChange}
                            >
                                <option value="open">Open</option>
                                <option value="inprogress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={updateProject}>Update Project</button>
                    </form>
                </div>
            )}

            <div className="row mt-4">
                {projects.map((project) => (
                    <div className="col-md-6 p-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text text-muted">
                                Budget: <strong>₹ {project.budget}</strong>
                            </p>
                            <p className="card-text">Description : {project.description}</p>
                            <p className="card-text">
                                Deadline: <strong>{new Date(project.deadline).toLocaleDateString()}</strong>
                            </p>
                            <p className="card-text">
                                Skills Required: <span className="text-info">{project.skillsRequired.join(", ")}</span>
                            </p>
                            <p className="card-text">
                                Status: <span className={`badge ${project.status === "Open" ? "bg-success" : "bg-secondary"}`}>
                                    {project.status}
                                </span>
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-warning btn-sm" onClick={() => setEditProject(project)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteProject(project._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;