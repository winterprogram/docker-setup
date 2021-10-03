const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

client.set("visit", 0);
app.get("/", (req, res) => {
  client.get("visit", (err, visit) => {
    console.log(visit);
  });
  res.send("Hi There");
});

app.listen(8080, () => {
  console.log("App running in port 8080");
});
