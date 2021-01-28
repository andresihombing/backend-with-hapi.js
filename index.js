'use strict'

const Route = require('./src/route')
const Hapi = require('hapi')
const server = Hapi.server({
  host: 'localhost',
  port: 8000
})

async function start () {
  try {
    await server.route(Route.load)
    await server.register({
      plugin: require('./src/plugin/knex'),
      options: {
        client: 'pg',
        connection: 'postgres://postgres:sihombing@localhost:5432/elevenia',
        searchPath: ['knex', 'public']
      }
    })
    await server.start()
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }
  console.log('Server running at: ', server.info.uri)
}

start()