import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});