function palindrom(str){
    if (typeof str !== 'string') {
        return false;
    }   
    let cleanedStr = str.toLowerCase().replace(/\s/g, '');
    let reverseStr = '';
    for (let i = str.length-1; i >= 0; i--){
        reverseStr += str[i].toLowerCase().replace(/\s/g, '');
    }
    //console.log(cleanedStr);
    //console.log(reverseStr);
    return cleanedStr === reverseStr;
}
module.exports = palindrom;

//console.log(palindrom('А роза упала на лапу Азора'));