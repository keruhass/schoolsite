let answer = 0
let check = 0
// Первый вопрос
btn11.addEventListener("click", function(){
    answer += 1
    document.getElementById("btn11").style.backgroundColor = 'black';
    document.getElementById("btn12").style.backgroundColor = 'white';
    document.getElementById("btn13").style.backgroundColor = 'white';
    document.getElementById("btn14").style.backgroundColor = 'white';
})
btn12.addEventListener("click", function(){
    answer = 0
    document.getElementById("btn11").style.backgroundColor = 'white';
    document.getElementById("btn12").style.backgroundColor = 'black';
    document.getElementById("btn13").style.backgroundColor = 'white';
    document.getElementById("btn14").style.backgroundColor = 'white';
})
btn13.addEventListener("click", function(){
    answer = 0
    document.getElementById("btn11").style.backgroundColor = 'white';
    document.getElementById("btn12").style.backgroundColor = 'white';
    document.getElementById("btn13").style.backgroundColor = 'black';
    document.getElementById("btn14").style.backgroundColor = 'white';
})
btn14.addEventListener("click", function(){
    answer = 0
    document.getElementById("btn11").style.backgroundColor = 'white';
    document.getElementById("btn12").style.backgroundColor = 'white';
    document.getElementById("btn13").style.backgroundColor = 'white';
    document.getElementById("btn14").style.backgroundColor = 'black';
})
// Второй вопрос
btn21.addEventListener("click", function(){
    if (check == 1) {
        answer -= 1
    }
    document.getElementById("btn21").style.backgroundColor = 'black';
    document.getElementById("btn22").style.backgroundColor = 'white';
    document.getElementById("btn23").style.backgroundColor = 'white';
    document.getElementById("btn24").style.backgroundColor = 'white';
})
btn22.addEventListener("click", function(){
    if (check == 1) {
        answer -= 1
    }
    document.getElementById("btn21").style.backgroundColor = 'white';
    document.getElementById("btn22").style.backgroundColor = 'black';
    document.getElementById("btn23").style.backgroundColor = 'white';
    document.getElementById("btn24").style.backgroundColor = 'white';
})
btn23.addEventListener("click", function(){
    answer += 1
    check += 1
    document.getElementById("btn21").style.backgroundColor = 'white';
    document.getElementById("btn22").style.backgroundColor = 'white';
    document.getElementById("btn23").style.backgroundColor = 'black';
    document.getElementById("btn24").style.backgroundColor = 'white';
})
btn24.addEventListener("click", function(){
    if (check == 1) {
        answer -= 1
    }
    document.getElementById("btn21").style.backgroundColor = 'white';
    document.getElementById("btn22").style.backgroundColor = 'white';
    document.getElementById("btn23").style.backgroundColor = 'white';
    document.getElementById("btn24").style.backgroundColor = 'black';
})
// Третий вопрос
btn31.addEventListener("click", function(){
    if (check == 2) {
        answer -= 1
    }
    document.getElementById("btn31").style.backgroundColor = 'black';
    document.getElementById("btn32").style.backgroundColor = 'white';
    document.getElementById("btn33").style.backgroundColor = 'white';
    document.getElementById("btn34").style.backgroundColor = 'white';
})
btn32.addEventListener("click", function(){
    answer += 1
    check += 1
    document.getElementById("btn31").style.backgroundColor = 'white';
    document.getElementById("btn32").style.backgroundColor = 'black';
    document.getElementById("btn33").style.backgroundColor = 'white';
    document.getElementById("btn34").style.backgroundColor = 'white';
})
btn33.addEventListener("click", function(){
    if (check == 2) {
        answer -= 1
    }
    document.getElementById("btn31").style.backgroundColor = 'white';
    document.getElementById("btn32").style.backgroundColor = 'white';
    document.getElementById("btn33").style.backgroundColor = 'black';
    document.getElementById("btn34").style.backgroundColor = 'white';
})
btn34.addEventListener("click", function(){
    if (check == 2) {
        answer -= 1
    }
    document.getElementById("btn31").style.backgroundColor = 'white';
    document.getElementById("btn32").style.backgroundColor = 'white';
    document.getElementById("btn33").style.backgroundColor = 'white';
    document.getElementById("btn34").style.backgroundColor = 'black';
})
// Четвертый вопрос
btn41.addEventListener("click", function(){
    if (check == 3) {
        answer -= 1
    }
    document.getElementById("btn41").style.backgroundColor = 'black';
    document.getElementById("btn42").style.backgroundColor = 'white';
    document.getElementById("btn43").style.backgroundColor = 'white';
    document.getElementById("btn44").style.backgroundColor = 'white';
})
btn42.addEventListener("click", function(){
    if (check == 3) {
        answer -= 1
    }
    document.getElementById("btn41").style.backgroundColor = 'white';
    document.getElementById("btn42").style.backgroundColor = 'black';
    document.getElementById("btn43").style.backgroundColor = 'white';
    document.getElementById("btn44").style.backgroundColor = 'white';
})
btn43.addEventListener("click", function(){
    if (check == 3) {
        answer -= 1
    }
    document.getElementById("btn41").style.backgroundColor = 'white';
    document.getElementById("btn42").style.backgroundColor = 'white';
    document.getElementById("btn43").style.backgroundColor = 'black';
    document.getElementById("btn44").style.backgroundColor = 'white';
})
btn44.addEventListener("click", function(){
    answer += 1
    check += 1
    document.getElementById("btn41").style.backgroundColor = 'white';
    document.getElementById("btn42").style.backgroundColor = 'white';
    document.getElementById("btn43").style.backgroundColor = 'white';
    document.getElementById("btn44").style.backgroundColor = 'black';
})
result.addEventListener("click", function(){
    document.getElementById('res').innerHTML = "Количество правильных ответов: "+ answer;
}) 