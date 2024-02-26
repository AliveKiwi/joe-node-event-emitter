const { Buffer, constants } = require('buffer');

const buffer = Buffer.alloc(1e9); // 1,000,000,000

console.log(constants.MAX_LENGTH);
console.log(buffer.length); // 1,000,000,000
setInterval(() => {
  //   for (let i = 0; i < buffer.length; i++) {
  //     b[i] = 0x22;
  //   }

  buffer.fill(0x22);
}, 5000);
