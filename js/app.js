function alterarStatus(gameId){
    const jogo=document.getElementById(`game-${gameId}`);
    const botao = jogo.querySelector('a.dashboard__item__button');
    if (botao.textContent === "Alugar") { 
        botao.textContent = "Devolver"; 
        botao.classList.add('dashboard__item__button--return');
        jogo.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented'); 
    } else { 
        if (confirm("Tem certeza de que deseja devolver este jogo?")){
            botao.textContent = "Alugar"; 
            botao.classList.remove('dashboard__item__button--return'); 
            jogo.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented'); }
        }
}