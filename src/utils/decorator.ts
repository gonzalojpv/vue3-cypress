// So What is This Decorators
// Decorators are a feature in TypeScript that allows you to add additional behavior to a class, property, accessor, method or parameter.
// They are the way of modifying the behavior of a class or its members by adding new functionality or changing the existing functionality.

// @classDecorator
// myClass Test {
//    @propertyDecorator
//    myProperty: string;

//    @methodDecoratorOne
//    @methodDecoratorTwo
//    myMethod(@parameterDecorator myParam) {}
// }
// If we want to pass a parameter to a decorator, we create a wrapper function
// that returns the decorator function and takes the desired parameters.
// This is called a Decorator factory.

// Class decorator
export const SetTitle = (title: string) => {
  // target parameter in the decorator function is the prototype of the class
  return (target: any) => {
    target.prototype.title = title
  }
}

@SetTitle('DefaultTitle')
export class MyClass {
  constructor(public title: string) {}
}
// Property Decorator

function propertyDecorators(target: any, propertyKey: string) {
  console.log(target.constructor.name)
  console.log(`property Key name :${propertyKey}`)
  /*Property value is undefined for non staic property
     as it is not yet initialized, but we can access the value of static property here. */
  console.log(`property value :${target[propertyKey]}`)
}

export class propetryDecoratorExample {
  @propertyDecorators
  name = 'property inside class'

  @propertyDecorators
  static staticProperty = 'Static property'
}
const instance = new propetryDecoratorExample()
console.log('instance', instance)

// When you use this decorator, the value will be trimmed before being set,
// The reason for creating a symbol is that the target
// parameter in the decorator function is the prototype of the class
function Min(min: number) {
  return (targe: any, propertyName: string) => {
    const descriptor: PropertyDescriptor = {
      get() {
        return 'hia'
      },
      set(v: string) {
        if (v.length < min) {
          throw new Error(`the property ${propertyName} would be `)
        }
      },
    }
  }
}

export class User {
  @Min(6)
  public password: string
  constructor(public name: string, public lastName: string, password: string) {
    this.password = password
  }

  get fullName() {
    return `${this.name} ${this.lastName}`
  }
}
