'use strict';
//  Spread Operatori (...) → array yoki obyekt ichidagi elementlarni alohida qiymatlar sifatida nusxalaydi.

//  Arraylarda Spread Operatori
let mashinalar = ["BMW", "Mers", "Bugati"]
let nusxa = [...mashinalar]
nusxa[1] = "Audi"

console.log(mashinalar)
console.log(nusxa)