const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === "shohag") {
        req.user = { name: "shohag", id: 1 };
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
};
module.exports = authorize;
