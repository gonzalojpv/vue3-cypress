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
