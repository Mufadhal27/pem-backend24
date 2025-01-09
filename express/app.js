const express = require('express')
const router = require("./routes/api");
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });

// app.get('/students', (req, res) => {
//   res.send('Menampilan semua students')
// });

// app.post('/students', (req, res) => {
//     res.send('Menambahkan data students')
// });

// app.put('/students/:id', (req, res) => {
//     const { id } = req.params;
//     res.send('Mengedit students ${id}');
// });

// app.delete('/students/:id', (req, res) => {
//     const { id } = req.params;
//     res.send('Menghapus students ${id}');
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})