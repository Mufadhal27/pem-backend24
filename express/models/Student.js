const db = require("../config/database");
class Student {

// kode lain sebelumnya
static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(query, (err, results) => {
        // Jika berhasil, jalankan method resolve dan kirim results
        resolve(results);
      });
    });
  }
  
static async create(data) {
    // melakukan insert data ke database
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });
  
    // melakukan query berdasarkan id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

static find(id) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM students WHERE id = ?";
        db.query(sql, id, (err, results) => {
            // destructing array
            const [student] = results;
            resolve(student);
        });
    });
}

// mengupdate data student
static async update(id, data) {
    await new Promise((resolve, reject) => {
        const sql = "UPDATE students SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, results) => {
            resolve(results);
        });
    });

    // mencari data yang baru diupdate
    const student = await this.find(id);
    return student;
}


// menghapus data dari database
static delete(id) {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM students WHERE id = ?";
        db.query(sql, id, (err, results) => {
            resolve(results);
        });
    });
}

  
}

module.exports = Student;
  