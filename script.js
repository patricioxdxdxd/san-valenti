document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const content = document.getElementById("content");
    const message = document.getElementById("message");

    // Cuando se presiona "Sí", se oculta la pregunta y aparece el mensaje con imágenes y video
    yesButton.addEventListener("click", () => {
        content.style.display = "none";
        message.classList.remove("hidden");
    });

    // Lista de frases para el botón "No"
    let noTextOptions = [
        "¿Estás segura?", "Piénsalo bien", "Aún puedes cambiar de opinión", 
        "No me hagas esto", "Dame una oportunidad", "¿De verdad vas a decir que no?",
        "No seas cruel", "Dime que sí","DECIME QUE SIII"
    ]; 

    let noClickCount = 0;

    // Cada vez que se presiona "No", cambia el texto y crece el botón "Sí"
    noButton.addEventListener("click", () => {
        if (noClickCount < noTextOptions.length) {
            noButton.textContent = noTextOptions[noClickCount];
        } else {
            yesButton.style.fontSize = `${20 + noClickCount * 5}px`;
        }
        noClickCount++;
    });
});