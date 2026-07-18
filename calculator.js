let Student{
   name: "Precious Chirwa",
   Program: "CS",
   year: 4
}

const welcome = ()=>{
   Console.log("SIMPLE CALCULATOR");
   Console.log(`Welcome ${Student.name} + ${Student.year}.`);
}

const nums = [1, 3, 5, 7, 9];
const add = ()=> nums.reduce(
   (sum, n)=>{
   sum += n;
   }, 0
);

const sub = (n)=> {
   let res = n - (n-1);
   console.log(res);
}

const mul = function(n){
   console.log(n* n-1);
}

const mol = (n)=>{
   console.log(n%2);
}

const clear = ()=>{
   Inner.html = "";
}
