const { fruits } = require('./data');

const addFruit = (fruit) => {
    fruits.push(fruit);
    console.log(`Menambahkan ${fruit} ke daftar...`);
    console.log(`Daftar Buah Terkini: ${JSON.stringify(fruits)}`);
};

const updateFruit = (index, newFruit) => {
    if (index >= 0 && index < fruits.length) {
        console.log(`Mengganti buah pada indeks ${index} dengan ${newFruit}...`);
        fruits[index] = newFruit;
        console.log(`Daftar Buah Terkini: ${JSON.stringify(fruits)}`);
    } else {
        console.log(`Indeks ${index} tidak valid.`);
    }
};

const deleteFruit = (index) => {
    if (index >= 0 && index < fruits.length) {
        console.log(`Menghapus buah pada indeks ${index}...`);
        fruits.splice(index, 1);
        console.log(`Daftar Buah Terkini: ${JSON.stringify(fruits)}`);
    } else {
        console.log(`Indeks ${index} tidak valid.`);
    }
};

module.exports = { addFruit, updateFruit, deleteFruit };
