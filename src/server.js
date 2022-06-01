import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);



const home = (req,res) => {
    return res.send("I still love you");
}
const login = (req,res) => {
    return res.send("login here");
}

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.get("/", home);
app.get("/login",login);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} ☞☞`);

app.listen(PORT, handleListening);