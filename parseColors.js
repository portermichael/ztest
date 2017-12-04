// Write a function that accepts a string as input and returns the color that it represents as a decimal expression of the binary where it goes rgb.

function cssStringToColor (colorString) {
  console.log(colorString);
  function validateHex (stringArray) {
    // Check hex length, check starts with '#' & check that every digit is a hex
    // this could be written with fewer lines, combining if statements into more complex logic, but would be harder to interpret.
    // We could convert our character values (a-f) to decimal numbers (10-15) and drop the '#' after validation, but we want validateHex to do one specific action. We want it to run first so that we fail fast too.
    let stringLength = stringArray.length;
    if (!(stringLength === 4 || stringLength === 7)) {
      throw new Error ('String must begin with # and  be a valid hexadecimal with total length 4 or 7.')
    } else if (stringArray[0] !== '#') {
      throw new Error ('Begin string with #.')
    }
    for (let i = 1; i < stringLength; i++) {
      if (!(stringArray[i] >= 0 && stringArray[i] <= 9) && !(stringArray[i] >= 'a' && stringArray[i] <= 'f')) {
        throw new Error ('String is not hexadecimal.')
      }
    }
  }
  function threeToSixHex (strArray) {
    // this takes an array with elements like #f00 and converts it to #ff0000
    let result = [strArray[0]];
    for (let i = 1; i < strArray.length; i++) {
      result.push(strArray[i]);
      result.push(strArray[i]);
    }
    return result;
  };

  function prepStringToColorArr (arrayOfChars) {
    // #ff0000 is written in order RGB, but we want it in order BGR when we get to binary.
    // We could call .shift(), .reverse and have an incremental for loop but I don't want to manipulate the input. The decrementing for loop is unpreferred.
    let result = [];
    for (let i = arrayOfChars.length - 1; i !== 0; i = i - 2) {
      result.push(arrayOfChars[i-1]);
      result.push(arrayOfChars[i]);
    }
    return result;
  }

  function convertCharToInteger (arrayOfChars) {
    // I don't know of a great way to get js to use hex instead of base 10, so we need to do some kind of converstion. I first used a clunky switch statement and though using unicode would be doing the same thing. It is essentially doing the same thing, but now I've got it all in one line.
    let convertHexChars = [];
    return arrayOfChars.map((element) => {
      if (element >= 0 && element <= 9) {
        convertHexChars.push(element);
      } else {
        convertHexChars.push(element.charCodeAt() - 87);
      }
    });
  }

  function hexToBinary (arrayOfHex) {
    function convertHexToBinary (hexDigit) {
      // This could be done recurisvely, but js isn't really optimized for recursion. I think the clarity of nomenclature and extracting out the helper function makes our code small and clean enough to maintain readability.
      let binaryArray = [0, 0, 0, 0];
      function maintainBase2 (baseTwoArray, position) {
        if (baseTwoArray[position] === 2) {
          baseTwoArray[position] = baseTwoArray[position]--;
          baseTwoArray[position - 1] = baseTwoArray[position - 1]++;
        }
      }
      while (0 < element <= 15) {
        binaryArray[3] = binaryArray[3] + 1;
        for (let i = 3; i !== 0; i--) {
          maintainBase2 (binaryArray, i)
        }
        element--;
      }
      return binaryArray;
    }

    return arrayOfHex.map(convertHexToBinary(element));
  }

  function binaryToBase10 () {

  }
  // We are iterating, inserting and validating elements in our string. I would argue it's easier to interpret and understand the code by just making it an array once, rather than manipulating it as a string.
  let strSplitLowArray = colorString.toLowerCase().split('');
  validateHex(strSplitLowArray);
  if (strSplitLowArray.length === 4) {
    strSplitLowArray = threeToSixHex(strSplitLowArray)
  }
  // i now have a vaild array of length 7.
  strSplitLowArray = prepStringToColorArr(strSplitLowArray);
  console.log(strSplitLowArray, 'end');
}


function testeroonie (str) {
  try {
    console.log(cssStringToColor(str));
    console.log('valid', '************************')
  } catch (error) {
    console.log(error.name + ':' + error.message, '************************');
  }
}

// no hash
testeroonie('fffF');
// test wrong length
testeroonie('#fFff');
// test upper and lowercase outside of range
testeroonie('#gff');
testeroonie('#Gff');
// test numbers outside of range
testeroonie('#15ff');
// error -> no #, can't double,
testeroonie('oops');
// test numbers in range
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%% valid test cases %%%%%%%%%%%%%%%%%%%%%%%%%%')
testeroonie('#3ff');
// test lower cases so A is a and within range
testeroonie('#aAf');
// valid
testeroonie('#fA00c3')
// 255 -> ff is hex 255, converts to -b- 00000000 -g- 00000000 -r- 11111111 in binary, drop the 0s and convert to dec
testeroonie('#F00')
// 8388736 - > 80 is hex 128, converts to -b- 10000000 -g- 00000000 -r- 10000000
testeroonie('#800080')
// 42495 -> ff is hex 255, a5 is hex 165, converts to -b- 00000000 -g- 10100101 - r- 11111111
testeroonie('#ffa500')
