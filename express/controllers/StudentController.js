// Import data students dari folder data/students.js
console.log("Current directory:", __dirname);
const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // Tampilkan data students
    res.json({
      message: "Daftar semua students",
      data: students,
    });
  }

  store(req, res) {
    // Tambahkan data students
    const { id, nama } = req.body;
    if (!id || !nama) {
      return res.status(400).json({ message: "ID dan Nama harus diisi" });
    }
    const newStudent = { id, nama };
    students.push(newStudent);
    res.status(201).json({
      message: "Student berhasil ditambahkan",
      data: newStudent,
    });
  }

  update(req, res) {
    // Update data students
    const { id } = req.params;
    const { nama } = req.body;

    const student = students.find((student) => student.id === parseInt(id));
    if (!student) {
      return res.status(404).json({ message: "Student tidak ditemukan" });
    }

    student.nama = nama || student.nama;
    res.json({
      message: "Student berhasil diupdate",
      data: student,
    });
  }

  destroy(req, res) {
    // Hapus data students
    const { id } = req.params;

    const index = students.findIndex((student) => student.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: "Student tidak ditemukan" });
    }

    const deletedStudent = students.splice(index, 1);
    res.json({
      message: "Student berhasil dihapus",
      data: deletedStudent[0],
    });
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
