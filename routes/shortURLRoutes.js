import Router from "express";

import { saveShortURL } from "../controllers/shortURLController.js";

const router = Router();

router.post("/shortURL", saveShortURL);

export default {
  routes: router,
};
