
const youtubedl = require("youtube-dl-exec");
const express = require("express");

const app = express();


app.get("/", (req, res) => {
  console.log("received request");
  let receivedUrl = req.query.url;
  let quality = req.query.ql;
  let px_480 = "jfvhv";
  let arre = []
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

app.listen("8080");


