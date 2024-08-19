const express = require('express');
const { Newsletter } = require('./models'); // Assurez-vous que ce chemin est correct
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

/**
 * Route POST pour l'inscription à la newsletter
 * @route POST /api/newsletter
 * @param {string} req.body.email - L'adresse email à enregistrer
 */
app.post('/api/newsletter', async (req, res) => {
    const email = req.body.email;

    try {
        // Enregistrement de l'email dans la base de données
        await Newsletter.create({ email });
        res.status(200).send('Inscription réussie');
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement dans la base de données:', error);
        res.status(500).send('Erreur lors de l\'inscription.');
    }
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
