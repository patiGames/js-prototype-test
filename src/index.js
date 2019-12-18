'use strict';

const prestringo = 'adue';
console.log(prestringo.indexOf('U', 2));

String.prototype.indexOf = function(searchValue, fromIndex = 0) {
  if (typeof searchValue === 'undefined') return -1;
  if (searchValue === null) return -1;
  if (searchValue === '') return emptySearchValue(this, fromIndex);

  for (let i = fromIndex, len = this.length; i < len; i++) {
    if (this.charAt(i) === searchValue.charAt(0)) {
      return i;
    }
  }
  return -1;
};

function emptySearchValue(word, fromIndex) {
  if (fromIndex <= 0) return 0;
  if (word.charAt(fromIndex) === '') return word.length % fromIndex;
  return fromIndex;
}

const stringo = 'adue';
console.log(stringo.indexOf('U', 2));
