const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

exports.needLoginMiddleware = (req, res, next) => {
	let token = req.headers.authorization;

	try {
		token = token.split(" ")[1];
		if (!token) {
			res.status(401).json({
				ok: false,
				message: "Authorization failed",
			});
			return;
		}

		const payload = jwt.verify(token, SECRET_KEY);
		if (!payload) {
			res.status(401).json({
				ok: false,
				message: "Authorization failed",
			});
			return;
		}
		req.user = payload;
		next();
	} catch (error) {
		res.status(401).json({
			ok: false,
			message: "Authorization failed",
		});
	}
};

exports.isAdminMiddleware = (req, res, next) => {
	console.log(req.user);
	const { isAdmin } = req.user;
	if (isAdmin) {
		next();
	} else {
		res.status(403).json({
			ok: false,
			message: "No access",
		});
	}
};
