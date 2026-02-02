# Spécification : Définition des données des radars

**Titre** : Définir le schéma des données des radars récupérées

**Description** :  
Les données des radars récupérées via l'API doivent respecter un schéma JSON précis. Ce schéma garantit la cohérence des informations affichées sur la carte et leur conformité avec les types de radars pris en charge.

---

## Schéma des données

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "RadarLocation",
  "type": "object",
  "required": ["id", "latitude", "longitude", "type"],
  "properties": {
    "id": {
      "type": "string",
      "description": "Identifiant du radar"
    },
    "latitude": {
      "type": "number",
      "minimum": -90,
      "maximum": 90
    },
    "longitude": {
      "type": "number",
      "minimum": -180,
      "maximum": 180
    },
    "type": {
      "type": "string",
      "enum": ["FIXE", "FEU_ROUGE", "TRONCON"]
    }
  }
}
```

---

## Exigences fonctionnelles

1. **Validation des données** :

   - Les données récupérées doivent être conformes au schéma JSON ci-dessus.
   - Toute donnée non conforme doit être rejetée avec un message d'erreur approprié.

2. **Propriétés obligatoires** :

   - `id` : Identifiant unique du radar.
   - `latitude` et `longitude` : Coordonnées géographiques du radar.
   - `type` : Type de radar, qui doit être l'une des valeurs suivantes :
     - `FIXE` : Radar fixe.
     - `FEU_ROUGE` : Radar de feu rouge.
     - `TRONCON` : Radar de tronçon.

3. **Gestion des erreurs** :

   - Si une propriété obligatoire est manquante ou invalide, une erreur doit être renvoyée.
   - Les coordonnées doivent respecter les limites géographiques (latitude : -90 à 90, longitude : -180 à 180).

---

## Critères de succès

1. Les données des radars récupérées respectent le schéma JSON.
2. Les radars sont correctement affichés sur la carte avec leurs coordonnées et leur type.
3. Les erreurs de validation sont gérées et communiquées clairement.

---

## Assomptions et dépendances

1. Le schéma JSON est utilisé pour valider les données côté serveur et/ou client.

2. Les données des radars sont fournies par une API conforme à ce schéma.

