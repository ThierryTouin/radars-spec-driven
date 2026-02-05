# Quickstart

## Prérequis

- **Node.js** : Assurez-vous que Node.js est installé (version recommandée : 16.x ou supérieure).
- **Docker** : Installez Docker et Docker Compose.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/ThierryTouin/radars-spec-driven.git
   cd radars-spec-driven
   ```

2. Basculez sur la branche de fonctionnalité :

   ```bash
   git checkout 001-feature-implementation
   ```

3. Construisez et démarrez les conteneurs Docker :

   ```bash
   docker-compose up --build
   ```

## Utilisation

- Accédez à l'API via `http://localhost:3000`.
- Endpoints disponibles :
  - `GET /radars` : Récupérer la liste des radars.
  - `GET /radars/{id}` : Récupérer les détails d'un radar spécifique.

## Tests

1. Lancez les tests unitaires :

   ```bash
   npm run test
   ```

2. Effectuez des tests de charge avec Locust :

   ```bash
   locust -f load_tests.py
   ```

---

Pour plus de détails, consultez la documentation complète dans le dossier `specifications/`.
