//A buffer is a space in memory (typically RAM) that stores binary data 

//using allo to allocate a single kb of zeros
const firstBuf = Buffer.alloc(1024);
console.log("Zero buff is :") 
console.log(firstBuf)


//using alloc to allocate a single kb of ones in binary
const filledBuf = Buffer.alloc(1024, 1);
console.log(`One buff is :`)
console.log(filledBuf)

//using alloc and the ASCII representaion (American Standard for Information Interchange)  buffer is initialized with five bytes of the character a, 
const asciiBuf = Buffer.alloc(5, 'a', 'ascii');
console.log(`ASCII Buff is :`)
console.log(asciiBuf)

const stringBuf = Buffer.from('My name is Paul');
console.log("StringBuff is :")
console.log(stringBuf[0])

const tenZeroes = Buffer.alloc(10);
tenZeroes.toString()
