import { ref, watch } from 'vue'
import { UseWrite } from './UseWrite.js'

let { write } = UseWrite()

export function UseLocalStorage(key, defValue = null) {
  // Check if the key is existed in storage
  let storedValue = window.localStorage.getItem(key)

  let val
  if (storedValue) {
    val = ref(storedValue)
  } else {
    val = ref(defValue)

    write(key, val.value)
  }

  watch(val, (v) => {
    write(key, v)
  })

  return val
}
