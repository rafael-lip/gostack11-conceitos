import { Request, Response } from "express";

import createUser from "./services/CreateUser";

export default function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Felipe",
    email: "felipe@rocketseat.com.br",
    password: "123456",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      { title: "Javascript", experience: 95 },
    ],
  });
  return response.json(user);
}
