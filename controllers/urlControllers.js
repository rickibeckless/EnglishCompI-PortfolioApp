import express from "express";
import path from "path";
import url from "url";

const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

export const homeUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
};

export const aboutUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "pages/about.html"));
};