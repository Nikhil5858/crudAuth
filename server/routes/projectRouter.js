const { addProject, findProjects, findProjectById, deleteProject, updateProject } = require('../controller/projectController');
const express = require('express');
const router = express.Router();

router.post('/create', addProject);
router.get('/find', findProjects);
router.get('/find/:id', findProjectById);
router.delete('/delete/:id', deleteProject);
router.put('/update/:id', updateProject);

module.exports = router;