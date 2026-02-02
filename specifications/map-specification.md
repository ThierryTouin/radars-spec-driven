# Spécification : Afficher une carte interactive avec localisation et radars

**Titre** : Afficher une carte interactive avec localisation et radars

**Description** :  
Créer une page HTML qui affiche une carte interactive. L'utilisateur peut sélectionner une ville en haut de la page, et la carte se centre sur cette localisation. À terme, la carte affichera les positions des radars avec leurs caractéristiques (fixe, mobile, tronçon, feu).

---

## Scénarios utilisateur

1. **Sélection de ville** :  
   L'utilisateur peut sélectionner une ville dans une liste déroulante. La carte se centre automatiquement sur la localisation de la ville sélectionnée.

2. **Affichage des radars (futur)** :  
   Les radars seront affichés sur la carte avec des icônes spécifiques selon leur type :
   - Fixe
   - Mobile
   - Tronçon
   - Feu

---

## Exigences fonctionnelles

1. **Carte interactive** :  
   - Utiliser une bibliothèque de cartographie (par exemple, Leaflet.js ou Google Maps).
   - La carte doit être centrée sur une localisation par défaut (ex. : Paris).

2. **Sélection de ville** :  
   - Une liste déroulante doit permettre de sélectionner une ville.
   - La carte doit se recentrer automatiquement sur la ville sélectionnée.

3. **Affichage des radars (futur)** :  
   - Préparer la structure pour afficher les radars avec leurs caractéristiques.
   - Les radars doivent être représentés par des icônes spécifiques.

---

## Critères de succès

1. La carte se charge correctement et affiche la localisation par défaut.
2. L'utilisateur peut changer de ville et voir la carte se recentrer.
3. La structure est prête pour intégrer les radars.

---

## Assomptions et dépendances

1. Une bibliothèque de cartographie (comme Leaflet.js) sera utilisée.
2. Les données des radars (localisation et caractéristiques) seront fournies ultérieurement via une API ou un fichier JSON.