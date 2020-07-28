const express = require("express");
const { Category } = require("../db/models/schema");
const router = express.Router();

//get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.query();
    // console.log("hit here",categories)
    res.json(categories)
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
