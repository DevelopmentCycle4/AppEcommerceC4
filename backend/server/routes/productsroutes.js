import { Router } from "express";
//import { createProductReview, deleteProduct, deleteReview, getProductById, getProductos, getProductReviews, newProduct, updateProduct } from "../controllers/productsController";


const router = Router();

//router.get('/' , (req, res)=> res.send("EcommerceC4"));

router.get('/products',  (req, res)=> res.send("Obtener Productos"));
router.post('/products', (req, res)=> res.send("newProduct"));
router.put('/products', (req, res)=> res.send("updateProduct"));
router.delete('/products', (req, res)=> res.send("deleteProduct"));
router.get('/products/:id', (req, res)=> res.send("getProductById"));
router.post('/products', (req, res)=> res.send("createProductReview"));
router.get('/products', (req, res)=> res.send("getProductReviews"));
router.delete('/products', (req, res)=> res.send("deleteReview"));


export default router