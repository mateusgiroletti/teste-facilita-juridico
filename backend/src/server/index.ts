import express from "express";
import { makeCreateClientController } from "../app/factories/makeCreateClientController";

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT;

app.post("/client", makeCreateClientController());

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});