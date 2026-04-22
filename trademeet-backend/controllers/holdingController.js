import Holding from "../models/Holding.js";

// ADD HOLDING
export const addHolding = async (req, res) => {
  try {
    const { stockName, quantity, price } = req.body;

    const holding = await Holding.create({
      userId: req.user.id,
      stockName,
      quantity,
      price,
    });

    res.status(201).json(holding);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET HOLDINGS
export const getHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find({ userId: req.user.id });
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};