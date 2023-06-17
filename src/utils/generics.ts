export function log<T, V>(a: T, b: V): V {
  console.log('Generic:', `${a}, ${b}`)

  return b
}

export async function fetchData<T>(resource: string): Promise<T> {
  const result = await window.fetch(`${resource}`)
  return result.json()
}

export class Developer<T> {
  computer: T

  constructor(t: T) {
    this.computer = t
  }
}
// interfaces generic
interface KeyValue<T, V> {
  key: T
  value: V
}
interface Product {
  id: string
}

export function fetchProduct(): KeyValue<string, Product> {
  return {
    key: 'product id',
    value: { id: 'product id' },
  }
}
// generic constraints
interface User {
  id: string
  name: string
}

export function print<T extends User>(t: T): T {
  console.log('Out:', t)
  return t
}

print({ id: 'qw', name: 'test' })
