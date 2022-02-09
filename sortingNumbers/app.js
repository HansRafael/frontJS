var generatedRandomNumber = []
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', (event) => {
        const type = event.currentTarget.classList;
        if(type.contains('random')){
            generatedRandomNumber = listRandomNumber(100)
            console.log(generatedRandomNumber)
        }
    })
});





function listRandomNumber(size){
    let generateNumbers  = []
    for(var i = 0; i<size; i++){
        let randomNumber = Math.floor(Math.random()* size);
        generateNumbers.push(randomNumber)
    }
    return generateNumbers;
}
