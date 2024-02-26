const { Buffer } = require('buffer');

// 0000 0000    0000 0000
//     0            1

// 0000 0000    0000 0000
//     2            3

// The minimum value an element can contain is 0 and maximum is 255(FF)

const memoryContainer = Buffer.alloc(4);

// How to read and write a negative number in buffer?
memoryContainer.writeInt8(-34, 3);
console.log(memoryContainer.readInt8(3));

memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x34;
memoryContainer[2] = 0xb6;
memoryContainer[3] = 0xff;

console.log('Shows in hexadecimal', memoryContainer); // <Buffer 00 00 00 00> Hexadecimal
console.log('Shows in decimal, index 0', memoryContainer[0]);
console.log('Shows in decimal, index 1', memoryContainer[1]);
console.log('Shows in decimal, index 2', memoryContainer[2]);
console.log('Shows in decimal, index 3', memoryContainer[3]);

console.log(memoryContainer.toString('hex'));
