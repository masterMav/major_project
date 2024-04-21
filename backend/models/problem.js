const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemSchema = new Schema(
  {
    problemCode: {
      type: String,
      required: true,
    },
    problemName: {
      type: String,
      required: true,
    },
    problemRating: {
      type: Number,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const Problem = mongoose.model("Problem", problemSchema);
module.exports = Problem;
