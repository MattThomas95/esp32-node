const express = require("express");
const router = express.Router();
const getStats = async (req, res, next) => {
  let savedRespone;
  const res2 = res;
  const https = require("https");
  const url =
    "https://streamlabs.com/api/v1.0/donations?access_token=3p9XMiyCYlkZQT28dUGjE1EjfpogTKediFp2xPxc";
  https
    .get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        data = JSON.parse(data);
        savedRespone = data["data"][0];
        let newResponse = savedRespone.donation_id + "," + savedRespone.amount;
        console.log(savedRespone.donation_id);
        console.log(savedRespone.amount);
        res2.json(newResponse);
      });
    })
    .on("error", (err) => {
      console.log(err.message);
    });
};
router.route("/api/v1/stats/").get(getStats);
module.exports = router;
