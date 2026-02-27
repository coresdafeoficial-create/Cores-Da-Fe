const nomes = ["Maria", "João", "Ana", "Marcos", "Letícia", "Líder Débora", "Ricardo"];
const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Belo Horizonte", "Santarém"];

function mostrarNotificacao() {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const cidade = cidades[Math.floor(Math.random() * cidades.length)];
    const texto = `${nome} de ${cidade} acabou de comprar o Plano Prime! 🚀`;
    
    const div = document.getElementById('notificacao');
    document.getElementById('texto-notificacao').innerText = texto;
    
    div.classList.add('mostrar');
    
    setTimeout(() => {
        div.classList.remove('mostrar');
    }, 5000); // Fica visível por 5 segundos
}

// Mostra a cada 2 minutos (120000 milissegundos)
setInterval(mostrarNotificacao, 120000);

// Mostrar a primeira vez depois de 5 segundos para teste
setTimeout(mostrarNotificacao, 5000);

// CONFIGURAÇÃO DO CARROSSEL DE DEPOIMENTOS
const track = document.querySelector('.carrossel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

// Função que move o carrossel
function moverCarrossel(index) {
    // Calcula quanto deve deslizar (100% para cada slide)
    track.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

// Botão Próximo
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Volta para o primeiro
    }
    moverCarrossel(currentIndex);
});

// Botão Anterior
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Vai para o último
    }
    moverCarrossel(currentIndex);
});

// PASSAR SOZINHO (Piloto Automático)
setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    moverCarrossel(currentIndex);
}, 5000); // Muda a cada 5 segundos