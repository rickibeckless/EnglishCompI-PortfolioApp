import express from "express";
import { homeUrl, aboutUrl, directoryUrl, pOneUrl, } from "../controllers/urlControllers.js";

const router = express.Router();

router.get('/', homeUrl);
router.get('/about-me', aboutUrl);
router.get('/directory', directoryUrl);
router.get('/i-live-for-me', pOneUrl);

export default router;