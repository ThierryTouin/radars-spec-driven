# Recherche pour la fonctionnalité

## Points nécessitant des clarifications

1. **Langage/Version** : Node.js a été choisi, mais vérifier si des versions spécifiques des dépendances (Leaflet.js, autres bibliothèques) sont nécessaires.
2. **Objectifs de performance** : Confirmer que 1000 req/s est réaliste avec les contraintes actuelles.
3. **Tests** : Déterminer si des outils supplémentaires sont nécessaires pour les tests de charge.

## Décisions

### Langage/Version

- **Décision** : Utiliser Node.js.

- **Rationale** : Aligné avec les spécifications techniques et les dépendances nécessaires.

- **Alternatives** : Python (non conforme aux spécifications).

### Objectifs de performance

- **Décision** : Maintenir 1000 req/s comme objectif.

- **Rationale** : Aligné avec les besoins des utilisateurs.

- **Alternatives** : Réduire à 500 req/s (non nécessaire).

### Tests

- **Décision** : Ajouter locust pour les tests de charge.

- **Rationale** : Permet de simuler des charges réalistes.

- **Alternatives** : Utiliser uniquement pytest (insuffisant pour les tests de charge).

---

Ce document sera mis à jour au fur et à mesure des recherches.