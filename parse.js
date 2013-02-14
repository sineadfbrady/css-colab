//var fs = require('fs')
//var CSS = require('css')

//var css = fs.readFileSync(__dirname + '/example.css', 'utf-8')

var body =  /^{[^{}]+}$/g
var split = /({[^}]+})/gm

module.exports = function (css) {

  var rules = []
  var invalid = []
  var lines = css.split(split)

  function trimStyle(style) {
    return style.substring(1, style.length - 1)
  }

  while(lines.length) {
    var selector = (lines.shift() || '')
    var style = (lines.shift() || '{ }')
    rules.push({selector: selector, style: trimStyle(style),
      valid: !body.test(selector) && body.test(style)
    })
  }

  return rules
}

