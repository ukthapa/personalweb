<template>
  <section class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="title">I'm working on it...</h1>
      <div class="links">
        <a href="https://www.linkedin.com/in/uttamkthapa" target="_blank">LinkedIn</a>
        |
        <a href="https://github.com/ukthapa" target="_blank">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // }
  head() {
    return {
      title: 'Uttam - ukthapa.com',
      meta: [{ hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }],
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/*
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
} */

.links {
  padding-top: 15px;
}
</style>
