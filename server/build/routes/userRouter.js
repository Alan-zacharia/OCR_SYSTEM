"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../middlewares/multer"));
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
userRouter.post("/uploads", multer_1.default.array("uploads"), userController_1.AadharImageFIleParser);
exports.default = userRouter;
