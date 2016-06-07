import chai from 'chai'
import { anagrams, subStringExcept } from '../src/utils/anagrams'

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

  it ('substringexcept', () => {
    subStringExcept('abc', 'a').should.equal('bc')
    subStringExcept('abc', 'b').should.equal('ac')
    subStringExcept('abc', 'c').should.equal('ab')
  })
})
