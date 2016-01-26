'use strict'

let Hook = require('proton-hook')
let multer = require('koa-multer')
let path = require('path')


module.exports = class MulterHook extends Hook {

  constructor(proton) {
    super(proton)
  }

  configure() {
    return Promise.resolve()
  }

  initialize() {
    this.proton.use(multer({
      dest: path.join(this.proton.app.path, '../.tmp')
    }))
  }

  validate() {
    return Promise.resolve()
  }



}
