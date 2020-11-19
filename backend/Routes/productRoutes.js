import express from 'express';
import asyncHandler from 'express-async-handler';

const router = express.Router();
import Product from '../models/productmodel';

router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

export default router;
