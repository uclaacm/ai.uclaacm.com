import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from './docClient';
import { newUser } from '../types/userTypes';

export const putItem = async (user: newUser) => {
  const params = {
    TableName: 'acm-ai-users',
    Item: user,
  }
  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log("Success - item added or updated", data);
  } catch (err) { 
      if (typeof err === "string") {
          err.toUpperCase() // works, `e` narrowed to string
          console.log(err)
      } else if (err instanceof Error) {
          console.log(err.message) // works, `e` narrowed to Error
      }
  }
};