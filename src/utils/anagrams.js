export default function anagrams(input) {
  const ret = []
  ret.push(input)
  if (input.length == 2) {
    let reverse = ''
    for (let i=input.length - 1; i>= 0; --i) {
      reverse += input.charAt(i)
    }
    ret.push(reverse)
  }
  return ret
}
