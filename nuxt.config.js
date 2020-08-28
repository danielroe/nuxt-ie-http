
export default {
  modules: [
    '@nuxt/http',
  ],
  serverMiddleware: [
    { path: '/api/test', handler: function(req, res) {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ response: 'Hello from API.' }))
    }
  }
  ]
}
