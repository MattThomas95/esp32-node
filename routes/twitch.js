const express = require("express");
const router = express.Router();
const getStats = async (req, res, next) => {
  let savedRespone;
  const res2 = res;
  const https = require("https");
  var options = {
    url: "https://api.twitch.tv/helix/users/follows?to_id=402578187",
    setHeaders: function (res, path, stat) {
      res.set('Authorization', 'Bearer m2yjt5dlbe32xwpc13n6q3tm4m73sj')
      res.set('Client-Id', 'urg5udkhpz1oh9uie5ks3mwyqljuyr')
    }
  }
  const url =
  "https://api.twitch.tv/helix/users/follows?to_id=402578187";
  https.get(options, (res) => {
    // req.set('Authorization', 'Bearer m2yjt5dlbe32xwpc13n6q3tm4m73sj');
    // req.set('Client-Id', 'urg5udkhpz1oh9uie5ks3mwyqljuyr');
    console.log('headers:', req.headers);
    let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        data = JSON.parse(data);
        savedRespone = data;
        // let newResponse = savedRespone.donation_id + "," + savedRespone.amount;
        // console.log(savedRespone.donation_id);
        // console.log(savedRespone.amount);
        console.log("savedRespone", savedRespone);
        res2.json(savedRespone);
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
};
router.route("/api/twitch/").get(getStats);
module.exports = router;
