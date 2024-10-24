import { Router } from "express";
import upload from "../middlewares/multer";
import { AadharImageFIleParser } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/uploads", upload.array("uploads"), AadharImageFIleParser);

export default userRouter;
