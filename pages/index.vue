<template>
  <div class="container">
    <div>
      <h1 class="title">
        @nuxt/http repro
      </h1>
      <code> response from API: {{ response }} </code>
      <button @click="makeGetRequest">
        Get request
      </button>
      <button @click="makePostRequest">
        Post request
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async makeGetRequest() {
      this.response = await this.$http.$get('/api/test')
    },
    async makePostRequest() {
      this.response = await this.$http.$post('/api/test')
    },
  },
  data: () => ({
    response: null,
  }),
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

.container > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin-top: 1rem;
}

code {
  font-size: 2rem;
}

body {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.title {
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
}

.links {
  padding-top: 15px;
}
</style>
