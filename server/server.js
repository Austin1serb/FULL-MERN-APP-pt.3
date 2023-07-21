const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./config/mongoose.config')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

require('./routes/products.routes')(app); 

app.listen(port, () => console.log(`SERVER IS ONLINE on port: ${port} ------AUSTIN SERB IS PIMP`) );
