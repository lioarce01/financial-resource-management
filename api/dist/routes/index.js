"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./userRoute"));
const plaidRoute_1 = __importDefault(require("./plaidRoute"));
const accountsRoute_1 = __importDefault(require("./accountsRoute"));
const router = express_1.default.Router();
router.use("/users", userRoute_1.default);
router.use("/plaid", plaidRoute_1.default);
router.use("/accounts", accountsRoute_1.default);
exports.default = router;
