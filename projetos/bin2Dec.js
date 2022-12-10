// Codigo que converte num binario em numero decimal

function binaryToDecimal(n) {
    let num = n
    let decValue = 0
    let base = 1
    let temp = num

    while (temp) {
        let lastDigit = temp % 10
        temp = Math.floor(temp / 10)
        
        decValue += lastDigit * base
        base = base * 2
    }
    return console.log(decValue)
}

binaryToDecimal(11111111)
 
 

