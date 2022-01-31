let countValue = 10;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function (event){  //aqui, selecionamos todos os botoes e vemos qual botao foi clicad
        const styles = event.currentTarget.classList;
        if(styles.contains('decrease')){
            countValue -= 10;
        }
        else if(styles.contains('increase')){
            countValue += 10;
        }
        else if(styles.contains('reset')){
            countValue = 0;
        }
        if(countValue > 0){
            value.style.color = 'green'
        }
        if(countValue < 0){
            value.style.color = 'red'
        }
        if(countValue === 0){
            value.style.color = "#222"
        }
        value.textContent = countValue;
    });
});