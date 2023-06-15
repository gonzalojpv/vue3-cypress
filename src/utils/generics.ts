export function log<T, V>(a: T, b: V): V {
  console.log('Generic:', `${a}, ${b}`)

  return b
}
