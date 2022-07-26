import shortURL from "../models/shortURL.js";
import { nanoid } from "nanoid";

export const saveShortURL= async (req, res) => {
  const short = {
    redirect: req.body.redirect,
    shortKey: nanoid(10)
  };

  console.log(short);

  await shortURL.create(short)
    .then(() => {
      res.json({
        status: 200,
        shortKey: short.shortKey,
        message: "Short URL created successfully"
      });
    })
    .catch((err) => {
      console.log(err);

      res.json({
        status: 400,
        message: "Failed to shorten URL"
      })
    });
};
