let son1 = Number(prompt("Son1 ni kiriting: "));
let son2 = Number(prompt("Son2 ni kiriting: "));

function kattami () {
    if (son1 > son2) {
        alert(son1 + " katta " + son2 + "dan");
    }  else {
        alert(son1 + " kichkina " + son2 + "dan");
    }
}

kattami();