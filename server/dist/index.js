"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./routes/users"));
dotenv_1.default.config();
var app = (0, express_1.default)();
const port = process.env.PORT;
// health GET
app.get('/health', (req, res) => {
    res.send('Express + TypeScript server running!');
});
// asks the server to import routes from routes/users
app.use('/users', users_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
