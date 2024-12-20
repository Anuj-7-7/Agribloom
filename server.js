import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app=express();
const port =3000;
const __dirname=dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
  res.render('index');
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
