import mongoose from "mongoose";

const textSchema = new mongoose.Schema({
  text_data: {
    type: String,
    required: true,
  },
});

export const TextTable = mongoose.model("TextTable", textSchema);
