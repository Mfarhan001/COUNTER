// let box = document.getElementsByClassName("box");
// console.log(box);


// let div = document.querySelector("div")
// console.dir(div);


// let val = document.querySelector("h1");
// console.log(val)




// let h1 =document.querySelector("h1")
// let btn =document.querySelector("button")

// let change = true
// const changetext =()=>{
//     if(change === true){
//     h1.innerText = "hello"
// change = false
//     }
//     else {
//         h1.innerText = "what"
//         change = true
//     }
    
// }


// btn.addEventListener("click",changetext)



let h1 =document.querySelector("h1");
let btn1 =document.querySelector(".btn1");
let btn2 =document.querySelector(".btn2");
let btn3 =document.querySelector(".btn3");



let num= 0
const plus = ()=>{
    num++
    h1.innerText = num,
    console.log(num);
   
    
    
    
};



const minus = ()=>{
    num--
    h1.innerText = num,
    console.log(num);
    
    
    
    
};

const restaText=()=>{
    num=0;
    h1.innerText=num;
}
btn1.addEventListener("click",plus)
btn2.addEventListener("click",minus)
btn3.addEventListener("click",restaText)



// let change =document.querySelector("h1");
// let btn =document.querySelector("button");



// let sum=12
// const  = ()=>{
//     change.innerText = sum,
//     num--
    
    
// };

// btn.addEventListener("click",changetext)