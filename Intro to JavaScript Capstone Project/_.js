// Groved1 CodeCademy --Intro to JavaScript Project--
// 12-3-2018

const _ = {

  clamp(number, lower, upper) {
    return Math.min(upper, Math.max(lower, number));
  },

  inRange(number, start, end) {

    if (end === undefined){
      end = start;
      start = 0;
    }

    if (start > end) {
      const temp = end;
      end = start;
      start = temp;
    }

    return ((start <= number) && (number <= end));
  },

  words(string) {
    return string.split(' ');
  },

  pad(string, length) {
    if(length <= string.length) {
      return string;
    } else {
      const startPadding = Math.floor((length - string.length) / 2);
      const endPadding = length - string.length - startPadding;

      return ' '.repeat(startPadding) + string + ' '.repeat(endPadding);
    }
  },

  has(object, key) {
    return object[key] !== undefined;
  },

  invert(object) {
    const invertedObject = {};

    for (var key in object) {
      let originalValue = object.key;
      invertedObject.originalValue = key;
    };

    return invertedObject;
  },

  findKey(object, predicate) {
    for (var key in object) {
      let value = object.key;
      let predicateReturnValue = predicate(value);

      if (predicateReturnValue) {
        return key;
      }
    };

    return undefined;
  },

  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }

    return array.slice(n);
  },

  dropWhile(array, predicate) {
    const dropNumber = array.findIndex(function array(element, index) {
      return !predicate(element, index, array);
    });

    return this.drop(array, dropNumber);
  },

  chunk(array, size) {
    if(size === undefined) {
      size = 1;
    }
    const arrayChunks = [];

    for(let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
