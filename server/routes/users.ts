import express, { Express, Request, Response, NextFunction } from 'express';
import * as AWS from 'aws-sdk'
import * as ddb from '../dynamo/wrappers'
import { User, newUser } from '../types/userTypes';

const router = express.Router()

// Set the region - probably not needed if passed down to route
// AWS.config.update({region: 'us-west-1'});

/* GET all users. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

/* POST new user details on db - aka create user */
router.post('/', async function(req: Request, res: Response, next: NextFunction){
  console.log("inside post")
  const username = req.body.username;
  const password = req.body.password;
  const favoriteDessert = req.body.favoriteDessert;

  const newUser: newUser = {
    username: username!,
    password: password!,
    favoriteDessert: favoriteDessert!,
  }
  console.log(newUser);
  
  console.log("calling putItem");
  // Call DynamoDB to add the item to the table
  try{
    await ddb.putItem(newUser);
  }
  catch(err){
    console.log("Error in putItem", err)
  }
  
});

export default router;