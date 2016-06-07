export function anagrams(input) {
  const ret = []
  ret.push(input)
  if (input.length == 2) {
    let reverse = ''
    for (let i=input.length - 1; i>= 0; --i) {
      reverse += input.charAt(i)
    }
    ret.push(reverse)
  }

export function subStringExcept(string, except) {
  let ret = ''
  for(let i=0; i<string.length; ++i) {
    if (string.charAt(i) !== except)
      ret += string.charAt(i)
  }
  return ret
}
