import express from "express";

const app = express();

app.use(express.json());

const PORT = 8008;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. Ready to accept requests!`);
});

app.get("/api/pokemon", function (req, res) {
  const allPokemon = [
    { name: "Pikachu", colour: "yellow" },
    { name: "Charmander", colour: "orange" },
    { name: "Squirtle", colour: "blue" },
  ];

  res.json(allPokemon);
});

app.get("/api/pokemon2", function (req, res) {
  console.log("Query string: ", req.query);

  const allPokemon = [
    { name: "Pikachu", colour: "yellow" },
    { name: "Charmander", colour: "orange" },
    { name: "Squirtle", colour: "blue" },
  ];

  res.json(allPokemon);
});

app.get("/api/pokemon3", function (req, res) {
  const queryStringColour = req.query.colour;

  let allPokemon = [
    { name: "Pikachu", colour: "yellow" },
    { name: "Charmander", colour: "orange" },
    { name: "Squirtle", colour: "blue" },
  ];

  // if we have a colour, use filter to include all the pokemon matching our colour query string
  let filteredPokemon = allPokemon;
  if (queryStringColour) {
    filteredPokemon = allPokemon.filter(function (pokemon) {
      return pokemon.colour === queryStringColour;
    });
  }

  res.json(filteredPokemon);
});
