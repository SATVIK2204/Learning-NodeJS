const url = require('url');

const myurl= new URL('https://www.youtube.com/watch?v=fBNz5xF-Kx4');

// Serialized URL
console.log(myurl.href)

// Host (root domain)
console.log(myurl.host)

// Hostname (doesn't get port)
console.log(myurl.hostname)

// Pathname
console.log(myurl.pathname)