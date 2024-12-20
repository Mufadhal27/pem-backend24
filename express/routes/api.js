const StudentController = require("../controllers/StudentController");
const express = require("express");
const router = express.Router();

// Endpoint root untuk tes API
router.get("/", (req, res) => {
    res.send("API is running...");
});

// Endpoint untuk resource students
router.get("/students", StudentController.index); // GET: Tampilkan semua students
router.post("/students", StudentController.store); // POST: Tambahkan student baru
router.put("/students/:id", StudentController.update); // PUT: Update student berdasarkan ID
router.delete("/students/:id", StudentController.destroy); // DELETE: Hapus student berdasarkan ID

module.exports = router;
