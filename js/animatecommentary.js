document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimony-slider");
    const slides = Array.from(document.querySelectorAll(".testimony-entry"));

    // Cloner chaque élément pour le défilement continu
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
		slider.appendChild(clone);
    });

    // Gérer la réinitialisation des commentaires une fois qu'ils sont partis à gauche
    slider.addEventListener("animationiteration", function () {
        const firstSlide = slider.firstElementChild; // Récupère le premier élément
		slider.appendChild(firstSlide); // Déplace le premier élément à la fin pour une boucle infinie
    });
});
