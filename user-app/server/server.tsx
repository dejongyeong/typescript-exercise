import bodyParser from "body-parser";
import express from "express";
import { getUsers } from "./routes/users";

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

// users
app.get("/users", getUsers);
