document.getElementById('newsletter-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    const email = event.target.email.value;

    const response = await fetch('http://localhost:3000/api/newsletter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });    

    if (response.ok) {
        showPopup(); // Affiche la pop-up en cas de succès
    } else {
        alert('Erreur lors de l\'inscription.');
    }
});

// Fonction pour afficher la pop-up
function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden'); // Affiche la pop-up

    // Fermer la pop-up lorsque le bouton est cliqué
    document.getElementById('close-popup').addEventListener('click', () => {
        popup.classList.add('hidden'); // Masque la pop-up
    });
}
