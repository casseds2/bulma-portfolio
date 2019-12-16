<template>
  <div id="app">
    <my-navigation></my-navigation>
    <main>
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Stephen Cassedy
            </h1>
            <h1 class="subtitle">
              Welcome to my site!
            </h1>
          </div>
        </div>
      </section>

      <section class="section" id="about">
        <div class="container">
          <h1 class="title">About</h1>
          <div class="columns is-vcentered">
            <div class="column is-4">
              <figure class="image">
                <img
                  width="1580"
                  height="1077"
                  loading="lazy"
                  alt="Profile Image"
                  class="is-rounded"
                  :src="profilePicture"
                />
              </figure>
            </div>
            <div class="column is-1"></div>
            <div class="column is-6">
              <p class="has-text-justified">
                Hi! My name is <strong>Stephen Cassedy</strong>. I'm very
                passionate and dedicated to my work. With two years experience
                in fullstack development, I have acquired many skills required
                to build richly featured products. I currently work at
                <strong><a href="https://cellusys.com">Cellusys</a></strong> in
                the <strong>Internet of Things</strong>
                department. I enjoy every step of the development process from
                requirements gathering to deployment. If you wish to contact me,
                please don't hesitate to get in touch!
              </p>
              <hr />
              <div class="columns">
                <span class="column" style="text-align:left;"
                  ><strong>Birthday:</strong> 01.07.1995</span
                >
                <span class="column" style="text-align:left;"
                  ><strong>Profession:</strong> Software Engineer</span
                >
              </div>
              <div class="columns">
                <span class="column" style="text-align:left;"
                  ><strong>Home:</strong> Dublin, Ireland</span
                >
                <span class="column" style="text-align:left;"
                  ><strong>Degree:</strong> BSc. in Computer Applications</span
                >
              </div>
              <div class="columns">
                <span class="column" style="text-align:left;"
                  ><strong>Mail:</strong>
                  <a href="mailto:casseds95@gmail.com"
                    >casseds95@gmail.com</a
                  ></span
                >
                <span class="column" style="text-align:left;"
                  ><strong>Mobile:</strong> 0851185656</span
                >
              </div>
              <button class="button is-info">
                <a href="#contact" style="color: white;">Contact</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <hr class="separator" />
      </div>

      <section class="section" id="technology">
        <div class="container">
          <h1 class="title">Technology</h1>
          <h1 class="subtitle">Some tech I work with...</h1>
          <div class="columns is-multiline">
            <div
              v-for="(technology, index) in technologies"
              :key="index"
              class="column is-4"
            >
              <div class="card">
                <div class="card-image">
                  <figure class="image icon-image is-64x64">
                    <img
                      :src="technology.img"
                      alt="Placeholder image"
                      style="border-radius: 30px;"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="title">
                    {{ technology.title }}
                  </div>
                  <div class="content">
                    {{ technology.body }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <hr class="separator" />
      </div>

      <section class="section" id="articles">
        <div class="container">
          <h1 class="title">Articles</h1>
          <h1 class="subtitle">Articles I like...</h1>
          <div class="columns is-multiline">
            <div
              v-for="(article, index) in articles"
              :key="index"
              class="column is-4"
            >
              <div class="card">
                <div class="card-content">
                  <p class="title">
                    {{ article.title }}
                  </p>
                  <p class="subtitle date-text">
                    {{ article.date }}
                  </p>
                  <hr />
                  <div class="content">
                    {{ article.description }}
                  </div>
                </div>
                <footer class="card-footer">
                  <a :href="article.url" class="card-footer-item"
                    >Find Out More</a
                  >
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <hr class="separator" />
      </div>

      <section class="section" id="contact">
        <div class="container">
          <h1 class="title">Contact</h1>
          <div class="columns  is-centered">
            <div class="column is-half">
              <div class="field">
                <div class="control">
                  <label for="name" />
                  <input
                    class="input is-info"
                    type="text"
                    id="name"
                    name="name"
                    v-model="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label for="email" />
                  <input
                    class="input is-info"
                    type="email"
                    id="email"
                    name="email"
                    v-model="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label for="message" />
                  <textarea
                    class="textarea is-info"
                    id="message"
                    name="message"
                    v-model="message"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <button class="button is-info" @click="sendMessage">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyNavigation from "./components/Navigation";
import MyFooter from "./components/Footer";
import { mapGetters, mapActions } from "vuex";
import profile from "./assets/images/profile.jpg";

export default {
  components: {
    MyNavigation,
    MyFooter,
  },
  data() {
    return {
      profilePicture: profile,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    ...mapActions(["fetchTechnologies", "fetchArticles"]),
    sendMessage() {},
  },
  computed: {
    ...mapGetters(["technologies", "articles"]),
  },
  created() {
    this.fetchTechnologies();
    this.fetchArticles();
  },
};
</script>

<style>
.background {
  background-color: #eeffee;
}
</style>
