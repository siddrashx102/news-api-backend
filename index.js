const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = 5000;
// const cors = require("cors");

dotenv.config(); // Ensure the path is correct and relative

console.log("API Key:", process.env.NEWS_API_KEY0); // Add a label for clarity

// Use cors middleware to enable CORS
// app.use(
//   cors({
//     origin: "http://192.168.29.243:3000", // Or '*' to allow all origins
//   })
// );

app.get("/api/news", async (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${req.query.category}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY0}&page=${req.query.page}&pageSize=${req.query.pageSize}`;
  const response = await fetch(url);
  const data = await response.json();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
  console.log(data);
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
