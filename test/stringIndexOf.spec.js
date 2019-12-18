import {
  expect
} from 'chai';
import '../src/indexOf';

describe('indexOf edge cases', () => {

  let stringToSearch;

  beforeEach(() => {
    stringToSearch = 'adeu';
  });

  it('should be -1 when searchValue undefined', () => {
    let substringToSearch;
    expect(stringToSearch.indexOf(substringToSearch)).to.eql(-1);
  });

  it('should be -1 when searchValue null', () => {
    let substringToSearch = null;
    expect(stringToSearch.indexOf(substringToSearch)).to.eql(-1);
  });

  it('should be 0 when searchValue is empty string', () => {
    expect(stringToSearch.indexOf('')).to.eql(0);
  });

  it('should be 2 when searchValue empty string and index 2', () => {
    expect(stringToSearch.indexOf('', 2)).to.eql(2);
  });

  it('should be -1 when empty string', () => {
    const stringToSearchEmpty = '';
    expect(stringToSearchEmpty.indexOf('a', 2)).to.eql(-1);
  });
});

describe('indexOf single characters', () => {

  let stringToSearch;

  beforeEach(() => {
    stringToSearch = 'adeu';
  });

  it('should be -1 when searchValue character does not exist', () => {
    let substringToSearch = 'x';
    expect(stringToSearch.indexOf(substringToSearch)).to.eql(-1);
  });

  it('should be -1 when searchValue character is capital', () => {
    let substringToSearch = 'U';
    expect(stringToSearch.indexOf(substringToSearch)).to.eql(-1);
  });

  it('should be 2 when searchValue character is 2', () => {
    let substringToSearch = 'e';
    expect(stringToSearch.indexOf(substringToSearch)).to.eql(2);
  });

  it('should be -1 when searchValue character is 2 and fromIndex is 3', () => {
    expect(stringToSearch.indexOf('e', 3)).to.eql(-1);
  });

});

describe('indexOf words', () => {

  let stringToSearch;

  beforeEach(() => {
    stringToSearch = 'adeu fins demà josep';
  });

  it('should be -1 when searchValue character does not exist', () => {
    let substringToSearch = 'adei';
    expect(stringToSearch.indexOf(substringToSearch)).to.eql(-1);
  });

  it('should be 5 when searchValue substring starts at 5', () => {
    let substringToSearch = 'fins';
    expect(stringToSearch.indexOf(substringToSearch)).to.eql(5);
  });

  it('should be -1 when searchValue substring starts at 5 and fromIndex is 6', () => {
    let substringToSearch = 'fins';
    expect(stringToSearch.indexOf(substringToSearch, 6)).to.eql(-1);
  });

});