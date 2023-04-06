const mongoose = require("mongoose");

const blogs = new mongoose.Schema(
  {
    image: {
      type: String,
      trim: true,
      required: [true, "Image is required"],
    },
    title: {
      type: String,
      trim: true,
      required: [true, "is required"],
    },
    sub_title: {
      type: String,
      trim: true,
      default: "",
    },
    specialities: {
      type: String,
      trim: true,
      required: [true, "Specialities is required"],
    },
    author: {
      type: String,
      trim: true,
      required: [true, "is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogs);
