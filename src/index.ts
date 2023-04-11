import express from 'express';

const app = express();
app.listen(80, () => {
  console.log(`server running on port 80`);
});

app.get(`/`, (req, res) => {
  res.send(`Hello, world!`);
});

