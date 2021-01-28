'use strict'

const Handler = require('./handler')

exports.load = [
  {path : '/', method: 'GET', handler: Handler.run.getAll},
  {path: '/update/{id}', method: 'PUT', handler: Handler.run.updateProduct},
  {path: '/delete/{id}', method: 'DELETE', handler: Handler.run.deleteProduct}
]