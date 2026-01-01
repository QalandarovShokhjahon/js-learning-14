# 🧠 JavaScript Day 14 — Spread Operator (...)

Bu darsda men JavaScript’da **Spread operator (...)** bilan ishlashni o‘rgandim.
Amaliy misollar orqali array va object’larni kengaytirish, nusxalash va birlashtirishni mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

### Spread operator (...) nima?

Spread operator — array yoki object ichidagi elementlarni **yoyib chiqarish** uchun ishlatiladi.
U yangi array yoki object yaratishda juda qulay.

---

### Array bilan ishlash

Array’ni nusxalash:

```
const numbers = [1, 2, 3];
const copy = [...numbers];
console.log(copy); // [1, 2, 3]
```

Array’larni birlashtirish:

```
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]
```

---

### Object bilan ishlash

Object’ni nusxalash:

```
const user = { name: 'Ali', age: 18 };
const newUser = { ...user };
```

Object’larni birlashtirish:

```
const user = { name: 'Ali' };
const info = { age: 18, country: 'UZ' };

const fullUser = { ...user, ...info };
console.log(fullUser);
```

---

## 💻 Kod namunasi / Example code

```
const prices = [100, 200, 300];
const newPrices = [...prices, 400];

const product = {
  name: 'Phone',
  price: 500
};

const updatedProduct = {
  ...product,
  price: 600
};

console.log(newPrices);
console.log(updatedProduct);
```

---

## 🧩 Qisqacha nazariya / Short Theory

* `...array` → array elementlarini yoyadi
* `...object` → object property’larini yoyadi
* Spread operator **original ma’lumotni o‘zgartirmaydi**
* Yangi array yoki object yaratishda ishlatiladi

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’da **Spread operator** yordamida ma’lumotlarni qulay va xavfsiz boshqarishni o‘rganish.

Buning yordamida:

* Array va object’larni nusxalash
* Ma’lumotlarni birlashtirish
* Eski qiymatlarni buzmasdan yangilash
  mumkin bo‘ladi.

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 14-kun — Spread Operator (...)
