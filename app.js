<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AgriBio</title>
    <!-- Import Tailwind CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body class="bg-green-50 font-sans leading-normal tracking-normal">
    <!-- Section d'en-tête avec une image de fond naturelle -->
    <header class="relative h-screen">
      <!-- Image d'arrière-plan avec flou léger -->
      <div class="absolute inset-0">
        <img
          src="ressources/recolte.jpg"
          alt="Arrière-plan"
          class="w-full h-full object-cover filter blur-sm"
        />
        <!-- Overlay sombre pour contraster le texte -->
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <!-- Texte net par-dessus l'image -->
      <div
        class="relative container mx-auto flex flex-col items-center justify-center h-full z-10 text-[#A39E5E] text-center"
      >
        <h1 class="text-white text-5xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          AgriBio
        </h1>
        <p class="text-white text-lg sm:text-base md:text-3xl mb-8 drop-shadow-lg">
          Des fruits et légumes bio, locaux, et cultivés avec passion pour une
          alimentation plus saine.
        </p>
        <a
          href="#products"
          class="bg-yellow-400 hover:bg-yellow-200 hover:text-green-900 text-yellow-900 font-bold py-4 px-8 rounded-md transition transform hover:scale-105 uppercase"
          >Découvrir nos produits</a
        >
      </div>
    </header>

    <!-- Section Notre Concept -->
    <section class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8 text-yellow-900 uppercase">
          Notre Concept
        </h2>
        <p class="text-yellow-900 mb-6">
          Chez AgriBio, nous croyons en une agriculture durable et respectueuse,
          où chaque fruit et légume est cultivé en harmonie avec la nature. Nos
          produits ne sont pas seulement bio, ils sont le reflet de notre
          engagement profond pour une alimentation saine, savoureuse et
          responsable.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Bloc "Respect de la Nature" -->
          <div
            class="bg-yellow-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition"
          >
            <img
              src="ressources/proteger.jpg"
              alt="Fruits Bio"
              class="rounded-lg mb-4 w-full h-auto"
            />
            <h3 class="text-2xl font-semibold mb-2 text-yellow-900 uppercase">
              Respect de la Nature
            </h3>
            <p class="text-yellow-900">
              Nous cultivons nos terres sans pesticides chimiques ni engrais de
              synthèse, en suivant les cycles naturels des saisons. Nos méthodes
              de culture visent à préserver l’équilibre des sols et encourager
              la biodiversité.
            </p>
          </div>

          <!-- Bloc "Circuit Court" -->
          <div
            class="bg-yellow-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition"
          >
            <img
              src="ressources/circuit_court.jpg"
              alt="Fruits Bio"
              class="rounded-lg mb-4 w-full h-auto"
            />
            <h3 class="text-2xl font-semibold mb-2 text-yellow-900 uppercase">
              Circuit Court
            </h3>
            <p class="text-yellow-900">
              La fraîcheur de nos produits est notre priorité. C’est pourquoi
              nous favorisons les circuits courts : de nos champs à votre table,
              sans détours inutiles.
            </p>
          </div>

          <!-- Bloc "Engagement Écologique" -->
          <div
            class="bg-yellow-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition"
          >
            <img
              src="ressources/engagement_ecologique.jpg"
              alt="Fruits Bio"
              class="rounded-lg mb-4 w-full h-auto"
            />
            <h3 class="text-2xl font-semibold mb-2 text-yellow-900 uppercase">
              Engagement Écologique
            </h3>
            <p class="text-yellow-900">
              Nous savons que chaque geste compte pour la planète. Nous
              réduisons notre empreinte carbone en optimisant les trajets et en
              privilégiant les emballages écologiques.
            </p>
          </div>

          <!-- Bloc "Un Choix Conscient et Savoureux" -->
          <div
            class="bg-yellow-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition"
          >
            <img
              src="ressources/conscient_et_savoureux.jpg"
              alt="Fruits Bio"
              class="rounded-lg mb-4 w-full h-auto"
            />
            <h3 class="text-2xl font-semibold mb-2 text-yellow-900 uppercase">
              Un Choix Conscient et Savoureux
            </h3>
            <p class="text-yellow-900">
              Avec AgriBio, vous faites plus qu’acheter des fruits et légumes :
              vous rejoignez un mouvement pour une agriculture responsable et un
              mode de vie plus sain.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Inscription à la newsletter -->
    <section class="py-20 bg-green-900 text-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4 uppercase">
          Ne ratez plus nos récoltes 🌱
        </h2>
        <p class="mb-8 text-lg">
          Inscrivez-vous à notre newsletter et recevez en avant-première nos
          offres exclusives.
        </p>
        <form id="newsletter-form" action="/api/newsletter" method="POST">
          <input
            type="email"
            id="email"
            name="email"
            class="p-4 rounded-md text-green-900 w-full max-w-md mx-auto"
            placeholder="Entrez votre adresse email"
            required
          />
          <button
            type="submit"
            class="bg-yellow-400 hover:bg-yellow-200 hover:text-green-900 text-yellow-900 font-bold py-4 px-8 rounded-md mt-4 transition transform hover:scale-105 uppercase"
          >
            S'inscrire Maintenant
          </button>
        </form>
      </div>
    </section>

    <!-- Section Témoignages -->
    <section class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8 text-yellow-900 uppercase">
          Ce que disent nos clients
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div class="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h4 class="font-semibold mt-4 text-yellow-900">⭐️⭐️⭐️⭐️⭐️ Camille D.</h4>
            <p class="text-yellow-900 italic">
              “Depuis que j'ai découvert AgriBio, je ne peux plus acheter mes
              fruits et légumes ailleurs. Les produits sont toujours ultra
              frais, on sent vraiment la différence dans le goût. Et savoir que
              tout vient directement du producteur, c'est un vrai plus pour moi
              !”
            </p>
          </div>
          <div class="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h4 class="font-semibold mt-4 text-yellow-900">⭐️⭐️⭐️⭐️⭐️ Julien L.</h4>
            <p class="text-yellow-900 italic">
              “Une qualité irréprochable et un service au top ! Les légumes sont
              gorgés de saveurs, ça change des produits standards qu'on trouve
              en grande surface. Je suis ravi de contribuer à une agriculture
              plus respectueuse tout en régalant ma famille.”
            </p>
          </div>
          <!-- Autres témoignages -->
        </div>
      </div>
    </section>

     Section de pied de page 
    <footer class="bg-green-900 text-white py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 AgriBio. Tous droits réservés.</p>
        <p class="mt-4">
          <a href="#" class="hover:underline">Politique de Confidentialité</a> |
          <a href="#" class="hover:underline">Mentions Légales</a>
        </p>
      </div>
    </footer>

    <!-- Pop-up de confirmation d'inscription -->
    <div
      id="popup"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden"
    >
      <div
        class="bg-white text-yellow-900 rounded-lg shadow-lg p-6 text-center"
      >
        <h2 class="text-2xl font-semibold mb-4">Merci pour votre inscription !</h2>
        <p>
          Vous êtes désormais abonné(e) à notre newsletter et recevrez nos
          dernières actualités.
        </p>
        <button
          id="close-popup"
          class="bg-yellow-400 hover:bg-yellow-200 hover:text-green-900 text-yellow-900 font-bold py-2 px-4 rounded-md mt-6 transition transform hover:scale-105"
        >
          Fermer
        </button>
      </div>
    </div>

    <script src="app.js"></script>
  </body>
</html>
