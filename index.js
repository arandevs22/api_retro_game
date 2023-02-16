const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const games = [
  {
    id: 1,
    reference: "go:gm01",
    console: "Game Boy Advance",
    genre: "Shooter",
    title: "Metal slug Advance",
    year: "2004",
    poster:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/29ab124d059e51600744303ec829069e.jpg",
    logo: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/66410adefc38da1e9486483597c15518.png",
    background:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/20877befbd58c865e224346e6b92d772.jpg",
    rom: "https://f004.backblazeb2.com/file/arandevs2022/cloud-retro-gaming/roms/gameboy-advance/Metal%20Slug%20Advance%20%28U%29%20%281%29.gba",
    favorite: false,
  },
  {
    id: 2,
    reference: "go:gm02",
    console: "Game Boy Advance",
    genre: "Peleas",
    title: "Dragon Ball: Advanced Adventure",
    year: "2004",
    poster:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/a7843ff15ebf9f9b7ceda39eb8b1f117.jpg",
    logo: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/dcb8dc74a2a76e9e90526ddbfd759ba7.png",
    background:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/68c16354b766f0b3cb1c00299e08d485.png",
    rom: "https://f004.backblazeb2.com/file/arandevs2022/cloud-retro-gaming/roms/gameboy-advance/Dragon%20Ball%20-%20Advanced%20Adventure%20%28USA%29.gba",
    favorite: false,
  },
  {
    id: 3,
    reference: "go:gm03",
    console: "Game Boy Advance",
    genre: "plataforma",
    title: "Castlevania: Aria Of Sorrow",
    year: "2004",
    poster:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/00a2c01b0d106174280311c645ffe21f.jpg",
    logo: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/370caceecffaa11d5c0fe2dfefa413c1.png",
    background:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/39ecc5282d4511dca4c757113e1312d1.png",
    rom: "https://f004.backblazeb2.com/file/arandevs2022/cloud-retro-gaming/roms/gameboy-advance/Castlevania%20-%20Aria%20of%20Sorrow%20%28USA%29.gba",
    favorite: false,
  },
  {
    id: 4,
    reference: "go:gm04",
    console: "Game Boy Advance",
    genre: "Peleas",
    title: "Dragon Ball Z: Supersonic Warriors",
    year: "2004",
    poster:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/0cbe5209d15e66b1cbe4109f3d6e742a.jpg",
    logo: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/d69768b3da745b77e82cdbddcc8bac98.png",
    background:
      "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/9be681ea06f52111e4c1ef99d3763770.png",
    rom: "https://arandevs2022.s3.us-west-004.backblazeb2.com/cloud-retro-gaming/roms/gameboy-advance/Dragon+Ball+Z+-+Supersonic+Warriors+(USA).gba",
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
