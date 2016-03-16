'use strict'

let Quark = require('proton-quark')
let multer = require('koa-multer')
let path = require('path')


module.exports = class MulterQuark extends Quark {

  constructor(proton) {
    super(proton)
  }

  configure() {
    this.opts = this.proton.app.config.multer
  }

  validate() {
    return this.opts
  }

  initialize() {
    this.addMulter()
  }

  addMulter() {
    // after add multer middleware
    this.proton.middleware.unshift(function * (next) {
      this.request.body = this.data
      delete this.data
      yield next
    })
    // multer middleware
    this.proton.middleware.unshift(multer(this.opts))

    // Before add multer middleware
    this.proton.middleware.unshift(function * (next) {
      this.data = this.request.body
      yield next
    })
  }


}
