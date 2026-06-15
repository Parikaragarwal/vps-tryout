import cors from "cors";
import express from "express";
// const app = ((await import('express')).default)()

const app = express();
const PORT = 8212;

app.use(cors({
  origin: ['http://localhost:5173','http://localhost:5174']
}));

app.get("/", (req, res) => {
  return res.json({
    message: "Sevrer is up and running",
  });
});

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`),
);
