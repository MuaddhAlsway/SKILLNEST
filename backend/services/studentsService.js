let students = []; // in-memory storage

const getAllStudents = () => {
  return students;
};

const createStudent = ({ name, score, year }) => {
  const newStudent = {
    id: Date.now().toString(),
    name,
    score,
    year: year || 'fresh',
    progress: 0,
    isBlocked: false,
  };
  students.push(newStudent);
  return newStudent;
};

module.exports = { getAllStudents, createStudent };
