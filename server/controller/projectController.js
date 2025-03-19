const Project = require('../models/project');

const addProject = async (req, res) => {
    try {
        let data = req.body;
        if (data.deadline) {
            data.deadline = new Date(data.deadline);
            if (isNaN(data.deadline)) {
                throw new Error("Invalid deadline format. Use YYYY-MM-DD");
            }
        }

        const project = new Project(data);
        const projectData = await project.save();
        res.status(201).json(projectData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const findProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const findProjectById = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id);
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        res.status(200).json(deletedProject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateProject = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addProject, findProjects, findProjectById, deleteProject, updateProject };