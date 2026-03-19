const express = require("express");
const cors = require("cors");

const studentsRoutes = require("./routes/studentsRoutes");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/students", studentsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
