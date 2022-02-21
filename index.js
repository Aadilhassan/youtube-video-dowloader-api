
const youtubedl = require("youtube-dl-exec");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require('multer');
var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(upload.array()); 
app.use(express.static('public'));

app.set("view engine", "ejs");

app.get("/api", (req, res) => {
  console.log("received request");
  let receivedUrl = req.query.url;
  let quality = req.query.ql;
  if(!receivedUrl){
    receivedUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  } else{
  }
  if(!quality){
    quality = 480;
  } else{
  }
  
  if(quality < 144){
    quality = 144;
  } else{
  }
 
youtubedl(receivedUrl, {
    dumpSingleJson: true,
    noWarnings: true,
    noCallHome: true,
    noCheckCertificate: true,
    preferFreeFormats: true,
    youtubeSkipDashManifest: true,
    referer: receivedUrl,
    format: `(mp4,webm)[height<=${quality}]`,
  }).then(px => res.send(px)
  )
  

}); 

app.post("/ma", function (req, res) {
let receivedUrl = req.body.uri;
let quality   = req.body.flexRadioDefault;

if(!receivedUrl){
  receivedUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
} else{
}
if(!quality){
  quality = 480;
} else{
}

if(quality < 144){
  quality = 144;
} else{
}
console.log(receivedUrl)
console.log(quality)

youtubedl(receivedUrl, {
  dumpSingleJson: true,
  noWarnings: true,
  noCallHome: true,
  noCheckCertificate: true,
  preferFreeFormats: true,
  youtubeSkipDashManifest: true,
  referer: receivedUrl,
  format: `(mp4,webm)[height<=${quality}]`,
}).then(data => res.render("index.ejs", {dat: data})
)




  // res.render("index.ejs");
});

app.get("/", function (req, res) {
  
  res.render("index.ejs",{dat: " "});
});

app.listen("8080");


