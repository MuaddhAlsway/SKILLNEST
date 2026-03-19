import React, { useEffect, useState } from "react";

const StudentDashboard = ({ studentId }) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("http://localhost:5000/api/students");
      const data = await res.json();
      const s = data.find((x) => x.id === studentId);
      setStudent(s);
    };
    load();
  }, [studentId]);

  if (!student) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome {student.name}</h2>
      <p>Progress: {student.progress}%</p>
      <p>Status: {student.isBlocked ? "Blocked" : "Active"}</p>
    </div>
  );
};

export default StudentDashboard;
