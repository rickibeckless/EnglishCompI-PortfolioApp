import express from "express";
import { homeUrl, aboutUrl, directoryUrl, reflectionUrl, pOneUrl, pTwoUrl, pThreeUrl, } from "../controllers/urlControllers.js";

const router = express.Router();

router.get('/', homeUrl);
router.get('/about-me', aboutUrl);
// router.get('/directory', directoryUrl);
router.get('/reflections', reflectionUrl);
router.get('/project-one', pOneUrl);
router.get('/project-two', pTwoUrl);
router.get('/project-three', pThreeUrl);

export default router;