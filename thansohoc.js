const alb = "abcdefghijklmnopqrstuvwxyz"
const name = "Nguyen Dac Son"
function isCharacter(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char >= 'Z')
}
function soNhanCach(name) {
    const input = name.toLowerCase()
    let num = 0
    for (let i = 0 ; i < input.length ; i++) {
        if (isCharacter(input[i])) {
            for (let j = 0 ; j < alb.length ; j++) {
                if (input[i] === alb[j]) {
                    num += (j % 9 + 1)
                }
            }
        }
    }
    num
    num = laySoDon(num)
    return num
}
function laySoDon(num) {
    while (num >= 10) {
         let lnum = num
         let tongCSo = 0
         while (lnum > 0) {
             const chuSo = lnum % 10
             tongCSo += chuSo
             lnum =parseInt(lnum / 10)
             
         }
         num =  tongCSo
    }
    return num
}
console.log(soNhanCach("le ngoc trung"))