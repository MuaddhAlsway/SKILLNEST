const express = require('express');
const router = express.Router();
const { getStudents, addStudent } = require('../controllers/studentsController');

// GET all students
router.get('/', getStudents);

// POST new student
router.post('/', addStudent);

module.exports = router;
