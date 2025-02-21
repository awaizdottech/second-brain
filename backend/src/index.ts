import express, { NextFunction } from "express";
import mongoose, { model } from "mongoose";
import jwt from "jsonwebtoken";
const app = express();

app.post("/api/v1/signup", (req, res) => {});

app.post("/api/v1/signin", (req, res) => {});

app
  .route("/api/v1/content")
  .get((req, res) => {
    // contentodel.find({userId}).populate('userId','username')
  })
  .post((req, res) => {})
  .delete((req, res) => {
    // make sure a user is only deleting his own content
  });

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

const middleWare = (req: Request, res: Response, next: NextFunction) => {};

// how can u override types of the request object
