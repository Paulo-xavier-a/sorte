document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado");
    
    let screen1 = document.querySelector('.screen1');
    let screen2 = document.querySelector('.screen2');
    let button = document.querySelector('.shake');
    let backButton = document.querySelector('.voltar');

    button.addEventListener('click', function() {
        console.log("Botão clicado");
        screen1.classList.toggle('hide');
        screen2.classList.toggle('hide');
    });

    backButton.addEventListener('click', function() {
        console.log("Botão de voltar clicado");
        screen1.classList.toggle('hide');
        screen2.classList.toggle('hide');
    });

    // Adiciona a classe 'luck' apenas se não existir nenhum elemento com essa classe
    if (!document.querySelector('.luck')) {
        let luckElement = document.createElement('div');
        luckElement.classList.add('luck');
        luckElement.textContent = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.";
        document.querySelector('.screen2').appendChild(luckElement);
    }
});
