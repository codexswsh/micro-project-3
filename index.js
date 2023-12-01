const foodData = require("./food.json")



// console.log(food)

// 1. list all the food items

const items = foodData.map(function(item){
  return item.foodname;
})

console.log(items)

// 2. list all the food items with category vegetables

// const vegetables = foodData.filter(food=>food.category==="Vegetable");
// const vegetableItems = vegetables.map(food=>food.foodname);
// console.log(vegetableItems);


// 3.  list all the food items with category fruit

// const fruits = foodData.filter(food=>food.category==="Fruit");
// const fruitItems = fruits.map(food=>food.foodname)
// console.log(fruitItems)

// 4. list all the food items with category protien

// const protien = foodData.filter(food=>food.category==="Protein");
// const protienItems = protien.map(food=>food.foodname);
// console.log(protienItems)

// 5. list all the food items with category nuts
// const nuts = foodData.filter(food=>food.category==="Nuts");
// const nutsItems = nuts.map(food=>food.foodname)
// console.log(nutsItems)


// 6. list all the food items with category grains
// const grains = foodData.filter(function(food){
//   return food.category === "Grain";
// });
// const grainsItem = grains.map(function(food){
//   return food.foodname;
// })
// console.log(grainsItem)

// 7. list all the food items with category dairy
// const dairy = foodData.filter(food=>food.category ==="Dairy")
// const dairyItems = dairy.map(food=>food.foodname)
// console.log(dairyItems)

// 8. list all the food items with calorie above 100
// const calorie = foodData.filter(food=>food.calorie>100)
// const calorieItems = calorie.map(food=>food.foodname);
// console.log(calorieItems)

//9. list all the food items with calorie below 100
// const calorie = foodData.filter(food=>food.calorie<100)
// const calorieItems = calorie.map(food=>food.foodname)
// console.log(calorieItems)

//10. list all the food items with highest protien content to lowest

// const sortByProtein = foodData.sort((a,b)=>b.protiens - a.protiens);
// const lowToHighProtein = sortByProtein.map(food=>food.foodname);
// console.log(lowToHighProtein);

//11. list all the food items with lowest cab content to highest

// const sortByCab =foodData.sort((a,b)=>a.cab - b.cab);
// const highCarbsToLow = sortByCab.map(food=>food.foodname);
// console.log(highCarbsToLow)