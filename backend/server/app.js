import express  from 'express';
import productsRoutes from "./routes/productsroutes.js";

const app=express();
app.use(productsRoutes);

export default app;