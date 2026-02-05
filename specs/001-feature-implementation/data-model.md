# Modèle de données

## Entités

### Radar

- **id** : Identifiant unique (UUID)

- **type** : Type de radar (fixe, mobile, tronçon, feu)

- **localisation** : Référence à l'entité `Localisation`

- **caractéristiques** : Détails spécifiques au radar (vitesse limite, etc.)

### Localisation

- **id** : Identifiant unique (UUID)

- **latitude** : Coordonnée géographique (float)

- **longitude** : Coordonnée géographique (float)

- **ville** : Nom de la ville (string)

## Relations

- Un `Radar` est associé à une `Localisation` unique.

## Règles de validation

- Les coordonnées doivent être valides (latitude entre -90 et 90, longitude entre -180 et 180).

- Le type de radar doit appartenir à une liste prédéfinie : [fixe, mobile, tronçon, feu].