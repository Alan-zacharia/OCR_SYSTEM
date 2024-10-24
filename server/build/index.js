"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const envConfig_1 = __importDefault(require("./config/envConfig"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: envConfig_1.default.CLIENT_URL,
}));
app.use((0, morgan_1.default)("dev"));
app.use("/api/", userRouter_1.default);
app.listen(envConfig_1.default.PORT, () => {
    console.log("Server runing ----- >", envConfig_1.default.PORT);
});
