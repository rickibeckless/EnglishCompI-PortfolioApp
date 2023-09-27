import express from "express";
import { homeUrl, aboutUrl } from "../controllers/urlControllers.js";

const app = express();
const router = express.Router();

app.use(express.json());

router.get('/home', homeUrl);
router.get('/about-me', aboutUrl);

export default router;