#!/usr/bin/env bash
browserify css.js -o static/css-colab.js --debug

{
  echo '<!DOCTYPE HTML><html><body></body><script>'
  browserify client.js --debug --exports require || exit 1
  echo '</script></html>'
} > static/editor.html

