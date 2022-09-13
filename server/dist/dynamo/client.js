"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddbClient = exports.REGION = void 0;
// Create the DynamoDB service client module using ES6 syntax.
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
// Set the AWS Region.
exports.REGION = "us-west-1"; // For example, "us-east-1".
// Create an Amazon DynamoDB service client object.
exports.ddbClient = new client_dynamodb_1.DynamoDBClient({ region: exports.REGION });
