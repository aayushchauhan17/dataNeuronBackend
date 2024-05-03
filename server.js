require("dotenv").config();
const express = require('express');
const connectDb = require('./src/service/db')
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

//connect db
connectDb();

app.use(express.json());

//api
app.use("/api", require("./src/modules/master.routes"));

// server run one mentioned port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
