const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connect the database
connectDB();

app.use(express.json({extended: false}));

app.get("/", (req,res) => {
	res.send("Home Page")
})

app.use("/api/users", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/expenses", require("./routes/api/expenses"));




const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
});