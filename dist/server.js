import express from "express";
const port = 8080;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello From Express + TS!");
});
app.listen(port, () => {
    console.log(`Now Listening on port ${port}`);
});
//# sourceMappingURL=server.js.map