// function changeText(){
//     let fpara = document.getElementById('fhead');
//     fpara.textContent = "Hello Ankit";
// }
// // event & listener
// let fpara = document.getElementById('fhead');
// fpara.addEventListener('click',changeText);

// const { use } = require("react");

//Avoiding to many listeners
// function alertPara(event){
//     alert("You have clicked on:"+ event.target.textContent);
// }
// let myDiv = document.getElementById("wrapper");

// document.addEventListener('click',alertPara);

// function greetUser(name,callback){
//     console.log(`Hui Hui,${name}`);
//     callback();
// }
// function welcome(){
//     console.log("Welcome to Javascript");
// }
// greetUser("Ankit",welcome);

// function Number(num,callback){
//     setTimeout(()=>{
//     },1000);
// }
// Number(1,{}=>{
    
// })

// let greetUser = (name)=>{
//     console.log(`Hello ${name}`);
// }
// greetUser("Pathak")

// let isEven = (num)=> num%2===0{
//     // if(num%2===0){
//     //     return true;
//     // }else{
//     //     return false;
//     // 
// }
// let res = isEven(4);
// console.log(res)

// let Greet = (name="Ankit")=>{
//     console.log(`Hello ${name}`);
// }
// Greet("Shivam");

//Call back function


//------------------------------------------------------------------------- 12th July
//create an array with 3 fruits & print 2nd fruit

// let fruit = ["Orange","Apple","Mango"];
// let store = fruit.slice(1,2);
// console.log(store);

//add "Mango" at the end and "Pineapple at beginning"

// let fruit = ["Banana","Chiku"];
// fruit.push("Mango");
// console.log(fruit);
// fruit.unshift("pineapple");
// console.log(fruit);

//Insert "red" and "blue" at index 1 in this array

// let color = ["orange","white"];
// color.splice(1,0,"Red","Blue"); //in this way we add element on 1st index
// console.log(color);

//Extract only middle 3 elements from this array

// let color = ["White","Black","Red","Yellow","Blue"];
// let res = color.splice(1,3);
// console.log(res);

//sort this array alphabetically & reverse it

// let names = ["Shyam","Ankit","Varad","Ashish"];
// //sort function is only applicable for string
// //first it will sort the array & then reverse
// let res = names.sort().reverse(); 
// console.log(res);

//sort numbers 

// let num = [25,12,11,5,2];
// let ans = num.sort(function(a,b){
//     return a-b;
// });
// console.log(ans);

// use Map() to square each number
// let num = [2,3,4,5]
// let Res = num.map(function(val){
//     return val*val;
// });
// console.log(Res);

//Use filter() to keep numbers greater than 10

// let num = [12,14,2,6,8];
// let ans = num.filter(function(val){
//     if(val > 10){
//         return val;
//     }
// });
// console.log(ans);

// let num = [1,3,5,7];
// let ans = num.filter((val)=>{ // by using arrow function
//     if(val > 4){
//         return val;
//     }
// });
// console.log(ans);

// let num = [10,20,30];
// let ans = num.reduce(function(acc,val){
//     return acc + val;
// },0);
// console.log(ans);

//Destruct this array

// let fullName = ["Ankit","Pathak"]
// let [firstName,lastName] = fullName;

//Merge two array using spread operator

// let a = [1,2];
// let b = [3,4];

// let c = [...a,...b];
// console.log(c);

//add any element at start by using spread

// let countries = ["Austrailia","England"];
// let NewCountry = ["India",...countries];
// console.log(NewCountry);


//-------------------(objects)---------------------

// 1. create an object for a student with name, age & isEnrolled..

// let student = {
//     name : "Ankit",
//     age : 21,
//     isEnrolled : true,
// };
// console.log(student.name);


// 2. Can an object key be a number or boolean? 

// let obj = {
//     47 : "Ankit",
//     "true" : "Enrolled",
// };
// console.log(obj.true);
// console.log(obj[47]);

// 3. Access the value of the first-name from this object

// const user = {
//     first_name : "Pathak",
//     city : "Nashik",
// };
// console.log(user.first_name);

// 4. From the object below print the latitude

// const location = {
//     city : "Bhopal",
//     coordinates : {
//         lat : 23.2,
//         long : 77.4,
//     },
// };
// // console.log(location.coordinates.lat)
// let{lat} = location.coordinates;
// console.log(lat)

// 5. from the below would you prevent error (optional Chaining)

// let person = {
//     Name : "Shubham",
//     City : "Pune",
//     Age : 22,
//     coordinates: {
//         lat : 23.2,
//         long : 18.6,
//     },
// };
// console.log(person?.coordinate?.long)


// 6. Destructure the key first_name as a variable called firstName

// const user = {
//     "first_name" : "Ankit",
// };
// let{first_name : firstName} = user;
// console.log(firstName)


// 7. Use for in loop to log all keys in object

// let person = {
//     Name : "Shivam",
//     City : "Pune",
//     age : 21,
// };
// for(let key in person){
//     console.log(key +":"+ person[key])
// }

// 8. Use a variable to dynamically assign a property

// const role = "Accountant"
// let key = {
//     Name : "Pathak",
//     Age : 21,
//     ['role'] : "Manager",
// }
// console.log(role)

// 9. to copy a reference object (We didn't directly copy nested obj values)

const a = {score : 90};
// const b = a;
let b = JSON.parse(JSON.stringify(a)); //deep cloning
b.score = 75;
console.log(a.score);
console.log(b.score)

