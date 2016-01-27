'use strict'

let Quark = require('proton-quark')
let multer = require('koa-multer')
let path = require('path')


module.exports = class MulterQuark extends Quark {

  constructor(proton) {
    super(proton)
  }

  initialize() {
    let dest = path.join(this.proton.app.path, '../.tmp')
    this.proton.use(multer({
      dest: dest
    }))
  }


}
