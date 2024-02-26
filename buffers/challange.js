// 0100 1000 0110 1001 0010 0001
//24/8 = 3 byte

const { Buffer } = require('buffer');

const container = Buffer.alloc(3);

container[0] = 0x48;
container[1] = 0x69;
container[2] = 0x21;

console.log(container.toString('utf-8'));
