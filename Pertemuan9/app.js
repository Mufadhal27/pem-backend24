const { addFruit, updateFruit, deleteFruit } = require('./fruits');
const { fruits } = require('./data');

console.log(`Daftar Buah: ${JSON.stringify(fruits)}`);
addFruit('plum');
updateFruit(1, 'pineapple');
deleteFruit(0);
