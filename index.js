// import {fetch} from "node-fetch";
const youtubedl = require("youtube-dl-exec");
const express = require("express");
const app = express();

app.get("/favicon.ico", (req, res) => res.send("hello"));

app.get("/", (req, res) => {
  console.log("received request");
  const receivedUrl = req.query.url;
  const quality = req.query.ql;
  // Request structure;
  //http://localhost:8080/?url=https://www.youtube.com/watch?v=6xKWiCMKKJg&ql=1080
  // youtubedl(receivedUrl, {
  //   skipDownload: true,
  //   getUrl: true,
  //   // format: `[ext!=m3u8][height=240][protocol!=m3u8]`
  // })
  //   .then((urla) => {
  //     res.set("Content-Type", "video/mp4");
  //     // youtubedl.getInfo(receivedUrl, options, function(err, info) {
  //     //   if (err) throw err;
        
  //       console.log('id:', info.id);
  //       console.log('title:', info.title);
  //       console.log('url:', info.url);
  //       console.log('thumbnail:', info.thumbnail);
  //       console.log('description:', info.description);
  //     });
      
  //     console.log(urla);
  //     res.send(`hello ${urla}`);
      
  //   })
  //   .catch((e) => console.log(e.stderr));

 

  youtubedl(receivedUrl, {
    dumpSingleJson: true,
    noWarnings: true,
    noCallHome: true,
    noCheckCertificate: true,
    preferFreeFormats: true,
    youtubeSkipDashManifest: true,
    referer: receivedUrl
  }).then(output =>  res.send(output))
 

});

app.listen("8080");


