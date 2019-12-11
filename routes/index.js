var express = require("express");
var router = express.Router();
var queries = require("../utils/queries");

router.get("/", async (req, res, next) => {
	let technologies = await queries.fetchTechnologies();
	let articles = await queries.fetchArticles();
	articles = articles.sort((e1, e2) => {
		return e1.timestamp.seconds > e2.timestamp.seconds;
	});
	articles = articles.map(article => {
		const { timestamp } = article;
		return {
			...article,
			timestamp: new Date(timestamp.seconds * 1000).toDateString(),
		};
	});
	res.render("index", { technologies: technologies, articles: articles });
});

router.post("/contact", async (req, res, next) => {
	console.log(req.body);
	res
		.json({
			data: "Message Sent!",
		})
		.status(200);
});

module.exports = router;
