import { expect } from 'chai';
import { isAnagram } from './anagrams';

//Test cases
describe('isAnagram - basic functionality', () => {
  //'ropes' and 'pores' ARE anagrams
  it('returns true if the 2 strings are Anagrams', () => {
    const expected = true;
    const actual = isAnagram('ropes', 'pores');
    expect(actual).to.equal(expected);
  });

  //'elbows' and 'below' NOT anagrams
  it('returns false when either of the strings has extra letters', () => {
    const expected = false;
    const actual = isAnagram('elbows', 'below');
    expect(actual).to.equal(expected);

    const actual2 = isAnagram('below', 'elbows');
    expect(actual2).to.equal(expected);
  });

  //'listens' and 'silent' NOT anagrams
  it('returns true when the strings have the same letters in different quantities', () => {
    const expected = false;
    const actual = isAnagram('listens', 'silent');
    expect(actual).to.equal(expected);
  });

  //'conversation' and 'voices rant on' ARE anagrams
  it('returns true when known anagrams have spaces in between letters', () => {
    const expected = true;
    const actual = isAnagram('conversation', 'voices rant on');
    expect(actual).to.equal(expected);
  });

  //'STATE' and 'taste' ARE anagrams
  it('returns true when known anagrams have some letters capitalized', () => {
    const expected = true;
    const actual = isAnagram('STATE', 'taste');
    expect(actual).to.equal(expected);
  });
});

//test case insensitvity

//Test space ignore
