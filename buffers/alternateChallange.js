const { Buffer } = require('buffer');

// Uncomment one from below

// const buff = Buffer.from([0x48, 0x69, 0x21]);
// const buff = Buffer.from('486921', 'hex');
// const buff = Buffer.from('string', 'utf-8');
// const buff = Buffer.from('Hi!', 'utf-8');
const buff = Buffer.from('E0A49B', 'hex');

console.log('ascii', buff.toString('ascii'));
console.log('base64', buff.toString('base64'));
console.log('base64url', buff.toString('base64url'));
console.log('binary', buff.toString('binary'));
console.log('hex', buff.toString('hex'));
// console.log('latin1', buff.toString('latin1'));
console.log('ucs-2', buff.toString('ucs-2'));
console.log('utf-16le', buff.toString('utf-16le'));
console.log('utf-8', buff.toString('utf-8'));
