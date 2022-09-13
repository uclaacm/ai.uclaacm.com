/* this file basically enables you to expect certain parameters from the 
requestobjects received by the endpoints. To add a new field, simply add
`fieldname?: any` to the interface below (with the question mark) */

import express from "express";

declare global {
  namespace Express {
    interface Request {
      username?: string,
      password?: string,
      favoriteDessert?: string,
    }
  }
}