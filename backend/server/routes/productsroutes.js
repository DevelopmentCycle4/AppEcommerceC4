import { Router } from "express";
//import { getProducts } from "../controllers/productsController";



const router = Router();
router.get('/productos', async (req, res) => {
    const body = req.body
    console.log(body)
})

router.post('/productos', async (req, res) => {
    const body = req.body
    console.log(body)
})

router.put('/productos/id:', async (req, res) => {
    const body = req.body
    console.log(body)
})

router.delete('/productos/id:', async (req, res) => {
    const body = req.body
    console.log(body)
})

router.get('/productos/id:', async (req, res) => {
    const body = req.body
    console.log(body)
})


//router.get('/' , (req, res)=> res.send("EcommerceC4"));

/*router.get('/productos',  (req, res)=> res.send ("obtener producto"));
router.post('/productos', (req, res)=> res.send("newProduct"));
router.put('/productos', (req, res)=> res.send("updateProduct"));
router.delete('/productos', (req, res)=> res.send("deleteProduct"));
router.get('/productos/:id', (req, res)=> res.send("getProductById"));
/*router.post('/productos', (req, res)=> res.send("createProductReview"));
router.get('/productos', (req, res)=> res.send("getProductReviews"));
router.delete('/productos', (req, res)=> res.send("deleteReview")); */


export default router
