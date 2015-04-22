/**
 * 5. Lines
 *
 * Instead of transforming every line as in the previous "TRANSFORM"
 * example, for this challenge, convert even-numbered lines to upper-case
 * and odd-numbered lines to lower-case. Consider the first line to be
 * odd-numbered.
 */

var through = require('through2');
var split = require('split');

var i = 0;
function write(buffer, encoding, next) {
  if (i++ % 2 != 0) 
    this.push(buffer.toString().toUpperCase());
  else
    this.push(buffer.toString().toLowerCase());
  this.push('\n');
  next();
}

var stream = through(write);

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout);