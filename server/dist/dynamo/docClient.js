"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddbDocClient = void 0;
// Create a service client module using ES6 syntax.
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const client_1 = require("./client");
const marshallOptions = {
    // Whether to automatically convert empty strings, blobs, and sets to `null`.
    convertEmptyValues: false,
    // Whether to remove undefined values while marshalling.
    removeUndefinedValues: true,
    // Whether to convert typeof object to map attribute.
    convertClassInstanceToMap: false, // false, by default.
};
const unmarshallOptions = {
    // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
    wrapNumbers: false, // false, by default.
};
const translateConfig = { marshallOptions, unmarshallOptions };
// Create the DynamoDB document client.
const ddbDocClient = lib_dynamodb_1.DynamoDBDocumentClient.from(client_1.ddbClient, translateConfig);
exports.ddbDocClient = ddbDocClient;
