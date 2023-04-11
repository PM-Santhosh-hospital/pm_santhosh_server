const express = require("express");
const router = express.Router();

const {
  getOneBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
  createBlog,
  getOneBlogAdmin,
} = require("../controller/blog");

router.get("/blog", getAllBlog);
router.get("/blog/:id", getOneBlog);
router.get("/admin-blog/:id",getOneBlogAdmin)
router.post("/blog", createBlog);
router.put("/blog/:id", updateBlog);
router.delete("/blog/:id", deleteBlog);

module.exports = router;
