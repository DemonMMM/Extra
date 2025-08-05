const axios = require("axios");

// const users = [
//     {firstname:"Akash" ,lastname:"saini", age: 26},
//     {firstname:"Akas" ,lastname:"saini", age: 251},
//     {firstname:"Akassh" ,lastname:"saini", age: 75},
//     {firstname:"Akasssh" ,lastname:"saini", age: 26}
// ]

// const obj= users.reduce(function(acc,curr){
//     if(curr.age<27){
//         acc.push(curr.firstname);
//     }
//     return acc
// },[]);

// console.log(obj);

// function viewOrder () {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("order viewing");
//         },1000);
//     })
// }

// function summaryOrder() {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             resolve("Viewing order Summary");
//         },1000);
//     })
// }

// function orderPlaced() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Order Placed");
//         },1000);
//     })
// }

// viewOrder()
// .then(result => {
//     console.log(result);
//     return summaryOrder(); 
// })
// .then(result => {
//     console.log(result);
//     return orderPlaced();
// })
// .then(result => {
//     console.log(result);
// });


// function Book(author,title) {
//     this.author = author;
//     this.title = title;
// }

// Book.prototype.describe = function (){
//     console.log("The book '" + this.title + "' is written by " + this.author);
// }

// const n = new Book("James Brown","Atomic habits");

// n.describe();

// let MapArray = [1,2,3,4];

// function customMap(callback,array){
//     let result = [];
//     for(let i =0; i<array.length; i++){
//          result.push(callback(array[i],i,array));
//     }
//     return result;
// }

// function callback(arr,i,array) {
//     return arr * 2;
// } 

// const resultMap = customMap(callback,MapArray);

// console.log(resultMap);

// for(var i = 0; i<3; i++){
//     (function (j){
//         setTimeout(() => {
//             console.log(j);
//         },)
//     }(i));
// }

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => {
//     console.log(response.data);
// })


// async function GetData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log(data);
// }

// GetData();

// Array.prototype.customReduce = function(callback, initialValue){
//     let i;
//     let acc;
//     if (initialValue === undefined){
//         i=1;
//         acc = this[0];
//     }
//     else{
//         i=0;
//         acc = initialValue;
//     }

//     for(;i<this.length;i++){
//         acc = callback(acc, this[i]);
//     }
//     return acc;
// }

// function callback(acc,arr){
//     return acc+arr;
// }

// let customResult = [1,2,3,4,5,6].customReduce(callback,10);

// // console.log(customResult);

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "Post",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         "userId": 11,
//         "id": 101,
//         "title": "in times of great choice we may be able to choose others",
//         "body": "what you doing"
//     })
// }).then(response => response.json())
// .then(data => console.log(data));

// axios({
//     method: "POST",
//     url : 'https://jsonplaceholder.typicode.com/posts',
//     headers:{
//         "Content-Type": "application/json"
//     },
//     data:{
//         userId: 11,
//         id: 101,
//         title: "in times of great choice we may be able to choose others",
//         body: "what you doing"
//     }
// }).then(response => console.log(response.data));


function Greet(name) {
    console.log(name);
}

Greet("Dev");


    // const EmailCheck = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
    // const PasswordCheck =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%&+?"_=])[a-zA-Z0-9@#$%&"?!_+=]{8,}$/;
    // const NameCheck = /^[a-zA-Z ]{3,}$/;
    // const MatchUser = users.find((user) => user.email === Email);
    // if (!UserName || !Email || !Password) {
    //   setErrorsDetected("Fill in the All Feilds!");
    //   return;
    // } else if (!NameCheck.test(UserName)) {
    //   setErrorsDetected("Enter Correct FullName");
    //   return;
    // } else if (!EmailCheck.test(Email)) {
    //   setErrorsDetected("Enter Correct Email!");
    //   return;
    // } else if (!PasswordCheck.test(Password)) {
    //   setErrorsDetected("Password Invalid");
    // } else if (MatchUser) {
    //   setErrorsDetected("User Already Exist");
    //   return;
    // } else {
    //   console.log(UserName);
    //   console.log(Password);
    //   dispatch(
    //     addDetails({
    //       fullName: UserName,
    //       email: Email,
    //       password: Password,
    //     })
    //   );
    //   setUserName("");
    //   setEmail("");
    //   setPassword("");
    //   Navigate("/login");
    // }