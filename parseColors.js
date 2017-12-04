// Write a function that accepts a string as input and returns the color that it represents as a decimal expression of the binary where it goes rgb.

function cssStringToColor (colorString) {

  function validateHex (stringArray) {
    // Check hex length, check starts with '#' & check that every digit is a hex
    // this could be written more succinctly, but it would be less clear
    let stringLength = stringArray.length;
    if (!(stringLength === 4 || stringLength === 7)) {
      return 'error!';
    }
    if (stringArray[0] !== '#') {
      return 'error!';
    }
    for (let i = 1; i < stringLength; i++) {
      if (!(0 <= stringArray[i] <= 9) || !(stringArray[i] >= 'a' && stringArray[i] <= 'f')) {
        return 'error!';
      }
    }
  }
  function doubleHexDigits (strArray) {
    let result = strArray[0];
    for(let i = 1; i < strArray.length; i++) {
      result = result.concat(strArray[i]).concat(strArray[i]);
    }
    return result;
  };

  function swapRGBPositionsDropHash (arrayOfChars) {

  }

  function convertCharToInteger (arrayOfChars) {
    let convertHexChars = [];
    arrayOfChars.map((element) =>
    { if(0 <= element <= 9) {
        covertHexChars.push(element)
        return;
      } else {
        switch (element) {
          case 'a':
            covertHexChars.push(10)
            break;
          case 'b':
            covertHexChars.push(11)
            break;
          case 'c':
            covertHexChars.push(12)
            break;
          case 'd':
            covertHexChars.push(13)
            break;
          case 'e':
            covertHexChars.push(14)
            break;
          case 'f':
            covertHexChars.push(15)
            break;
        }
      }})
  }

  function intToBinary (arrayOfHex) {
    arrayOfHex.reduce()
    while(0 <= arrayOfHex <= 15) {

    }
  }
  let strSplitLowArray = colorString.toLowerCase().split('');
  validateHex(strSplitLowArray);
  if (strSplitLowArray === 4) {
    strSplitLowArray = doubleHexDigits(strSplitLowArray)
  }


}
// 255 -> ff is hex 255, converts to -b- 00000000 -g- 00000000 -r- 11111111 in binary, drop the 0s and convert to dec
console.log(cssStringToColor('#F00'));
// 8388736 - > 80 is hex 128, converts to -b- 10000000 -g- 00000000 -r- 10000000
console.log(cssStringToColor('#800080'));
// 42495 -> ff is hex 255, a5 is hex 165, converts to -b- 00000000 -g- 10100101 - r- 11111111
console.log(cssStringToColor('#ffa500'));
// error -> no #, can't double,
console.log(cssStringToCoor('oops'));
