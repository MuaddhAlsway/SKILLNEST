import React, { useEffect, useState } from "react";

const HRPanel = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("http://localhost:5000/api/students");
      const data = await res.json();
      setStudents(data);
    };
    load();
  }, []);

  const handleCall = (student) => {
    // open Google Meet
    window.open("https://meet.google.com/new", "_blank");

    // Simulate sending email to parents
    alert(`Notification sent to parents of ${student.name}`);

    // Block student until call complete (mock)
    fetch(`http://localhost:5000/api/students/${student.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isBlocked: true }),
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>HR Panel</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {students.map((s) =>
          s.score < 60 ? (
            <div key={s.id} style={{ border: "1px solid red", padding: "10px", borderRadius: "10px" }}>
              <p>{s.name} - Score: {s.score}</p>
              <button onClick={() => handleCall(s)}>Call Student</button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default HRPanel;
