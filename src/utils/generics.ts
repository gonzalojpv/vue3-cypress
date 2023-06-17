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

class State<T> {
  protected data: T[] = []

  add(t: T): void {
    this.data.push(t)
  }

  getState(): T[] {
    return this.data
  }
}

type ObjectId = {
  id: string
}
class StateDelete<T extends ObjectId> extends State<T> {
  remove(id: string) {
    this.data = this.data.filter((x) => x.id !== id)
  }
}

const stateDelete = new StateDelete<User>()
console.log('stateDelete', stateDelete)
class StateUser extends State<User> {
  resetPasswords() {
    // logic
  }
}

const stateUser = new StateUser()
console.log('stateUser', stateUser)

// Keyof operator
type Calendar = {
  id: number
  source: string
  owner: string
}

const calendar: Calendar = { id: 1, source: 'Duckduckgo', owner: 'Me' }

function getProp<T>(object: T, property: keyof T): unknown {
  return object[property]
}

getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'source')

// Utility types
type Dot = {
  x: number
  y: number
  desc?: string
}

type DotOptional = Partial<Dot>
type DotRequired = Required<Dot>

const keyVal: Record<string, number> = {
  'I am a stirng': 42,
}
console.log('keyVal', keyVal)
type kv = { [key: string]: number }

const p: Omit<Dot, 'desc'> = {
  x: 1,
  y: 2,
}
console.log('p', p)
const p2: Omit<Dot, 'desc' | 'y'> = {
  x: 1,
}
console.log('p1', p2)

const p3: Pick<Dot, 'x' | 'y'> = {
  x: 1,
  y: 2,
}
console.log('p3', p3)

const readOnlyP: Readonly<Dot> = {
  x: 3,
  y: 3,
  desc: 'this is a description',
}
console.log('readOnlyP', readOnlyP)
