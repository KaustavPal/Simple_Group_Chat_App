const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No Chat Exists!";
    }
    res.send(
      `<html>
        <head>
        <title>Group Chat</title>
        </head>
        <body>
        <p>${data}</p>
        <form onsubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/" method="POST">
        <input type="text" id="message" name="message" placeholder="Message">
        <input type="hidden" id="username" name="username">
        <button type=submit>Send</button>
        </form>
        </body>
        </html>`
    );
  });
});

router.post("/", (req, res, next) => {
  fs.writeFile(
    "message.txt",
    `${req.body.username}: ${req.body.message}. `,
    { flag: "a" },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${req.body.username}: ${req.body.message}. `);
        res.redirect("/");
      }
    }
  );
});

module.exports = router;
