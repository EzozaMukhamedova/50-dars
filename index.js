// masala1
// const talaba = new Map([
//   ["Ali", 85],
//   ["Laylo", 92],
//   ["Akmal", 78],
// ]);

// talaba.set("Laylo", 95);

// console.log(talaba);

// talaba.forEach((key, value) => {
//   console.log(value, "-", key);
// });

// ikkinchi usuli
// const map = new Map();

// map.set("Ali", "85");
// map.set("Laylo", "92");
// map.set("Akmal", "78");

// map.set("Laylo", "95");

// for (let [kalit, qiymat] of map) {
//   console.log(kalit, "-", qiymat);
// }

// masala2
// const raqam = new Set([]);
// raqam.add(1);
// raqam.add(2);
// raqam.add(3);
// raqam.add(4);
// raqam.add(5);
// console.log("Raqamlar qo'shildi: ", raqam);

// raqam.delete(3);
// raqam.delete(5);

// console.log("Bazi sonlar olib tashlandi: ", raqam);
// console.log("Hozirgi raqamlar soni: ", raqam.size);

// for (let value of raqam) {
//   console.log("Barcha raqamlar: ", value);
// }

// masala3
// let infoel = document.getElementById("info");
// console.log(infoel.textContent);

// infoel.innerHTML = "Yangilangan matn";
// infoel.style.color = "red";
// console.log(infoel);

// masala4
// let randomNumberElement = document.getElementById("randomNumber");

// setInterval(() => {
//   randomNumberElement.textContent = parseInt(Math.random() * 255);
// }, 3000);

// masala5
// hideMeElement = document.getElementById("hideMe");
// setTimeout(() => {
//   hideMeElement.style.display = "none";
// }, 5000);
// console.log(hideMeElement);

// masala6
// let wordElement = document.getElementById("word");
// let words = ["Salom", "Dunyo", "Javascript"];

// setInterval(() => {
//   let random = Math.floor(Math.random() * words.length);
//   wordElement.textContent = words[random];
// }, 2000);
// console.log(words);

// tasodifiy sozlar

// let words = ["Salom", "Dunyo", "Javascript"];
// let wordElement = document.getElementById("word");
// console.log(wordElement);

// setInterval(() => {
//   wordElement.innerHTML = words[Math.floor(Math.random() * 3)];
//   console.log(wordElement);
// }, 2000);

// masala7
// let blinkTextElement = document.getElementById("blinkText");

// setInterval(() => {
//   if (blinkTextElement.style.visibility == "hidden") {
//     blinkTextElement.style.visibility = "visible";
//   } else {
//     blinkTextElement.style.visibility = "hidden";
//   }
// }, 1000);
// console.log(blinkTextElement);

// yoki ikkinchi usul

// let blinkTextElement = document.getElementById("blinkText");

// setInterval(() => {
//   if (blinkTextElement.style.opacity == 0) {
//     blinkTextElement.style.opacity = 1;
//   } else {
//     blinkTextElement.style.opacity = 0;
//   }
// }, 1000);

