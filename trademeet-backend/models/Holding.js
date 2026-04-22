import mongoose from "mongoose";

const holdingSchema = new mongoose.Schema({
  userId: String,
  stockName: String,
  quantity: Number,
  price: Number,
});

export default mongoose.model("Holding", holdingSchema);