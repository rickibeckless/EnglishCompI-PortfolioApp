import express from "express";
import { homeUrl, aboutUrl, directoryUrl, reflectionUrl, pOneUrl, pTwoUrl, pThreeUrl, roughUrl, } from "../controllers/urlControllers.js";

const router = express.Router();

router.get('/', homeUrl);
router.get('/about', aboutUrl);
// router.get('/directory', directoryUrl);
router.get('/reflections', reflectionUrl);
router.get('/rough-drafts', roughUrl);
router.get('/this-i-believe', pOneUrl);
router.get('/civilian-soldiers', pTwoUrl);
router.get('/project-three', pThreeUrl);

export default router;