import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from './docClient';
import { newUser } from '../types/userTypes';

export const putItem = async (user: newUser) => {
  const params = {
    TableName: 'acm-ai-users',
    Item: {
      "username": user.username,
      "password": user.password,
      "favoriteDessert": user.favoriteDessert
    },
  }
  console.log("inside wrapper")
  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log("Success - item added or updated", data);
  } catch (err) { 
      if (typeof err === "string") {
          err.toUpperCase() // works, `e` narrowed to string
          throw new Error(err)
      } else if (err instanceof Error) {
          throw new Error(err.message) // works, `e` narrowed to Error
      }
  }
};