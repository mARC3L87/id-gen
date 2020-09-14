const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['John', 'Bob', 'Michael', 'Steven', 'Richard', 'Travis'];
const femaleNames = ['Jenny', 'Barbra', 'Lucy', 'Mery', 'Rita', 'Monica'];
const lastNames = ['Smith', 'Peterson', 'Williams', 'Rosenberg'];

const randChoice = function(arr) {
    const newArray = arr[Math.floor(Math.random() * arr.length)];
    return newArray;
}

const people = [];

for(let i = 0; i < 21; i++) {
  const newPerson = {};

  const gender = randChoice(genders);

  const randName = function() {
  if(gender === 'male') {
      return randChoice(maleNames);
  } else {
      return randChoice(femaleNames);
  }
  };
  
  newPerson.gender = gender;
  newPerson.firstName = randName();
  newPerson.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  newPerson.age = Math.floor(Math.random() * 60 + 18);
  people.push(newPerson);
}

const jsonString = JSON.stringify(people);

fs.writeFile('people.json', jsonString, (err) => {
  if(err) throw err;
  console.log('Something went wrong');      
});
