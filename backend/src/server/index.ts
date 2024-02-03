import express from "express";
import cors from "cors";

import { makeCreateClientController } from "../app/factories/makeCreateClientController";
import { routeAdapter } from "./routeAdapter";
import { makeListClientController } from "../app/factories/makeListClientController";

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.SERVER_PORT;

app.get("/clients", routeAdapter(makeListClientController()));
app.post("/clients", routeAdapter(makeCreateClientController()));

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});