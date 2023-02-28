const express = require("express");
const cors = require("cors");

const { games } = require("./games.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Retro Game API");
});

app.get("/api/games", (req, res) => {
  res.send(games);
});

app.get("/api/games/game-boy-advance/:genre", (req, res) => {
  const genre = req.params.genre;
  const resultados = games.gameboyadvance.filter(
    (game) => game.genre === genre
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron juegos ${genre}`);
  }
  res.send(JSON.stringify(resultados));
});

app.get('/api/games/top10', (req, res) => {
  res.send(JSON.stringify(games.top10))
})

app.get('/api/games/recomendados', (req, res) => {
  res.send(JSON.stringify(games.recomendados))
})

app.get("/api/games/super-nintendo", (req, res) => {
  res.send(JSON.stringify(games.supernintendo));
});

app.get("/api/games/super-nintendo/id/:id", (req, res) => {
  const game = games.supernintendo.find(
    (c) => c.id === parseInt(req.params.id)
  );
  if (!game) return res.status(404).send("Juego no encontrado");
  else res.send(game);
})

app.get("/api/games/game-boy-advance", (req, res) => {
  res.send(JSON.stringify(games.gameboyadvance));
});

app.get("/api/games/game-boy-advance/id/:id", (req, res) => {
  const game = games.gameboyadvance.find(
    (c) => c.id === parseInt(req.params.id)
  );
  if (!game) return res.status(404).send("Juego no encontrado");
  else res.send(game);
});

app.get("/api/games/nintendo-ds", (req, res) => {
  res.send(JSON.stringify(games.nintendods));
});

app.get("/api/games/nintendo-ds/id/:id", (req, res) => {
  const game = games.nintendods.find((c) => c.id === parseInt(req.params.id));
  if (!game) return res.status(404).send("Juego no encontrado");
  else res.send(game);
});

const PORT = process.env.PORT || 3197;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
