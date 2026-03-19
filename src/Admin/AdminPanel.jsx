import React, { useState, useEffect } from "react";
import AddStudentForm from "./AddStudentForm";
import CardStudent from "../components/CardStudent.jsx";

const AdminPanel = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Load students from backend
  useEffect(() => {
    const loadStudents = async () => {
      const res = await fetch("http://localhost:5000/api/students");
      const data = await res.json();
      setStudents(data);
    };
    loadStudents();
  }, []);

  // Add new student
  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add Student"}
      </button>

      {showForm && <AddStudentForm onAdd={handleAddStudent} />}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {students.map((s) => (
          <CardStudent key={s.id} student={s} />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;