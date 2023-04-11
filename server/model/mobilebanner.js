const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mobilebannerSchema = new Schema(
  {
    mobilebanner_title: {
      type: String,
      trim: true,
    },
    mobilebanner_image: {
      type: String,
      trim: true,
    },
    sub_title: {
      type: String,
      trim: true,
      default: "",
    },
    description: {
      type: String,
      trim: true,
      required: [true, "is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("mobileBanner", mobilebannerSchema);
