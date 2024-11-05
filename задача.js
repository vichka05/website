function verify() {
    console.log("a, b, x")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let x = parseInt(elementX.value);
    console.log(a, b, x)

    let low, high
    if (a < b) { low = a;    high = b;  }
    else { low = b; high = a; }

    if (x >= low && x <= high) {
        result = "Принадлежит"
        check = true;
    } 
    else {
        result = "Не принадлежит"
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}



let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementX = document.getElementById("x");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)


