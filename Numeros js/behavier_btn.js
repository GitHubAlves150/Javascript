// Obtém o botão pelo ID
const meuBotao = document.getElementById('meuBotao');

// Adiciona um "ouvinte" de evento de clique
meuBotao.addEventListener('click', () => {
    // Adiciona a classe 'animado' para iniciar a animação
    meuBotao.classList.add('animado');
});
