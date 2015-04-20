/**
 * 4. Transform
 *
 * Convert data from `process.stdin` to upper-case data on
 * `process.stdout` using the `through2` module.
 */

var through = require('through2');

function write (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

var stream = through(write);

process.stdin.pipe(stream).pipe(process.stdout);