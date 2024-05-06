// let a = [1, 3, 5, 7, 9, 0];

// let b = {
//   nameProduct: "prod 1",
//   price: 50,
//   instock: 9,
// };

// console.log(b.nameProduct);
// a.push(4);
// console.log(a);

// a.shift(0);
// console.log(a);

// a.pop();
// console.log(a);

// console.log(a.includes(4));

// a.splice(0, 3);
// console.log(a);

// Vòng lặp for (điều kiện 1: i, điều kiện 2: đk kết thúc vòng lặp, điều kiện 3: i++)
// Vòng lặp while ()

// let i = 0;

// while (i < 10) {
//   console.log("The number is: ", i);
//   i++;
// }

// // Vòng lặp Do While
// let j = 0;
// do {
//   console.log("The number is: ", j);
//   j++;
// } while (j < 10);

// const btnDarkMode = document.getElementById("btnDarkMode");
// const container = document.querySelector(".container");

// btnDarkMode.onclick = function () {
//   const h1 = document.createElement("h1");
//   h1.innerHTML = "Hello World";

//   container.appendChild(h1);
// };

let prods = [
  {
    name: "Prod 1",
    price: 24,
    des: "ABC",
  },
  {
    name: "Prod 2",
    price: 24,
    des: "DEFG",
  },
  {
    name: "Prod 3",
    price: 24,
    des: "FIJK",
  },
];

let prodElement = document.getElementById("prodElement");
console.log(prodElement);

for (let i = 0; i < prods.length; i++) {
  let prod = prods[i];
  let h1 = document.createElement("h1");
  h1.innerHTML = prod.name;

  let h2 = document.createElement("h2");
  h2.innerHTML = prod.price;

  let p = document.createElement("p");
  p.innerHTML = prod.des;

  prodElement.appendChild(h1);
  prodElement.appendChild(h2);
  prodElement.appendChild(p);
}
