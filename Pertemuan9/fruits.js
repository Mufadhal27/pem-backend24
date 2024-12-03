const { fruits } = require('./data');

const addFruit = (fruit) => {
    fruits.push(fruit);
    console.log(`Adding ${fruit} to the list...`);
    console.log(`Updated Fruits List: ${JSON.stringify(fruits)}`);
};

const updateFruit = (index, newFruit) => {
    if (index >= 0 && index < fruits.length) {
        console.log(`Replacing fruit at index ${index} with ${newFruit}...`);
        fruits[index] = newFruit;
        console.log(`Updated Fruits List: ${JSON.stringify(fruits)}`);
    } else {
        console.log(`Index ${index} is not valid.`);
    }
};

const deleteFruit = (index) => {
    if (index >= 0 && index < fruits.length) {
        console.log(`Removing fruit at index ${index}...`);
        fruits.splice(index, 1);
        console.log(`Updated Fruits List: ${JSON.stringify(fruits)}`);
    } else {
        console.log(`Index ${index} is not valid.`);
    }
};

module.exports = { addFruit, updateFruit, deleteFruit };
