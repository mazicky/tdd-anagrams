import chai from 'chai'
import { anagrams, reverse, subStringExcept } from '../src/utils/anagrams'

chai.should()

describe ('Test', () => {
  it ('should return anagrams of givin string length 1', () => {
    anagrams('a').should.deep.equal([ 'a' ])
  })

  it ('should return anagrams of givin string length 2', () => {
    anagrams('ab').should.deep.equal([ 'ab', 'ba' ])
  })

  it ('should return anagrams of givin string length 3', () => {
    anagrams('abc').should.deep.equal([ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ])
  })

  it ('should return anagrams of givin string length 4', () => {
    anagrams('biro').should.deep.equal([
      'biro', 'bior', 'brio', 'broi', 'boir', 'bori',
      'ibro', 'ibor', 'irbo', 'irob', 'iobr', 'iorb',
      'rbio', 'rboi', 'ribo', 'riob', 'roib', 'robi',
      'obir', 'obri', 'oibr', 'oirb', 'orbi', 'orib' ])
  })

  it ('substringexcept', () => {
    subStringExcept('abc', 'a').should.equal('bc')
    subStringExcept('abc', 'b').should.equal('ac')
    subStringExcept('abc', 'c').should.equal('ab')
  })

  it ('reverse', () => {
    reverse('a').should.equal('a')
    reverse('ab').should.equal('ba')
    reverse('abc').should.equal('cba')
    reverse('abcdefg').should.equal('gfedcba')
  })
})
