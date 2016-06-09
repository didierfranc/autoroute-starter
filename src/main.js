import $ from 'autoroute.js'

function hello () {
  this.html = `Hello World`
}

$.create('hello', hello)
$.start('hello')
