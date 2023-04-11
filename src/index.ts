import express from 'express';

const app = express();
app.listen(80, () => {
  console.log(`server running on port 80`);
});

