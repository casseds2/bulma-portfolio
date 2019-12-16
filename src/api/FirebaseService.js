import { Db } from "../firebase/db";

export default {
  async fetchTechnology() {
    const ref = Db.collection("technologies");
    const snapshot = await ref.get();
    const technologies = [];
    snapshot.forEach(doc => {
      technologies.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return technologies;
  },
  async fetchArticles() {
    const ref = Db.collection("articles");
    const snapshot = await ref.get();
    let articles = [];
    snapshot.forEach(doc => {
      articles.push({
        ...doc.data(),
        date: new Date(doc.data().timestamp.seconds * 1000).toDateString(),
        id: doc.id,
      });
    });
    articles = articles.sort((e1, e2) => {
      return e1.timestamp.seconds > e2.timestamp.seconds;
    });
    return articles;
  },
};
