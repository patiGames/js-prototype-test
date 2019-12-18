'use strict';

String.prototype.indexOf = function(searchValue, fromIndex = 0) {
  if (typeof searchValue === 'undefined') return -1;
  if (searchValue === null) return -1;
  if (searchValue === '') return emptySearchValue(this, fromIndex);

  let j, len2, checkSubstring;
  for (let i = fromIndex, len = this.length; i < len; i++) {
    if (this.charAt(i) === searchValue.charAt(0)) {
      checkSubstring = true;
      for (j = 1, len2 = searchValue.length; j < len2; j++) {
        if (checkSubstring && this.charAt(i + j) !== searchValue.charAt(j)) {
          checkSubstring = false;
        }
      }
      if (checkSubstring) return i;
    }
  }
  return -1;
};

function emptySearchValue(word, fromIndex) {
  if (fromIndex <= 0) return 0;
  if (word.charAt(fromIndex) === '') return word.length % fromIndex;
  return fromIndex;
}
