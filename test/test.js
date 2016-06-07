import chai from 'chai'
import anagrams from '../src/utils/anagrams'

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
})
