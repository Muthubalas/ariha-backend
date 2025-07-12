const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const upload = require('../middlewares/uploadProduct');
const {
  createProduct, getProducts, getProduct, updateProduct, deleteProduct
} = require('../controllers/productController');

router.post('/', auth,upload.single('product_image'), createProduct);
router.get('/', auth,getProducts);
router.get('/:id',auth, getProduct);
router.put('/:id', auth,upload.single('product_image'), updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
