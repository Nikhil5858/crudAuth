const express = require('express');
const app = express()
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const cors = require('cors')
const projectRouter = require('./routes/projectRouter');

app.use(bodyParser.json())
app.use(cors())

app.use('/user',userRoute)
app.use('/project', projectRouter);

try {
    mongoose.connect("mongodb://localhost:27017/demo");
    console.log("Database connected succsefully");
    
} catch (error) {
    console.log(`MongoDb Conncetion Error ${error}`);
}

app.listen(PORT,()=>{
    console.log(`Server was Runnning on Port : localhost:${PORT}`);
})
