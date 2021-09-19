// function accum(s) {
// 	// your code
//   const newStringArray = [];
//   const stringArray = s.split("");
//   for (let i = 0; i < s.length; i += 1){
//       for (let j = 0; j < i + 1; j += 1){
//           console.log(i, "- i; j-", j);
//      if (j === 0){
//         newStringArray.push(stringArray[i].toUpperCase());
//       } else {
//         newStringArray[i] += stringArray[i].toLowerCase();
//       }
//     }
//   }
//     return newStringArray.join("-");
// }
// console.log("Before function is called");
// alert("A");
// console.log(accum("abcd"));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propValues = [];
//   const product = products[0];
//   console.log(product);
//   console.log(product[propName]);
    
  
//   return propValues;
//   // Change code above this line
//   }

// console.log(getAllPropValues("price"));

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onError) {
        if (this.pizzas.includes(pizzaName)) {
            return onSuccess(pizzaName);
        }
        return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
            console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
            console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
pizzaPalace.order('Венская', makePizza, onOrderError);