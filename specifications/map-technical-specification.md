# Spécification technique : Afficher une carte interactive avec localisation et radars

## Technologies et bibliothèques

1. **Bibliothèque de cartographie** :
   - Utiliser une bibliothèque comme Leaflet.js ou Google Maps pour afficher la carte interactive.

2. **Dépendances** :
   - Les données des radars (localisation et caractéristiques) sont fournies via un appel aux APIs de l'état Français.

3. **Language** :
   - Le code source de l'application est nodejs.

4. **Docker** :
   - Pour installer et déployer l'application, seulement docker et docker compose seront necessaires. Toutes les executions nodejs (build, installation des dépedances, ...) seront donc faites à l'intérieur d'un container.

5. **Script** :
   - Un script bash unique permettra de lancer les commandes dockers pour installer, builder, executer l'application. Pas besoin de documentation sur le script puisqu'un item 'help' sera une option du menu.
   - Executer le script s'en option (ou avec une option inexistante) affichera le menu d'aide.
   - Executer le script avec un option existante lancera la commande et rendre la main à la fin. (A part, pour le menu affichant des logs par exemple).

---

## Implémentation technique

1. **Carte interactive** :
   - Charger la carte centrée sur une localisation par défaut (ex. : Paris).
   - Configurer les options de zoom et de navigation.

2. **Sélection de ville** :
   - Implémenter une liste déroulante pour permettre la sélection d'une ville.
   - Utiliser un événement pour recentrer la carte sur la localisation de la ville sélectionnée.

3. **Affichage des radars (futur)** :
   - Préparer la structure pour intégrer les données des radars.
   - Définir des icônes spécifiques pour chaque type de radar (fixe, mobile, tronçon, feu).

---

## Assomptions et dépendances

1. Une bibliothèque de cartographie (comme Leaflet.js) sera utilisée.
2. Les données des radars (localisation et caractéristiques) seront fournies ultérieurement via une API ou un fichier JSON.