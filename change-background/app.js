const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "black","gray","white","silver","blue"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    //console.log(document.body);
    
    const randomNumber = Math.floor(Math.random()* (colors.length));
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

