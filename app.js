// Variável que armazena o número secreto gerado aleatoriamente
let numeroSecreto = gerarNumeroAleatorio();
// Variável que armazena o número de tentativas do jogador
let tentativas = 1;

// Função para exibir um texto em um elemento da tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento HTML pela tag
    campo.innerHTML = texto; // Insere o texto no elemento selecionado
}

// Função para exibir a mensagem inicial do jogo
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto'); // Define o título do jogo
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); // Exibe a instrução para o jogador
}

// Exibe a mensagem inicial ao carregar o jogo
exibirMensagemInicial();

// Função chamada quando o jogador faz um chute
function verificarChute() {
    let chute = document.querySelector('input').value; // Obtém o valor digitado pelo jogador

    if (chute == numeroSecreto) { // Verifica se o chute está correto
        exibirTextoNaTela('h1', 'Acertou!'); // Mensagem de acerto

        // Determina a palavra correta para "tentativa(s)"
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas); // Exibe o número de tentativas
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão de reiniciar
    } else {
        if (chute > numeroSecreto) { 
            exibirTextoNaTela('p', 'O número secreto é menor'); // Dica para o jogador
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior'); // Dica para o jogador
        }
        tentativas++; // Incrementa o número de tentativas
        limparCampo(); // Limpa o campo de entrada
    }
}

// Lista para armazenar os números já sorteados
let listaDeNumerosSorteados = [];

// Função para gerar um número aleatório entre 1 e 3, sem repetição
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1); // Gera um número aleatório entre 1 e 3

    // Verifica se o número já foi sorteado
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); // Se já foi sorteado, gera outro número
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona o número à lista de sorteados
        console.log(listaDeNumerosSorteados); // Exibe a lista no console
        return numeroEscolhido; // Retorna o número gerado
    }
}

// Função para limpar o campo de entrada do jogador
function limparCampo() {
    let chute = document.querySelector('input'); // Seleciona o campo de entrada
    chute.value = ''; // Limpa o valor digitado
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto
    limparCampo(); // Limpa o campo de entrada
    tentativas = 1; // Reseta o número de tentativas
    exibirMensagemInicial(); // Exibe a mensagem inicial novamente
    document.getElementById('reiniciar').setAttribute('disabled', true); // Desabilita o botão de reiniciar
}
