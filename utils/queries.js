var admin = require("firebase-admin");

var db = admin.firestore();

module.exports = {
	fetchTechnologies: async () => {
		try {
			const snapshot = await db.collection("technologies").get();
			let technologies = [];
			snapshot.forEach(doc => {
				technologies.push({ ...doc.data(), id: doc.id });
			});
			return technologies;
		} catch (err) {
			console.log("There was an error!");
		}
	},
	fetchArticles: async () => {
		try {
			const snapshot = await db.collection("articles").get();
			let articles = [];
			snapshot.forEach(doc => {
				articles.push({ ...doc.data(), id: doc.id });
			});
			return articles;
		} catch (err) {
			console.log("There was an error!");
		}
	},
};
