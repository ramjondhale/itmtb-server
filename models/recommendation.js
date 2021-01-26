import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: false,
  },
  radioOptions: {
    type: String,
    required: false,
  },
  strikePrice: {
    type: Number,
    required: false,
  },
  buyOrSell: {
    type: String,
    required: true,
  },
  movingOrClosing: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  recReason: {
    type: String,
    required: true,
  },
  tradePrice: {
    type: Number,
    required: true,
  },
  stopLoss: {
    type: Number,
    required: true,
  },
  target: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  recValidity: {
    type: Date,
    required: true,
  },
  recDisclosure: {
    type: String,
    required: true,
  },
});

const Recommendation = mongoose.model("Recommendation", recommendationSchema);

export default Recommendation;
