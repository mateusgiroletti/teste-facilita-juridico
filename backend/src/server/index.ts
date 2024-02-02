import express from "express";
import { makeCreateClientController } from "../app/factories/makeCreateClientController";
import { routeAdapter } from "./routeAdapter";

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT;

app.post("/client", routeAdapter(makeCreateClientController()));

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});