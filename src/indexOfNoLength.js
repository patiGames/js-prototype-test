'use strict';

String.prototype.indexOf = function (searchValue, fromIndex = 0) {
  if (typeof searchValue === 'undefined') return -1;
  if (searchValue === null) return -1;
  if (searchValue === '') return emptySearchValue(this, fromIndex);

  let i = fromIndex;
  let j;
  while (this.charAt(i) != '') {
    j = 0;
    while (
      this.charAt(i + j) === searchValue.charAt(j) &&
      !hasCompletedSubstring(searchValue, j)
    ) {
      j++;
    }
    if (hasCompletedSubstring(searchValue, j)) return i;
    i++;
  }

  return -1;
};

function hasCompletedSubstring(searchValue, index) {
  return searchValue.charAt(index) === '';
}

function emptySearchValue(word, fromIndex) {
  if (fromIndex <= 0) return 0;
  if (word.charAt(fromIndex) === '') return word.length % fromIndex;
  return fromIndex;
}