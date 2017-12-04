// Write a function that accepts a string as input and returns the color that it represents as a decimal expression of the binary where it goes rgb.

function cssStringToColor (colorString) {

  function validateHex (stringArray) {
    // Check hex length, check starts with '#' & check that every digit is a hex
    // this could be written with fewer lines, combining if statements into more complex logic, but would be harder to interpret.
    let stringLength = stringArray.length;
    if (!(stringLength === 4 || stringLength === 7)) {
      return 'error!';
    } else if (stringArray[0] !== '#') {
      return 'error!';
    }
    for (let i = 1; i < stringLength; i++) {
      // we could convert our character values (a-f) to decimal numbers (10-15) here, but we want validateHex to do one specific action.
      if (!(0 <= stringArray[i] <= 9) || !(stringArray[i] >= 'a' && stringArray[i] <= 'f')) {
        return 'error!';
      }
    }
  }
  function threeToSixHex (strArray) {
    // this takes an array with elements like #f00 and converts it to #ff0000
    let result = strArray[0];
    for(let i = 1; i < strArray.length; i++) {
      result = result.concat(strArray[i]).concat(strArray[i]);
    }
    return result;
  };

  function swapRGBPositionsDropHash (arrayOfChars) {
    // #ff0000 is written in order RGB, but we want it in order BGR.

  }

  function convertCharToInteger (arrayOfChars) {
    // unicode elements?
    let convertHexChars = [];
    arrayOfChars.map((element) =>
    { if(0 <= element <= 9) {
        convertHexChars.push(element)
        return;
      } else {
        switch (element) {
          case 'a':
            convertHexChars.push(10)
            break;
          case 'b':
            convertHexChars.push(11)
            break;
          case 'c':
            convertHexChars.push(12)
            break;
          case 'd':
            convertHexChars.push(13)
            break;
          case 'e':
            convertHexChars.push(14)
            break;
          case 'f':
            convertHexChars.push(15)
            break;
        }
      }})
  }

  function hexToBinary (arrayOfHex) {
    arrayOfHex.reduce()

    function convertHextoBinary (hexDigit) {
      let binaryArray = [0, 0, 0, 0];
      function maintainBase2 (baseTwoArray, position) {
        if (baseTwoArray[position] === 2) {
          baseTwoArray[position] = baseTwoArray[position]--;
          baseTwoArray[position - 1] = baseTwoArray[position - 1]++;
        }
      }
      // This could be done recurisvely and would look cleaner.
      while(0 < element <= 15) {
        binaryArray[3] = binaryArray[3] + 1;
        maintainBase2 (binaryArray, 3);
        maintainBase2 (binaryArray, 2);
        maintainBase2 (binaryArray, 1);
        if (binaryArray[3] === 2) {
          binaryArray[3] - 1;
          binaryArray[2] + 1;
        } else if (binaryArray[2] === 2) {
          binaryArray[2] - 1;
          binaryArray[1] + 1;
        } else if (binaryArray[1] === 2) {
          binaryArray[1] - 1;
          binaryArray[0] + 1;
        }
        element--;
      }
      return binaryArray;
    }

  }

  function binaryToBase10 () {

  }
  // We are iterating, inserting and validating elements in our string. I would argue it's easier to interpret and understand the code by just making it an array once, rather than trying to deal with it as a string.
  let strSplitLowArray = colorString.toLowerCase().split('');
  validateHex(strSplitLowArray);
  if (strSplitLowArray === 4) {
    strSplitLowArray = threeToSixHex(strSplitLowArray)
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
