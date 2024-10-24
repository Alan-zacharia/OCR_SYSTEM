import express from 'express';
import morgan from 'morgan';
import envConfig from "./config/envConfig";
import cors from 'cors';
import userRouter from "./routes/userRouter";

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(morgan("dev"));

app.use("/api/", userRouter);

app.listen(envConfig.PORT, () => {
  console.log("Server runing ----- >", envConfig.PORT);
});
