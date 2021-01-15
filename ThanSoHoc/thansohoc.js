const alb = "abcdefghijklmnopqrstuvwxyz"
const name = "Nguyen Dac Son"
function isCharacter(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char >= 'Z')
}
function soNhanCach(name) {
    const input = name.replace(/[ueoai]+/g,'')
    return getNumFromName(input)
}
function soKhatTam(name) {
    const input = name.replace(/[^ueoai]+/g,'')
    return getNumFromName(input)
}
function soDinhMenh(name) {
       return getNumFromName(name)
}
function getNumFromName(name) {
    const input = name.replace(/[^a-z]+/g,'').toLowerCase()
    let num = 0
    for (let i = 0 ; i < input.length ; i++) {
        num += ((input[i].charCodeAt() -96) % 9)
    }
    return laySoDon(num)
}
const isNumber = char => char >= '0' && char <= '9' 
  function duongDoiSo(date) {
    let num = 0
    for (let i = 0 ; i < date.length ; i++) {
        if (isNumber(date[i])) num += parseInt(date[i])
    }
    return laySoDon(num)
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

export {laySoDon,duongDoiSo,soKhatTam,soNhanCach}
