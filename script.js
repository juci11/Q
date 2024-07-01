/* script.js */
let faseAtual = 1; // Inicialmente, só a fase 1 está desbloqueada

function flipCard(card, phaseName) {
    // Verifica se a fase clicada é a próxima fase desbloqueada
    if (faseAtual === 1 && phaseName === 'Fase 2') {
        alert('Complete a Fase 1 primeiro!');
        return;
    } else if (faseAtual === 2 && phaseName === 'Fase 3') {
        alert('Complete a Fase 2 primeiro!');
        return;
    }
    
    card.classList.add('flip');
    setTimeout(() => {
        // Redireciona para a próxima página da fase
        if (phaseName === 'Fase 1') {
            window.location.href = 'fase1.html';
        } else if (phaseName === 'Fase 2') {
            window.location.href = 'fase2.html';
        } else if (phaseName === 'Fase 3') {
            window.location.href = 'fase3.html';
        }
    }, 500); // Espera 0.5 segundos antes de redirecionar
}
