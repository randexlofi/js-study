var sum = window.document.getElementById('sum')
sum.addEventListener('click', f_sum)

function f_sum(){
    var iBox1 = window.document.getElementById('num1')
    var iBox2 = window.document.getElementById('num2')
    var divRes = window.document.getElementById('res')
    var iBox1_num = Number(iBox1.value)
    var iBox2_num = Number(iBox2.value)
    var sum = iBox1_num + iBox2_num

    divRes.innerText = `Result.: ${iBox1_num} + ${iBox2_num} = ${sum}`
}