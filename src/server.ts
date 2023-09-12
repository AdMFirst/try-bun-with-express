import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.type('txt').send("Hello World!");
});

app.get("/post", (req, res) => {
    let something = req.query.id;
    res.json({"details":"accepted", "data":{"id":something}})
})


app.use(function(req, res, next) {
    res.json({'details':'error', "data":{"code":404, "text":"Not found"}})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});