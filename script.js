// Récupérer le bouton et le paragraphe
const button = document.getElementById("changeText");
const paragraph = document.querySelector("p");

// Ajouter un écouteur d'événement au clic sur le bouton
button.addEventListener("click", () => {
    // Changer le texte du paragraphe
    paragraph.textContent = "Le texte a été modifié par JavaScript !";
});
