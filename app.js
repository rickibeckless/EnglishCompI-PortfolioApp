import express from "express";

const app = express();

app.use(express.json());

app.use(express.static("./public"));

// app.use("/");

app.listen(8080, () => {
    console.log("Eng.Comp.Port App now listening on port 8080");
});