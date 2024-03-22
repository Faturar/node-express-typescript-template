import express, {Express, Request, Response} from "express";
const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello From Express + TS!");
})

app.listen(port, () => {
  console.log(`Now Listening on port ${port}`)
})