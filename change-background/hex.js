const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "black"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    //console.log(document.body);
    
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    getRandomPosition()
});

function getRandomColor(){
    var letter = '0123456789ABCDEF';
    var color = '#';
    for(var i=0; i<6; i++){
        var randomNumber = Math.floor(Math.random()* 16);
        color += letter[randomNumber]
    }
    return color
}

var left = 0;
var right = 0;
function getRandomPosition() {
    var element = document.querySelector(".btn-hero");
    x = Math.floor(Math.random() * 350) - 350;
    y = Math.floor(Math.random() * 350) - 350;
    element.style.top = x + 'px';
    element.style.left = y + 'px';
    

}