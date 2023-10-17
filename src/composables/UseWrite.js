export function UseWrite() {
  function write(key, val) {
    if (val) {
      window.localStorage.setItem(key, val)
    } else {
      window.localStorage.removeItem(key)
    }
  }

  return { write }
}
