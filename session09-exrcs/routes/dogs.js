const express = require("express");
const axios = require("axios");
const redis = require("redis");

const router = express.Router();

router.get("/:breed", async (req, res) => {
  const redisClient = await redis.createClient(6379).connect();
  const { breed } = req.params;

  let data = await redisClient.get(breed);
  if (data === null) {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images`
    );
    data = response.data.message;
    await redisClient.set(breed, JSON.stringify(data), {
      EX: 3600,
    });
  } else {
    data = JSON.parse(data);
  }
  res.json({
    ok: true,
    data,
  });
  redisClient.disconnect();
});

module.exports = router;
