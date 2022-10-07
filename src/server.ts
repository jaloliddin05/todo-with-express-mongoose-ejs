import * as dotenv from "dotenv";
import * as express from "express";
import * as cookieParser from "cookie-parser";
import router from "./routs";
dotenv.config();

const app: express.Application = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);
app.use("/*", (_, res) => res.redirect("/register"));

app.listen(2222, () => console.log(2222));
