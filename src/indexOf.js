'use strict';

String.prototype.indexOf = function (searchValue, fromIndex = 0) {
  if (typeof searchValue === 'undefined') return -1;
  if (searchValue === null) return -1;
  if (searchValue === '') return emptySearchValue(this, fromIndex);

  let j, len2;
  for (let i = fromIndex, len = this.length; i < len; i++) {
    if (this[i] === searchValue[0]) {
      for (j = 1, len2 = searchValue.length; j < len2; j++) {
        if (this[i + j] !== searchValue[j]) break;
      }
      if (j === searchValue.length) return i;
    }
  }
  return -1;
};

function emptySearchValue(word, fromIndex) {
  if (fromIndex <= 0) return 0;
  if (word.length <= fromIndex) return word.length % fromIndex;
  return fromIndex;
}