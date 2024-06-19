const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');
const ConnectDB = require('./database/db.js')
const searchRoute = require('./routes/serachRoute.js')

dotenv.config();
app.use(cors());

app.use('/api/v1/searchAssignment',searchRoute);

app.listen(process.env.PORT, ()=>{
    console.log('server created successfully');
    ConnectDB();
})