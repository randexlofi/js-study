/*var vel = 50
console.log(`Your vehicle's velocity is ${vel}Km/h.`)

if(vel > 60){
    console.log('You have exceeded the speed. Fined!')
}*/ 

/*var country = 'Portugal'
if(country.toLowerCase() == 'portugal'){
    console.log('You are from Portugal.')
}else{
    console.log('You are an foreigner.')
}*/

var calculate = window.document.querySelector('input#calculate')
var verifyC = window.document.querySelector('input#verifyC')

calculate.addEventListener('click', f_calculate)
verifyC.addEventListener('click', f_verifyC)

function f_calculate(){
    var txtvel = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')

    res.innerHTML = `<p>Your speed is ${Number(txtvel.value)}Km/h</p>`
    if(Number(txtvel.value) > 60){
        res.innerHTML += '<p><b style="color: red;">Fined!</b></p>'
    }else{
        res.innerHTML += '<p><b style="color: green;">OK!</b></p>'
    }
}

function f_verifyC(){
    var txtCountry = window.document.querySelector('input#txtcountry')
    var resC = window.document.querySelector('div#resC')

    if(txtCountry.value == 'Portugal'){
        resC.innerHTML += `<p>You are from Portugal.</p>`
    }else{
        resC.innerHTML += `<p>You are an foreigner.</p>`
    }
}
