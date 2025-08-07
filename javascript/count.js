const car = {
  brand: "Toyota",
  model: "Innova",
  year: 2020
};
let count=0;
for(let key in car)
{
    count++;
}
console.log(count);