const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path")

// Connect the database
connectDB();

app.use(express.json({extended: false}));

app.use("/api/users", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/expenses", require("./routes/api/expenses"));

// Serve static assets in production

if(process.env.NODE_ENV === "production"){
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req,res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	})
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
});