import express from "express";
import path from "path";
import morgan from "morgan";

console.log(path.resolve(__dirname));

const app = express();

const PORT = 3000;
// 개발자영어 : req 요청하다, res 응답하다 rander 구성하다,그리다 등등 send 보내다

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/etc", (req, res) => {
  res.render("etc");
});

app.listen(PORT, () => {
  console.log(`Server Start PORT : ${PORT}`);
});
