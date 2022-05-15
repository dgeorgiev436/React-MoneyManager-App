const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json({extended: false}));




const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
});