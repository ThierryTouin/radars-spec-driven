const radars = [
  {
    id: "1",
    type: "fixe",
    localisation: {
      id: "loc1",
      latitude: 48.8566,
      longitude: 2.3522,
      ville: "Paris",
    },
  },
  {
    id: "2",
    type: "mobile",
    localisation: {
      id: "loc2",
      latitude: 43.7102,
      longitude: 7.262,
      ville: "Nice",
    },
  },
];

// Handler for GET /radars
const getRadars = (req, res) => {
  res.status(200).json(radars);
};

// TODO: Remplacer les données mockées par des appels à l'API de l'État pour récupérer les radars.

module.exports = { getRadars };