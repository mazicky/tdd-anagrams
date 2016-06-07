import chai from 'chai'
import anagrams from '../src/utils/anagrams'

chai.should()

describe ('Test', () => {
  it ('should return anagrams of givin string', () => {
    anagrams('a').should.deep.equal([ 'a' ])
  })
})
