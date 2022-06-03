//map.Array
const myArrayMap = [1, 2, 3, 4, 5];

const myNewArrayMap = myArrayMap.map((num) => {
  return num + 1;
});

console.log(myNewArrayMap);

//filter.Array
const myArrayFilter = [1, 2, 3, 4, 5, 6];

const myNewArrayFilter = myArrayFilter.filter((num) => {
  return num % 2 === 0;
});

console.log(myNewArrayFilter);

//includes.Array
const myArrayIncludes = [1, 2, 3, 4, 5, 6];

const myNewArrayIncludes = myArrayIncludes.includes(3);
console.log(myNewArrayIncludes);

//find.Array
const myArrayFind = [1, 2, 3, 4, 5];

const myNewArrayFind = myArrayFind.find((num) => {
  return num === 3;
});
console.log(myNewArrayFind);
