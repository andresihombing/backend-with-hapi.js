'use strict'

exports.run = {
  getAll: function (request) {
    function getAll () {
      return new Promise(function (resolve, reject) {
        const knex = request.server.plugins.knex.run

        knex.select('*').from('product')
            .asCallback(function (err, rows) {
              if (err) {
                reject(err)
              }
              resolve(rows)
            })
      })
    }
    return getAll()
  },

  updateProduct: function (request) {
    function updateProduct () {
      return new Promise (function (resolve, reject) {
        const knex = request.server.plugins.knex.run        
        knex('product')
          .where('id', '=', decodeURIComponent(request.params.id))
          .update({
            prdnm: decodeURIComponent(request.payload.prdNm),
            sellerprdcd: decodeURIComponent(request.payload.sellerPrdCd),
            htmldetail: decodeURIComponent(request.payload.htmlDetail),
            prdimage01: decodeURIComponent(request.payload.prdImage01),
            selprc: decodeURIComponent(request.payload.selPrc),            
          })
          .asCallback(function (err) {            
            if (err) {
              reject(err)
            }
            resolve('update successfully')
          })
      })
    }
    return updateProduct()
  },
  
  deleteProduct: function (request) {
    function deleteProduct () {
      return new Promise (function (resolve, reject) {
        const knex = request.server.plugins.knex.run
        knex('product')
          .where('id', '=', decodeURIComponent(request.params.id))
          .del()
          .asCallback(function (err) {
            if(err){
              reject(err)
            }
            resolve('delete successfully')
          })
      })
    }
    return deleteProduct()
  }
}