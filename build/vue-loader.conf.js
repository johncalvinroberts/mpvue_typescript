var utils = require('./utils')
var config = require('../config')
// var isProduction = process.env.NODE_ENV === 'production'
// for mp
var isProduction = true

var cssLoaders = utils.cssLoaders({
  sourceMap: isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap,
  extract: isProduction
})

var ts = [ {loader: 'ts-loader'} ]
var loaders = {...cssLoaders, ts}

module.exports = {
  loaders,
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
