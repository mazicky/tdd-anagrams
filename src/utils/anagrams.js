export default function anagrams(input) {
  const ret = []
  ret.push(input)
  if (input.length == 2) {
    let reverse = ''
    reverse += input.charAt(1)
    reverse += input.charAt(0)
    ret.push(reverse)
  }
  return ret
}
