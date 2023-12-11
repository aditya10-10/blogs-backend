const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());


const blog = require('./routes/blogsroutes');

app.use("/api/v1", blog);




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

const connectDB = require('./config/database');
connectDB();