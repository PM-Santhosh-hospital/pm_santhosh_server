const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactenquirySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "is required"],
    },

    email: {
      type: String,
      trim: true,
      required: [true, "is required"],
    },

    phone: {
      type: Number,
      required: [true, "is required"],
    },

    subject: {
      type: String,
      trim: true,
      required: [true, "is required"],
    },

    message: {
      type: String,
      trim: true,
      required: [true, "is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactEnquiry", contactenquirySchema);
