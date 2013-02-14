
var opts = require('optimist').argv
var Rumours  = require('rumours/client')

var rumours = Rumours({
  db: 'hello', host: opts.host || 'http://rumoursdb.com:4567'
})

rumours.view('all', ['r-edit', 'stylesheet', opts.t | opts.target, true])
  .on('data', function (d) {
    console.log(d.key)
  })
