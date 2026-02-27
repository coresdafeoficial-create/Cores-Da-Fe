/* eslint-disable no-undef */
/* jshint esversion: 6 */

(function() {
    "use strict";

    var iniciarNotificacoes = function() {
        var nomes = ["Marcos Oliveira", "Augusto Amaral", "Jorge Costa", "Henrique Da Silva", "Lucas Da Silva", "Fernando Carvalho","Juliana Costa", "Ricardo Santos", "Beatriz Lima", "Fernanda Souza", "Lucas Pereira"];
        var acoes = ["acabou de comprar!", "garantiu o Combo Premium!", "aproveitou a oferta!", "acabou de baixar o PDF!"];
        
        // O "document" pode estar sublinhado porque o JS está sozinho na pasta
        var popup = document.getElementById('venda-popup');
        var texto = document.getElementById('venda-texto');

        if (!popup || !texto) return;

        var mostrarVenda = function() {
            var nIdx = Math.floor(Math.random() * nomes.length);
            var aIdx = Math.floor(Math.random() * acoes.length);
            
            texto.innerHTML = "<strong>" + nomes[nIdx] + "</strong> " + acoes[aIdx];
            
            popup.classList.add('show');

            setTimeout(function() {
                popup.classList.remove('show');
            }, 5000);
        };

        setInterval(mostrarVenda, 15000);
        setTimeout(mostrarVenda, 3000);
    };

    // Garante que o script espere o HTML carregar
    if (document.readyState === 'complete') {
        iniciarNotificacoes();
    } else {
        window.addEventListener('load', iniciarNotificacoes);
    }
})();
window.onload = function() {
    var mockup = document.querySelector('.hero-mockup img');
    if (mockup) {
        mockup.style.transition = "all 2s ease-in-out";
        // Isso força o navegador a entender que o item deve se mover
        setInterval(function() {
            mockup.style.transform = mockup.style.transform === "translateY(-20px)" ? "translateY(0)" : "translateY(-20px)";
        }, 2000);
    }
};
