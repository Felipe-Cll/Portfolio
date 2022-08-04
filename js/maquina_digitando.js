const meuNome = document.querySelector('.meu-nome');
const maqName = meuNome.innerHTML;
const botaoVerMais = document.querySelector('button');
const botaoProjetos = document.querySelectorAll('.escondido');
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

function cliqueVer (e) {
    botaoProjetos.forEach((elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel')
            botaoVerMais.innerHTML = 'Ver mais';
        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    })
}

function maisProjetos (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

maisProjetos(botaoVerMais);
