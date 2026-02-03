# Spécification technique : Afficher une carte interactive avec localisation et radars

## Technologies et bibliothèques

1. **Bibliothèque de cartographie** :
   - Utiliser une bibliothèque comme Leaflet.js ou Google Maps pour afficher la carte interactive.

2. **Dépendances** :
   - Les données des radars (localisation et caractéristiques) seront fournies ultérieurement via une API ou un fichier JSON.

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