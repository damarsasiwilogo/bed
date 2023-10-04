const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results } = data;
    res.json(results);
  } catch (error) {
    console.log("Error fetching Pokemons", error);
    res.status(500).send("An error occurred when fetching Pokemons");
  }
});

module.exports = router;
