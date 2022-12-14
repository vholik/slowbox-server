import express from "express";
import mongoose from "mongoose";
import TrackRouter from "./routes/TrackRouter.js";
import PlaylistRouter from "./routes/PlaylistRouter.js";
import AuthRouter from "./routes/AuthRouter.js";
import FavoriteRouter from "./routes/FavoriteRouter.js";
import SearchRouter from "./routes/SearchRouter.js";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/tracks", TrackRouter);
app.use("/playlists", PlaylistRouter);
app.use("/auth", AuthRouter);
app.use("/favorites", FavoriteRouter);
app.use("/search", SearchRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(port, () => {
      console.log("App is working");
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
