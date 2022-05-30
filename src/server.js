import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} ☞☞`);
const handleHome = (req,res) => {
    return res.send("I still love you");
}
const handleLogin = (req,res) => {
    return res.send("login here");
}

app.listen(PORT, handleListening);
app.get("/", handleHome);
app.get("/login",handleLogin);