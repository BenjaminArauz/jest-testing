const express = require("express");
const router = express.Router();

router.get("/sport", (req, res) => {
    res.render("index", { title: "Sports Page" });
});

module.exports = router;