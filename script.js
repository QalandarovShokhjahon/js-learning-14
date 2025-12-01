'use strict';
//  Spread Operatori (...) → array yoki obyekt ichidagi elementlarni alohida qiymatlar sifatida nusxalaydi.

//  Arraylarda Spread Operatori
// let mashinalar = ["BMW", "Mers", "Bugati"]
// let nusxa = [...mashinalar]
// nusxa[1] = "Audi"

// console.log(mashinalar)
// console.log(nusxa)

// let meva = ['olma', 'gilos', 'nok'];
// let copy = [...meva];
// copy[1] = 'banan';
// console.log(meva);
// console.log(copy);

//  Nusxalangan arrayga yangi qiymat qo’shish
// let ism = ['John', 'Joe', 'Stive']
// let nusxa = [...ism];
// nusxa.push('Doe');
// console.log(ism);
// console.log(nusxa);

//  Ikkita arrayni birlashtirish
// let son1 = [1, 2, 3]
// let son2 = [4, 5, 6]
// let nusxa = [...son1, ...son2]

// console.log(nusxa);


// Vazifa
// 1.
// let fruits1 = ["apple", "banana", "cherry"];
// let fruits2 = ["date", "elderberry", "fig"];
// let combinedFruits = [...fruits1, ...fruits2];
// console.log(combinedFruits);

// 2.
// let fruits1 = ["apple", "banana", "cherry"];
// let fruits2 = ["date", "elderberry", "fig"];
// let combinedFruits = [...fruits1, ...fruits2];
// combinedFruits.push('grape');
// console.log(combinedFruits);

// 3.
// let fruits1 = ["apple", "banana", "cherry"];
// let fruits2 = ["date", "elderberry", "fig"];
// let combinedFruits = [...fruits1, ...fruits2];
// combinedFruits.push('grape');
// combinedFruits.pop(6)
// console.log(combinedFruits);

// 4.
let fruits1 = ["apple", "banana", "cherry"];
let fruits2 = ["date", "elderberry", "fig"];
let combinedFruits = [...fruits1, ...fruits2];
let capitalizedFruits = combinedFruits.map((fruit) => fruit.toUpperCase())
console.log(capitalizedFruits);


// Obyektlarda Spread Operatori
let shaxs = {
    ism: 'Shokhjahon',
    familiya: 'Qalandarov',
}
let nusxa = {
    ...shaxs,
    kasb: 'dasturchi',
}
console.log(shaxs);
console.log(nusxa);


// Spread operatori yordamida obyektlarni birlashtirish ham mumkin.
// let ismObj = {
//   ism: "Joe",
// }
// let yoshObj = {
//   yosh: 23,
// }
// let nusxa = {
//   ...ismObj,
//   ...yoshObj,
// }

// console.log(nusxa)


// Vazifa
let carObj = {
  make: "Toyota",
  model: "Camry",
}

let ownerObj = {
  owner: "Alice",
  age: 30,
}

let combinedObj = {
    ...carObj,
    ...ownerObj
}
console.log(combinedObj);


// Spreed operatorini funksiyada ishlatish
let sonlar = [5, 2, 3]

let sum = (a, b, c) => {
  console.log(`Yig'indi: ${a + b + c}`)
}
sum(...sonlar)