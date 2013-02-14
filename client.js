var Rumours = require('rumours')
var css     = require('css')
var h       = require('hyperscript')
var o       = require('observable')

var text = h('textarea', {cols: 80, rows: 24, disabled: true})

var rumours = RUMOURS = Rumours({
  db: 'hello',
  host: 'http://localhost:4567'
  //  host: 'http://rumoursdb.com:4567'
})

var opened = {}

//TODO allow user to pass in the target - by #address:port
//hmm, if we add http routes for the JSON and Text version
//of a Scuttlebutt then we'd be able to roll this out by just
//adding the stylesheet as a link to that route!

rumours.view('all', ['r-edit','stylesheet', 'localhost:8000', true])
.on('data', function (d) {
  var k = d.key.join('!')
  opened[k] = opened[k] || (
    rumours.open(k, function (err, rEdit) {
      if(err) throw err
      console.log('open')

      var text = h('textarea', {cols: 80, rows: 24})

      document.body.appendChild(
        h('div',
          h('h2', h('code', decodeURIComponent(d.key[3]))),
          text
        )
      )

      rEdit.wrap(text)
      text.disabled = false
    })
  )
})

//document.body.appendChild(text)
