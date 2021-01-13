const alb = "abcdefghijklmnopqrstuvwxyz"
const name = "Nguyen Dac Son"
function isCharacter(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char >= 'Z')
}
 function soNhanCach(name) {
    const input = name.toLowerCase()
    let num = 0
    for (let i = 0 ; i < input.length ; i++) {
        if (isCharacter(input[i]) && !isNguyenAm(input[i])) {
            for (let j = 0 ; j < alb.length ; j++) {
                if (input[i] === alb[j]) {
                    num += (j % 9 + 1)
                }
            }
        }
    }
    num = laySoDon(num)
    return num
}
const isNumber = char => char >= '0' && char <= '9' 
  function duongDoiSo(date) {
    let num = 0
    for (let i = 0 ; i < date.length ; i++) {
        if (isNumber(date[i])) num += parseInt(date[i])
    }
    return laySoDon(num)
}
const isNguyenAm = char => char === 'u' || char === 'e' || char === 'o' || char === 'a' || char === 'i'
function soKhatTam(name) {
    const input = name.toLowerCase()
    let num = 0
    for (let i = 0 ; i < input.length ; i++) {
        if (isNguyenAm(name[i])) {
            for (let j = 0 ; j < alb.length ; j++) {
                if (input[i] === alb[j]) {
                    num += (j % 9 + 1)
                }
            }
        }
    }
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
const today = new Date("8/11/2001")
console.log(today.getMonth());
const todayS = [today.getDate(),today.getMonth() + 1,today.getFullYear()].toString()
console.log(soNhanCach("nguyen dac son"))
console.log(soKhatTam("nguyen dac son"))
console.log(duongDoiSo(todayS))
export {laySoDon,duongDoiSo,soKhatTam}