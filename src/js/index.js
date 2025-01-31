/*
   Quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado.

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
 */
const personagens = document.querySelectorAll('.personagem'); //passa por cada elemento dde classe "personagem" e armazena em "personagens"

personagens.forEach((personagem) => {
  //percorre por cada item "personagem" armazenado em "personagens"
  personagem.addEventListener('mouseenter', () => {
    // adiciona o evento

    if (window.innerHeight < 450) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    removerSlecaoDoPersonagem();

    personagem.classList.add('selecionado'); // adiona a classe "selecionado" em cada "personagem" selecionado

    alterarImagemPersonagemSelecionado(personagem);
    alterarNomePersonagemSelecionado(personagem);
    alterarDescricaoPersonagem(personagem);
  });
});

function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById('descricao-personagem'); // pega o elemnto com a id "descricao-personagem"

  descricaoPersonagem.innerText = personagem.getAttribute('data-description'); // pega o atributo "data-description" e coloca em "descricaoPersonagem"
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById('nome-personagem'); // pega o elemento com o id "nome-personagem"

  nomePersonagem.innerText = personagem.getAttribute('data-name'); // pega o nome "data-name" do HTML
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande');
  const body = document.body;
  const idPersonagem = personagem.attributes.id.value; // pega o valor da id de "personagem"
  imagemPersonagemGrande.src = `./src/imagens/personagens/${idPersonagem}-grande.png`; //altera a imagem
  body.style.backgroundImage = `url(./src/imagens/cenarios/cenario-${idPersonagem}.jpeg)`;
}

//passo 3 ---v
function removerSlecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado'); // busca um elemento que tem a classe "selecionado"
  personagemSelecionado.classList.remove('selecionado'); // remove a classe "selecionado"
}
