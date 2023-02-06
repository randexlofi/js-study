var area = window.document.getElementById('area')

//Event Listener's - To detect the functions below
area.addEventListener('click', f_click)
area.addEventListener('mouseenter', f_enter)
area.addEventListener('mouseout', f_leave)

function f_click() {
    area.innerText = 'Clicked.'
    area.style.backgroundColor = '#ddd'
}

function f_enter() {
    area.innerText = 'Entered.'
    area.style.backgroundColor = '#eee'
}

function f_leave() {
    area.innerText = 'Interact...'
    area.style.backgroundColor = '#fff'
}