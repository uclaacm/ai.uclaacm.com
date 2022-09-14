"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const docClient_1 = require("./docClient");
const putItem = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: 'acm-ai-users',
        Item: {
            "username": user.username,
            "password": user.password,
            "favoriteDessert": user.favoriteDessert
        },
    };
    console.log("inside wrapper");
    try {
        const data = yield docClient_1.ddbDocClient.send(new lib_dynamodb_1.PutCommand(params));
        console.log("Success - item added or updated", data);
    }
    catch (err) {
        if (typeof err === "string") {
            err.toUpperCase(); // works, `e` narrowed to string
            throw new Error(err);
        }
        else if (err instanceof Error) {
            throw new Error(err.message); // works, `e` narrowed to Error
        }
    }
});
exports.putItem = putItem;
