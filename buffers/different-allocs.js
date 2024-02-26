const { Buffer } = require('buffer');

const buffer = Buffer.alloc(10000, 0); // Allocate the buffer and set all elements to zero

const unsafeBuffer = Buffer.allocUnsafe(10000); // Won't zero-out, it is faster than above can have password, api key or whatever, a hacker can allocate something big here and then see the content.
const unsafeBufferSlow = Buffer.allocUnsafeSlow(2); // Won't use pre-alocated buffer of size 8KiB by Node.js, only take size as input.

console.log(Buffer.poolSize); // 8192

// for (let i = 0; i < unsafeBuffer.length; i++) {
//   if (unsafeBuffer[i] !== 0) {
//     console.log(
//       `Element at position ${i} has value: ${unsafeBuffer[i].toString('utf-8')}`
//     );
//   }
// }
console.log(buffer.toString('hex'));
console.log(unsafeBuffer.toString('hex'));
console.log(unsafeBufferSlow.toString('hex'));
