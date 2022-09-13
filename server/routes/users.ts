import express, { Express, Request, Response, NextFunction } from 'express';
import * as AWS from 'aws-sdk'
import * as ddb from '../dynamo/wrappers'
import { User, newUser } from '../types/userTypes';

const router = express.Router()

// Set the region - probably not needed if passed down to route
// AWS.config.update({region: 'us-west-1'});

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

/* POST user details on db - aka create user */
router.post('/', async function(req: Request, res: Response, next: NextFunction){
  const username = req.username;
  const password = req.password;
  const favoriteDessert = req.favoriteDessert;

  const newUser: newUser = {
    username: username!,
    password: password!,
    favoriteDessert: favoriteDessert!,
  }
  
  // Call DynamoDB to add the item to the table
  const err = await ddb.putItem(newUser);
});

module.exports = router;
