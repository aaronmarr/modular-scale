<template>
  <div id="app" class="font-sans font-light">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'
  import Nav from './components/Nav.vue'

  export default {
    name: 'app',
    components: {
      Footer,
      Nav,
    },
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/pke0jwj.css' },
      ],
    },
  }
</script>
