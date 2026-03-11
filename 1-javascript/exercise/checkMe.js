
let language = {
    name: 'JavaScript',
    officialName: 'ECMAScript',
    released: 1995,
    creator: 'Brendan Eich',
    company: 'Netscape'
}

console.log(language); // { name: 'JavaScript', ... }
console.log(language.officialName); // ECMAScript
console.log(language.creator); // undefined


language ={

 // String replacing object? JS don't care!
// Setting random properties on a String? (non-strict) JS don't care!
name : 'TypeScript',
officialName : 'TypeScript',
released : 2012,
creator : 'Anders Hejlsberg',
company : 'Microsoft'}

console.log(language); // TypeScript
console.log(language.released); // undefined
console.log(language.company); // TypeError: console.log is not a function
console.log(language.officialName); // undefined


