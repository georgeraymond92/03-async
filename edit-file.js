'use strict';
const fs = require('fs');
const faker =require('faker');

let file = './files/' + process.argv[2];

const randomNumber = faker.random.number();


fs.readFile(file,(err,data) => {
  if(err) throw err;
  console.log(data.toString());
  fs.appendFile(file, randomNumber, (err) =>{
    if (err) throw err;
    fs.readFile(file,(err,data) => {
      if(err) throw err;
      console.log(data.toString());
    });
  });
});
