# Spécification : Récupération des radars en fonction de la localisation

**Titre** : Récupérer la liste des radars en fonction de la localisation choisie

**Description** :  
Lorsqu'un utilisateur sélectionne une localisation sur la carte, une requête est envoyée à une API Node.js hébergée dans un conteneur Docker. Cette API interagit avec les API gouvernementales pour récupérer les informations sur les radars (localisation et caractéristiques) et les renvoie au client.

---

## Scénarios utilisateur

1. **Sélection de localisation** :  
   L'utilisateur sélectionne une ville ou une zone sur la carte. Une requête est envoyée pour récupérer les radars dans cette zone.

2. **Affichage des radars** :  
   Les radars récupérés sont affichés sur la carte avec des icônes spécifiques selon leur type (fixe, mobile, tronçon, feu).

3. **Gestion des erreurs** :  
   Si l'API gouvernementale ou le serveur Node.js rencontre une erreur, un message d'erreur est affiché à l'utilisateur.

---

## Exigences fonctionnelles

1. **API Node.js** :  
   - L'API doit exposer un endpoint `/radars` qui accepte des paramètres de localisation (latitude, longitude, rayon).
   - L'API doit interroger les API gouvernementales pour récupérer les données des radars.
   - Les données doivent être filtrées et formatées avant d'être renvoyées au client.

2. **Interaction avec les API gouvernementales** :  
   - L'API Node.js doit se connecter aux API gouvernementales pour récupérer les informations des radars.
   - Les appels doivent inclure des clés API ou des authentifications nécessaires.

3. **Conteneur Docker** :  
   - Le serveur Node.js doit être exécuté dans un conteneur Docker.
   - Un fichier `Dockerfile` doit être fourni pour construire l'image.
   - Le conteneur doit être configuré pour exposer le port de l'API.

4. **Carte interactive** :  
   - Lorsqu'une localisation est sélectionnée, une requête est envoyée à l'API Node.js.
   - Les radars récupérés sont affichés sur la carte avec des icônes spécifiques.

5. **Gestion des erreurs** :  
   - Si l'API gouvernementale ne répond pas, l'API Node.js doit renvoyer un message d'erreur clair.
   - Le client doit afficher un message d'erreur utilisateur-friendly.

---

## Critères de succès

1. L'API Node.js renvoie les radars correspondant à la localisation choisie.
2. Les radars sont affichés correctement sur la carte avec des icônes spécifiques.
3. Les erreurs (API gouvernementale ou serveur) sont gérées et affichées clairement à l'utilisateur.
4. Le conteneur Docker est fonctionnel et permet de déployer facilement l'API.

---

## Assomptions et dépendances

1. Les données des radars sont disponibles via des API gouvernementales.
2. Les clés API nécessaires pour interagir avec les API gouvernementales sont disponibles.
3. L'utilisateur dispose d'une connexion Internet pour interagir avec l'API Node.js et les API gouvernementales.
