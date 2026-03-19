import React from "react";

const CardStudent = ({ student }) => {
  return (
    <div className="student-card">
      <h4>{student.name}</h4>
      <p>ID: {student.id}</p>
      <p>Score: {student.score}</p>
      <p>Year: {student.year}</p>
      <p>Progress: {student.progress}%</p>
    </div>
  );
};

export default CardStudent;