const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    email: "temiq3@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "<https://github.com/temixxx555/HNG-STAGE-0>",
  });
});

app.listen(PORT, () => {
  console.log(`server is successfully running on http://localhost:${PORT}`);
});
