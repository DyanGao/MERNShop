import express from 'express';
//import asyncHandler from 'express-async-handler';
//import Product from '../models/productModel.js';
//import mongoose from 'mongoose';
import {
  deleteProduct,
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProdcuts
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js'


const router = express.Router();
//@desc     Fetch all products
//@route    GET /api/products
//@access   Public
// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     // res.status(401);
//     //throw new Error('Not Authorized');
//     res.json(products);
//   })
// );
router
  .route('/')
  .get(getProducts)
  .post(protect, admin, createProduct)

router
  .route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProdcuts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
  
//@desc     Fetch single product
//@route    GET /api/products/:id
//@access   Public
// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     if (mongoose.Types.ObjectId.isValid(req.params.id)) {
//       const product = await Product.findById(req.params.id);
//       if (product) {
//         res.json(product);
//       } else {
//         res.status(404).json({ message: 'Product not found' });
//       }
//     } else {
//       res.status(404).json({ message: 'Invalid ID Product not found' });
//     }
//   })
// );

export default router;
