/**
 * 6. Concat
 *
 * You will be given text on process.stdin. Buffer the text and
 * reverse it using the `concat-stream` module before writing it to stdout.
 */

var concat = require('concat-stream');

process.stdin
  .pipe(concat(function (body) {
    console.log(body.toString().split('').reverse().join(''));
  }));