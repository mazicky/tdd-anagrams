export function anagrams(input) {
  const ret = []

  if (input.length === 3) {
    for (let i=0; i<3; ++i) {
      const header = input.charAt(i)
      const remain = anagrams(subStringExcept(input, header))
      const candidates = remain.map(sub => {
        return header+sub
      })
      ret.push(...candidates)
    }
  } else {
    ret.push(input)
  }

  if (input.length === 2) {
    let reverse = ''
    for (let i=input.length - 1; i>= 0; --i) {
      reverse += input.charAt(i)
    }
    ret.push(reverse)
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
