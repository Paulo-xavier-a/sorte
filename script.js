document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado");

    // Array de frases de sorte
    const luckPhrases = [
        "A sorte favorece os audazes.",
        "Acredite na sua sorte, mas não acredite apenas nela.",
        "Sua sorte está no que você acredita.",
        "A sorte vem para quem se prepara.",
        "Sorte é o que acontece quando a preparação encontra a oportunidade.",
        "A sorte é para quem se prepara.",
        "A sorte é uma combinação de oportunidade e preparação."
    ];

    let screen1 = document.querySelector('.screen1');
    let screen2 = document.querySelector('.screen2');
    let button = document.querySelector('.shake');
    let backButton = document.querySelector('.voltar');
    let luckElement = document.querySelector('.luck');

    button.addEventListener('click', function() {
        console.log("Botão clicado");
        screen1.classList.toggle('hide');
        screen2.classList.toggle('hide');
        
        // Seleciona uma frase de sorte aleatória do array
        let randomIndex = Math.floor(Math.random() * luckPhrases.length);
        let selectedPhrase = luckPhrases.splice(randomIndex, 1)[0]; // Remove a frase escolhida do array
        luckElement.textContent = selectedPhrase;

        // Verifica se o array está vazio e reinicia-o se necessário
        if (luckPhrases.length === 0) {
            luckPhrases.push(
                "A sorte favorece os audazes.",
                "Acredite na sua sorte, mas não acredite apenas nela.",
                "Sua sorte está no que você acredita.",
                "A sorte vem para quem se prepara.",
                "Sorte é o que acontece quando a preparação encontra a oportunidade.",
                "A sorte é para quem se prepara.",
                "A sorte é uma combinação de oportunidade e preparação."
            );
        }
    });

    backButton.addEventListener('click', function() {
        console.log("Botão de voltar clicado");
        screen1.classList.toggle('hide');
        screen2.classList.toggle('hide');
    });

    // Adiciona a classe 'luck' apenas se não existir nenhum elemento com essa classe
    if (!luckElement) {
        luckElement = document.createElement('div');
        luckElement.classList.add('luck');
        document.querySelector('.screen2').appendChild(luckElement);
    }
});
