const express = require("express");
const router = express.Router();

router.post("/run", (req, res) => {
    return res.json({ status: "Optimization started" });
});

router.get("/status", (req, res) => {
    return res.json({ status: "Running", progress: "62%" });
});

module.exports = router;
