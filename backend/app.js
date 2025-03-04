const express = require('express'); // express framework
const app = express();
const dotenv = require('dotenv');  // require for configure the environmental variables
const path = require('path'); // Used for join the path
const connectDatabase = require('./config/connectDatabase') // require connecting file for db connection 
const cors = require('cors') // used to give header permission to the frontend(react) initally its disabled due to security
dotenv.config({path: path.join(__dirname, 'config' , 'config.env')})


const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();
app.use(express.json());// middleware used to turn the reques into json and put it in the body
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT, () => {
    console.log(`server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});