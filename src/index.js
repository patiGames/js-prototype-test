'use strict';

const prestringo = 'adue';
console.log(prestringo.indexOf('', 2));

String.prototype.indexOf = function(searchValue, position = 0) {
  if (typeof searchValue === 'undefined') return -1;
  if (searchValue === null) return -1;
  if (searchValue === '') return emptySearchValue(this, position);

  for (let i = 0, len = searchValue.length; i < len; i++) {}
  return -1;
};

function emptySearchValue(string, position) {
  if (position <= 0) return 0;
  if (position >= string.length) return string.length % position;
  return position;
}

const stringo = 'adue';
console.log(stringo.indexOf('', 2));
