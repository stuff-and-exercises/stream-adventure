/**
 * You will get a file as the first argument to your program
 * (process.argv[2]).
 * 
 * Use `fs.createReadStream()` to pipe the given file to `process.stdout`.
 */
var fs = require('fs');

var file = process.argv[2];

fs.createReadStream(file).pipe(process.stdout);