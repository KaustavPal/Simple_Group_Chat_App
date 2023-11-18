const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    `<html><head><title>User Login</title></head><body><form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST"><input type="text" id="username" name="username" placeholder="Username"><button type=submit>Login</button></form></body></html>`
  );
});

router.post("/login", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
