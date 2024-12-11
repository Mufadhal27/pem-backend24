const { addFruit, updateFruit, deleteFruit } = require('./FruitController');
const { fruits } = require('./data');

console.log(`Daftar Buah: ${JSON.stringify(fruits)}`);
addFruit('Pisang');
updateFruit(0, 'Kelapa');
deleteFruit(0);
