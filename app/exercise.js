exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      } else if (item > arr.length) {
        return -1;
      }
    }
  },

  sum : function(arr) {
    // return arr.reduce( (sum, num) => sum + num );
    // ruby equivalent would be...
    // arr.reduce { |sum, num| sum += num }

    var sum = 0;
    for (var index = 0; index < arr.length; index++) {
      sum += arr[index]
    }
    return sum;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  // reverseString : function(str) {
  //   return str.split('').reverse().join('');
  // },

  reverseString : function(str) {
    var revStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
    };
  return revStr;
  },

  longestSubString : function(str) {
    var split = str.split(" ");
    var string = "";
    for (var i = 0; i < split.length; i++ ) {
      if (split[i].length > string.length) {
        string = split[i];
      }
    }
    return string;
  },

  letterMoveForward : function(str) {
    var split = str.split("");
    var string = "";
    var number = "0123456789";
    var numberArray = number.split("");
    for (var i = 0; i < split.length; i++) {
      if (split[i] == "z") {
        string += "a";
      } else if (_.contains(numberArray, split[i])) {
        string += split[i];
      } else {
      string += String.fromCharCode(str.charCodeAt(i) + 1);
      }
    };
   return string;
  },
  // str = "launch academy"
  capitalizeWords : function(str) {
    var split = str.split(" ");
    // split = ["launch", "academy"]
    for (var i = 0; i < split.length; i++ ) {
      split[i] = split[i].split('');
      // split = [['l','a','u','n','c','h'],"academy"]
      split[i][0] = split[i][0].toUpperCase();
      // split = [['L','a','u','n','c','h'],"academy"]
      split[i] = split[i].join('');
      // split = ["Launch","academy"]
    }
    return split.join(' ');
  }
};
