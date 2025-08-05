const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, purchases: [100, 50, 25] },
  { id: 2, name: "Bob", age: 17, isActive: false, purchases: [20, 40] },
  { id: 3, name: "Charlie", age: 30, isActive: true, purchases: [80, 30, 20] },
  { id: 4, name: "David", age: 22, isActive: false, purchases: [10] },
  { id: 5, name: "Eva", age: 19, isActive: true, purchases: [200, 150] }
];

users.map((user)=>{
    return console.log(user)
})