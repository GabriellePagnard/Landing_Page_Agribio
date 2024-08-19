# 🌱 AgriBio - Landing Page pour une Agriculture Responsable 🌱

<br>

## 📜 Présentation

Bienvenue sur AgriBio 🌾, une landing page élégante et moderne destinée à promouvoir une alimentation plus saine grâce à des produits bio, locaux et cultivés avec passion. Découvrez un projet qui mêle esthétique soignée et fonctionnalités pratiques, le tout dans un univers écoresponsable.

<br>
<br>

## ✨ Fonctionnalités Principales

📬 Formulaire d'inscription à la newsletter : Permet aux visiteurs de s'abonner pour recevoir des actualités et des offres exclusives   
🎉 Pop-up de confirmation stylisé : Confirme l'inscription avec un message élégant et responsive   
📦 Présentation claire et structurée : Mettez en avant vos produits, vos valeurs et votre engagement écologique   
📱 Responsive Design : Le site s'adapte parfaitement aux différentes tailles d'écran (mobile, tablette, bureau)   
🎨 Interface utilisateur moderne et intuitive 🎨  Utilisation de Tailwind CSS pour un design réactif et moderne   

## 📸 Aperçu

Voici à quoi ressemble l'application :   

![screenshot ordinateur](ressources/screenshot_descktop.jpg)   


![screenshot mobile demarrage](ressources/screenshot_mobile.jpg)   


<br>
<br>

[Démo vidéo du projet sur ordinateur 🎥](https://www.youtube.com/watch?v=4X6-kK_s66I)

[Démo vidéo du projet sur mobile 🎥](https://www.youtube.com/watch?v=VIeR3J-PoAI)

<br>
<br>

## 🌐 Lien direct

Pour la voir : [AgriBio🌱](https://gabriellepagnard.github.io/Landing_Page_Agribio/)   

<br>
<br>

## 🔧 Technologies Utilisées

⚙️ HTML5 : Structure du site   
🎨 Tailwind CSS : Framework CSS pour un design moderne et réactif   
💻 JavaScript : Gestion des interactions utilisateur   
🌐 Node.js : Serveur backend pour gérer les inscriptions   
🗄️ Sequelize : ORM pour interagir avec la base de données   
🗃️ PostgreSQL : Base de données pour stocker les emails de la newsletter   

<br>
<br>

## 📂 Fichiers du Projet

- index.html : Structure principale du site   
- style.css : Styles personnalisés pour améliorer l'apparence du site   
- app.js : Script pour gérer les interactions et l'inscription à la newsletter   
- index.js : Point d'entrée du serveur Node.js pour gérer les requêtes backend   
- config/config.json : Configuration de la base de données pour Sequelize    
- models/index.js : Configuration de Sequelize pour charger les modèles    
- models/newsletter.js : Modèle Sequelize pour la gestion des emails de la newsletter    
- migrations/XXXX-create-newsletter.js : Migration pour la création de la table "Newsletters"    
- ressources/ : Dossier contenant les images et les icônes utilisées dans le projet (y compris les scrreenshot)     
- node_modules/ : Dossier contenant les dépendances Node.js installées pour le projet   

<br>
<br>


## 🛠️ Installation et Utilisation

Pour démarrer avec AgriBio, suivez ces étapes simples :   

### Prérequis

⚠️ Node.js et npm doivent être installés sur votre machine ⚠️

⚠️ PostgreSQL doit être configuré avec une base de données pour stocker les emails ⚠️

### Installation

➡️ Clonez le Répertoire :   

`git clone https://github.com/votreutilisateur/agribio.git`   

➡️ Accédez au Répertoire :   

`cd agribio`   

➡️ Installez les dépendances :   

`npm install`   

➡️ Configurez votre base de données PostgreSQL dans le fichier config/config.json   

### Utilisation

➡️ Lancez les migrations pour créer la table Newsletters :   

`npx sequelize-cli db:migrate`   

➡️ Démarrez le serveur :   

`node index.js`   

➡️ Accédez au site via http://localhost:3000 et profitez de l'expérience AgriBio ! 🍃

<br>
<br>


## 🏗️ Comment Contribuer

Vous souhaitez contribuer ? 🎉 Voici comment faire :   

### Créer une Branche 🌿

➡️ Pour chaque nouvelle fonctionnalité ou correction, créez une nouvelle branche :   

`git checkout -b nom-de-la-branche`   

### Faire vos Changements ✏️   

Apportez les modifications nécessaires et committez-les :   

`git add .`   
`git commit -m "Description des changements"`   

### Pousser les Changements ⬆️   

Envoyez vos modifications à GitHub 📨 :

`git push origin nom-de-la-branche`   

### Créer une Pull Request 🔄   

Allez sur GitHub, ouvrez une Pull Request et expliquez vos modifications   

<br>
<br>

## 🤝 Contributeurs/trices

Gabrielle Pagnard 🧑‍💻 - Créatrice du projet

<br>
<br>

## 📬 Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter :   

Email : gpagnard@gmail.com   
GitHub : [GabriellePagnard](https://github.com/GabriellePagnard)     

<br>
<br>
<br>

Merci d'avoir pris le temps de découvrir ce projet AgriBio ! 🙏   

<br>

Si vous avez trouvé ce projet utile ou inspirant, n'hésitez pas à mettre une étoile ⭐ sur le dépôt GitHub.   
Votre soutien est grandement apprécié et motive à continuer de créer et partager des projets comme celui-ci. 🌱