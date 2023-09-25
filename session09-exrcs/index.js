const express = require("express");
const PORT = 8000;

const app = express();
app.use(express.json());

// routes

// 404 middleware
app.use((req, res) => {
	console.error(`Not Found ${req.path}`);
	res.status(404).json({
		ok: false,
		message: "404 Not Found",
	});
});

// middleware fatal error
app.use((err, req, res, next) => {
	console.error(`Fatal Error ${req.path}`);
	console.error(err);

	res.status(500).json({
		ok: false,
		message: "Internal Server Error",
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});