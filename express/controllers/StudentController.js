// Import data students dari folder data/students.js
const Student = require("../models/Student");
console.log("Current directory:", __dirname);
const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
  // menambahkan keyword async memberitahu proses asynchronous
  async index(req, res) {
      // memanggil method static all dengan async await
      const students = await Student.all();

      const data = {
        message: "Menampilkan semua students",
        data: students,
      };

      res.json(data);
    } 
  

  async store(req, res) {
    // memanggil method create dari Model Student
    const student = await Student.create(req.body);

    const data = {
      message: "Menambahkan data student",
      data: student,
    };

    res.json(data);
  }

  // kode lain sebelumnya
async update(req, res) {
  const { id } = req.params;
  // cari id student yang ingin diupdate
  const student = await Student.find(id);

  if (student) {
    // melakukan update data
    const student = await Student.update(id, req.body);
    const data = {
      message: `Mengedit data students`,
      data: student,
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: `Student not found`,
    };
    res.status(404).json(data);
  }
}

async destroy(req, res) {
  const { id } = req.params;
  const student = await Student.find(id);

  if (student) {
      await Student.delete(id);
      const data = {
          message: `Menghapus data students`,
      };

      res.status(200).json(data);
  } else {
      const data = {
          message: `Student not found`,
      };

      res.status(404).json(data);
  }
}


}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
