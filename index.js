import bodyParser from "body-parser";
import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const _dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;

// app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
  res.render('index.ejs');
});

app.get('/create', (req,res) => {
  res.render('create.ejs');
});

app.get('/view-blogs', (req,res) => {
  res.render('view-blogs.ejs');
});

app.get('/read-more', (req,res) => {
  res.render('read-more.ejs')
});

app.post('/submit', (req,res) => {
  let blogTitle = req.body['title'];
  let blogContent = req.body['content'];
  let contentLength = blogContent.slice(0,60);
  let titleLength = blogTitle.slice(0,30);

  res.render('view-blogs.ejs', {title: titleLength, content: contentLength + '...'});
  console.log(titleLength, contentLength);
});

// app.post('/create', (req,res) => {
//   res.render('create.ejs');
// });

app.post('/view-blogs', (req,res) => {
  res.render('view-blogs.ejs');
});



app.listen(port, ()=>{});
