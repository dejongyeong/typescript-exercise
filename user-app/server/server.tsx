import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { getUser, getUsers } from "./routes/users";

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

// users
app.get("/users", getUsers);
app.get("/users/:id", getUser);

app.listen(port, () => console.log(`Listening on port ${port}`));
