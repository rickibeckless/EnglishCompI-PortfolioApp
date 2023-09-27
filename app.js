import express from "express";
import path from "path";
import url from 'url';

const app = express();
const port = 8080;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve(__dirname, 'public');

app.use(express.json());
app.use(express.static(publicPath));

// ↓↓ if all goes to shit RETREAT! ↓↓
// app.use(express.static("./public"));

app.get('/home', (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"))
})


app.listen(port, () => {
    console.log("Eng.Comp.Port App now listening on port " + port);
});