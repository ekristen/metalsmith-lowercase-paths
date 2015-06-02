var debug = require('debug')('metalsmith-lowercase')

module.exports = plugin

function plugin(options) {

  return function(files, metalsmith, done) {
    
    Object.keys(files).forEach(function(file) {
      if (file != file.toLowerCase()) {
        debug('lowercasing oldFile: %s, newFile: %s', file, file.toLowerCase())
        files[file.toLowerCase()] = files[file]
        delete files[file]
      }
    })

    done()
  }
}
