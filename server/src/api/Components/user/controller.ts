import { Request, Response } from "express";

type Controller = (req: Request, res: Response) => void;

export const registerUser: Controller = (req, res) => {
  res.json({ message: "User registered", data: req.body });
};

export const loginUser: Controller = (req, res) => {
  res.json({ message: "User logged in", data: req.body });
};
