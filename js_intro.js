const {sayHello,calculateVat} = require('./utils')

sayHello();
const vat7 = calculateVat(100,7);
console.log(vat7);

console.log(__filename, __dirname);

// Path
const path = require('path')

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.join(__dirname, 'utils.js'));

//file system
const fs = require('fs');
//fs.writeFileSync(path.join(__dirname,'data.txt'),'Hello');
//fs.writeFile(path.join(__dirname,'data.txt'),'Hello', () => {
//    console.log('Finished writing file');
// }); 

console.log(fs.readFileSync(path.join(__dirname,'data.txt'),'utf8'));

//os
const os = require('os');

console.log(os.cpus());
console.log(os.homedir());
console.log(os.uptime());

//Events
const events = require('events');
const EventEmitter = events.EventEmitter;
const connect = new EventEmitter();

connect.on('online',() => {
    console.log('A new user has connected');
});

connect.emit('online');
connect.emit('online');
connect.emit('online');
connect.emit('online');
