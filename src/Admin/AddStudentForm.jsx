import React, { useState } from "react";

const AddStudentForm = ({ onAdd }) => {
  const [student, setStudent] = useState({ id: "", name: "", score: "", year: "fresh" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    const data = await res.json();
    onAdd(data);
    setStudent({ id: "", name: "", score: "", year: "fresh" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
      <input placeholder="Full Name" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} required/>
      <input placeholder="ID" value={student.id} onChange={(e) => setStudent({ ...student, id: e.target.value })} required/>
      <input type="number" placeholder="Score" value={student.score} onChange={(e) => setStudent({ ...student, score: e.target.value })} required/>
      <select value={student.year} onChange={(e) => setStudent({ ...student, year: e.target.value })}>
        <option value="fresh">Fresh</option>
        <option value="middle">Middle</option>
        <option value="graduate">Graduate</option>
      </select>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
