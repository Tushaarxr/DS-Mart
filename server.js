import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'
import cors from 'cors';
import categoryRoute from './routes/categoryRoute.js';
import productRoute from './routes/productRoute.js'
//config env
dotenv.config();

//database config
connectDB();


const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/product', productRoute);
//rest api
app.get('/', (req, res) => {
    res.send({
        messsage: "Welcome to Ds-Mart App"

    })
})

const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`server running on Port:${PORT}`.bgCyan.white)

})
