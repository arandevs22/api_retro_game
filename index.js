const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const games = [
  {
    id: 1,
    refence: "go:gm01",
    console: "Game Boy Advance",
    genre: "shooter",
    title: "Metal slug Advance",
    poster:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/29ab124d059e51600744303ec829069e.jpg",
    logo: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/66410adefc38da1e9486483597c15518.png",
    background:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/20877befbd58c865e224346e6b92d772.jpg",
    favorite: false,
  },
  {
    id: 2,
    refence: "go:gm02",
    console: "Game Boy Advance",
    genre: "peleas",
    title: "Dragon Ball: Advanced Adventure",
    poster:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/a7843ff15ebf9f9b7ceda39eb8b1f117.jpg",
    logo: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/dcb8dc74a2a76e9e90526ddbfd759ba7.png",
    background:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/68c16354b766f0b3cb1c00299e08d485.jpg",
    favorite: false,
  },
  {
    id: 3,
    refence: "go:gm03",
    console: "Game Boy Advance",
    genre: "plataforma",
    title: "Castlevania: Aria Of Sorrow",
    poster:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/00a2c01b0d106174280311c645ffe21f.jpg",
    logo: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/370caceecffaa11d5c0fe2dfefa413c1.png",
    background:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/39ecc5282d4511dca4c757113e1312d1.jpg",
    favorite: false,
  },
];

app.get("/", (req, res) => {
  res.send("Retro Game API");
});

app.get("/api/games", (req, res) => {
  res.send(games);
});

app.get("/api/games/:id", (req, res) => {
  const game = games.find((c) => c.id === parseInt(req.params.id));
  if (!game) return res.status(404).send("Juego no encontrado");
  else res.send(game);
});

app.post("/api/games", (req, res) => {
  const game = {
    id: games.length + 1,
    refence: req.body.refence,
    console: req.body.console,
    genre: req.body.genre,
    title: req.body.title,
    poster: req.body.poster,
    logo: req.body.logo,
    background: req.body.background,
    favorite: req.body.favorite === "false",
  };

  games.push(game);
  res.send(game);
});

app.delete("/api/games/:id", (req, res) => {
  const game = games.find((c) => c.id === parseInt(req.params.id));
  if (!game) return res.status(404).send("Juego no encontrado");

  const index = games.indexOf(game);
  games.splice(index, 1);
  res.send(game);
});

const PORT = process.env.PORT || 3197;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
