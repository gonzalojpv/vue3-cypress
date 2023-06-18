import Group, { defaultGroups } from './Group'
import { Point } from './Point'
import { Animals, Dog, Horse } from './Animals'
// Wildcard
import * as ItemWild from './Item'

const point = new Point(1, 2)
console.log('Point', point)

const group = new Group(23, 'text')
console.log('Group', group)

console.log('defaultGroups', defaultGroups.admin)

const item = new ItemWild.default(12, 'test')
console.log('item', item)

console.log('item', Animals, Dog, Horse)
