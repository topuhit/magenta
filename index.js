const serve = require('serve')

const server = serve(__dirname, {
  port: 5040,
  ignore: ['node_modules']
})