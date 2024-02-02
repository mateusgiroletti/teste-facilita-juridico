import express from "express";
import { makeCreateClientController } from "../app/factories/makeCreateClientController";
import { routeAdapter } from "./routeAdapter";
import { makeListClientController } from "../app/factories/makeListClientController";

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT;

app.get("/client", routeAdapter(makeListClientController()));
app.post("/client", routeAdapter(makeCreateClientController()));

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});