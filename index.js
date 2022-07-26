import dotenv from "dotenv";

dotenv.config();

import express from "express";

import sequelize from "./models/dbconfig.js";

import shortURLRoutes from "./routes/shortURLRoutes.js";

import ShortURL from "./models/shortURL.js";

// When set to true the existing database will be dropped on startup

sequelize.sync({ force: false });

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use("/api", shortURLRoutes.routes);

app.get("/", async (req, res) => {
  res.render("pages/index");
});

app.get("/:shortKey", async (req, res) => {

  ShortURL.findOne({ where: { shortKey: req.params.shortKey } })
    .then((short) => {

      if (short !== null) {

        console.log("Found short url", short);

        let { redirect } = short.dataValues;

        res.status(301).redirect(redirect);

      } else {

        res.render("pages/index");
      }

    })
    .catch((err) => {
      console.log(err);
      res.render("pages/index");
    });
});

app.use(express.static("public"));

app.listen(process.env.PORT);

console.log("Running on localhost:", process.env.PORT);
