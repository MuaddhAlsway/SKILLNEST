const { getAllStudents, createStudent } = require('../services/studentsService');

// GET /api/students
const getStudents = (req, res, next) => {
  try {
    const students = getAllStudents();
    res.json(students);
  } catch (err) {
    next(err);
  }
};

// POST /api/students
const addStudent = (req, res, next) => {
  try {
    const { name, score, year } = req.body;
    if (!name || !score) {
      throw new Error('Name and score are required');
    }
    const newStudent = createStudent({ name, score, year });
    res.status(201).json(newStudent);
  } catch (err) {
    next(err);
  }
};

module.exports = { getStudents, addStudent };
