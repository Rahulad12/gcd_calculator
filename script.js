// let result = document.getElementById("get_gcd")
// const a = parseInt(prompt("enter the number a "))
// const b = parseInt(prompt("enter the number b"))
function CalculateGCD() {
    const a = parseInt(document.getElementById('gcd_a').value);
    const b = parseInt(document.getElementById('gcd_b').value);

    function Calculategcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return Calculategcd(b, a % b);
        }
    }
    document.getElementById('get_gcd').innerHTML = "GCD" + "( " + a + ", " + b + " )" + " = " + Calculategcd(a, b);
}
