'use strict'

let Hook = require('proton-hook')
let multer = require('koa-multer')
let path = require('path')


class MulterHook extends Hook {

  constructor(proton) {
    super(proton)
  }

  configure() {
    return Promise.resolve()
  }

  initialize() {
    this.proton.use({
      dest: path.join(this.app.path, '../.tmp')
    })
  }

  validate() {
    return Promise.resolve()
  }



}
