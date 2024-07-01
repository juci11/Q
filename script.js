/* script.js */
function flipCard(card, phaseName) {
    card.classList.add('flip');
    setTimeout(() => {
        if (phaseName === 'Fase 1') {
            window.location.href = 'fase1.html';
        } else if (phaseName === 'Fase 2') {
            window.location.href = 'fase2.html';
        } else if (phaseName === 'Fase 3') {
            window.location.href = 'fase3.html';
        }
    }, 5000); // Espera 5 segundos antes de redirecionar
}
