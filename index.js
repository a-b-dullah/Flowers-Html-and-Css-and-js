let landing = document.querySelector(".landing .img");
let arry = ["1.jpg","2.jpg","3.jpg"];
setInterval(() => {
    let random = (Math.floor(Math.random() * arry.length))
    landing.style.backgroundImage ='url("img/'+ arry[random] +'")';
}, 3000);

// let icions=document.querySelectorAll(".p");
// icions.forEach(p=>{
// p.addEventListener("click",function(){
//     if (p.classList.contains("plus")){


  
        
// }
// })
// })
let box = document.querySelectorAll(".box li ");
box.forEach(li=>{
li.addEventListener("click",function(){
    document.querySelector(li.getAttribute("data-href")).scrollIntoView({
        behavior:'smooth'
})
})
})
let ul2 = document.querySelector(".ul2");
let span=document.querySelector(".span").onclick=function(){
ul2.classList.toggle("open")

}