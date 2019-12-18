import {
  expect
} from 'chai';
import '../src/index';

describe('indexOf edge cases', () => {

  let stringToSearch;

  beforeEach(() => {
    stringToSearch = 'adeu';
  });

  it('should be -1 when undefined', () => {
    let substringToSearch;
    expect(stringToSearch.indexOf(substringToSearch)).to.eql(-1);
  });

  it('should be -1 when null', () => {
    let substringToSearch = null;
    expect(stringToSearch.indexOf(substringToSearch)).to.eql(-1);
  });

  it('should be 0 when empty string', () => {
    expect(stringToSearch.indexOf('')).to.eql(0);
  });

  it('should be index when empty string', () => {
    expect(stringToSearch.indexOf('', 2)).to.eql(2);
  });

});