let cuenta = 0;

const numero = document.getElementById('numero')
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('disminuir')){
            cuenta--;
        }
        else if(styles.contains('incrementar')){
            cuenta++;
        }
        else{
            cuenta = 0;
        }
        if(cuenta > 0){
            numero.style.color = 'green';
        }
        else if(cuenta < 0){
            numero.style.color = 'red';
        }
        else{
            numero.style.color = 'black'
        }
        numero.textContent = cuenta;
    })
})
