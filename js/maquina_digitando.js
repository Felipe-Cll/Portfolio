const meuNome = document.querySelector('.meu-nome');
const maqName = meuNome.innerHTML;
meuNome.innerHTML='';

function typeWriter(nome) {
    setTimeout( () => {
        const meuNomeM = nome.split('');
        meuNome.innerHTML='';
        meuNomeM.forEach( (letra, index) => {
            
            setTimeout(function () {
                meuNome.innerHTML += letra;
            }, 150 * index)
        })}, 1500)
}