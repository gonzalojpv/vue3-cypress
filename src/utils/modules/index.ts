import Group, { defaultGroups } from './Group'
import { Point } from './Point'

const point = new Point(1, 2)
console.log('Point', point)

const group = new Group(23, 'text')
console.log('Group', group)

console.log('defaultGroups', defaultGroups.admin)
