var http = require('http');
var json = require('json');
require('./db/database');
var SpiritAnimal = require('./models/SpiritAnimal');

// .create ({data object}, function(error, model))
SpiritAnimal.create({ Name: "Aaron", SpiritAnimal: "Red Panda", DoTheyLikeIt: true }, function(error, animal) {
  if (error) console.log(error);
  console.log(animal);
});

http.createServer(function(req, res) {
  SpiritAnimal.find(function(error, animals) {
    if (error) console.log(error);
    res.writeHead(200); // set status to 200
    console.log(animals);
    res.write(JSON.stringify(animals));
    res.end();
  });
}).listen(8080);

console.log('api server is running :)');
