const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let cambio = 0;
let indice = 0;

for (const food of foodSchedule){
  if (food.isVegan == false){
    foodSchedule.splice(indice, 1, { name: fruits[cambio], isVegan: true })
    cambio = cambio + 1;
  }
  indice = indice + 1;
}

console.log(foodSchedule);