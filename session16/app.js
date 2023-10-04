const express = require("express");
const app = express();

const pokemonRoutes = require("./routes/pokemon");
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);
app.use("/api/pokemons", pokemonRoutes);

if (process.env.NODE_ENV !== "test") {
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
