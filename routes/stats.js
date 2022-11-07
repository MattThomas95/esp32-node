const express = require("express");
// const fs = require("fs");
// const path = require("path");
const router = express.Router();
const getStats = async (req, res, next) => {
  let savedRespone;
  const res2 = res
  // const options = { method: "GET", headers: { accept: "application/json" } };
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
  // intervalTime = 10000;
  // setInterval(function hello() {
  // console.log(intervalTime);
  // if (savedRespone) {
  //   newResponse = savedRespone.donation_id;
  //   console.log("newResponse", newResponse);
  //   if (newResponse != oldRespone) {
  //     try {
  //       if (savedRespone.amount >= 20) {
  //         const stats = savedRespone;
  //         console.log("savedRespone", savedRespone);
  //         res.json(stats);
  //       }
  //     } catch (e) {
  //       next(e);
  //     }
  //   }
  //   oldRespone = savedRespone.donation_id;
  // }
  // return hello;
  // }(), intervalTime);
  // return () => clearInterval(interval);
};
router.route("/api/v1/stats/").get(getStats);
module.exports = router;
