
function desselecionarBotao() {
    const btnSelected = document.querySelector('.btn.selected');
    btnSelected.classList.remove('selected');
}

function desselecionarPersonagem() {
    const characterSelected = document.querySelector('.character.selected');
    characterSelected.classList.remove('selected');
}

//passo 1 pegar os botões no js e verificar quando o usuario clicar
const botoes = document.querySelectorAll('.btn');

const personagens = document.querySelectorAll('.character')
//passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
botoes.forEach((btn, indice) => {
    btn.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        btn.classList.add('selected')
        personagens[indice].classList.add('selected')
    });
});




