import fs from "fs";
import path from "path";
import { Request, Response } from "express";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  company: {
    name: string;
    department: string;
  };
}

// helper method - don't repeat yourself principle
const readJsonData = (): User[] => {
  // the method reads data from file in a synchronous manner
  // not suggested in reading large files as it blocks execution of event loops and
  // drastically impact the performance of the application
  // https://attacomsian.com/blog/nodejs-read-write-json-files
  try {
    const file = path.resolve(__dirname, "../users.json");
    const users: User[] = JSON.parse(fs.readFileSync(file, "utf-8"));
    return users;
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("File not Found");
    } else {
      throw error;
    }
  }
};

// get users list
export const getUsers = (req: Request, res: Response): void => {
  const users: User[] = readJsonData();

  res.status(200).send(users);
};

// get specific user
export const getUser = (req: Request, res: Response): void => {
  const users: User[] = readJsonData();
  const { id } = req.params;

  const result = users.filter((user) => user.id === Number(id));
  res.status(200).send(result);
};
