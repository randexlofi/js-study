var p1 = window.document.getElementsByTagName('p')[1]
var body = window.document.body
//var divMsg = window.document.getElementById('msg')
var divMsg = window.document.querySelector('div#msg')

window.document.write(`The paragraph is: ${p1.innerHTML}`)

//p1.style.color = 'grey'
//body.style.backgroundColor = '#111'

divMsg.style.backgroundColor = '#333'
divMsg.style.textAlign = 'center'
divMsg.style.cursor = 'pointer'
divMsg.style.margin = '.5rem'
divMsg.style.padding = '.5rem'
divMsg.style.width = '15%'
