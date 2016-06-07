export function anagrams(input) {
  if (input.length === 1) {
    return [ input ]
  }

  const ret = []
  for (let i=0; i<input.length; ++i) {
    const header = input.charAt(i)
    const subString = subStringExcept(input, header)
    const remain = anagrams(subString)
    const candidates = remain.map(sub => {
      return header+sub
    })
    ret.push(...candidates)
  }

  return ret
}

export function subStringExcept(string, except) {
  let ret = ''
  for(let i=0; i<string.length; ++i) {
    if (string.charAt(i) !== except)
      ret += string.charAt(i)
  }
  return ret
}

export function reverse(string) {
  let reverse = ''
  for (let i=string.length - 1; i>= 0; --i) {
    reverse += string.charAt(i)
  }
  return reverse
}
