// Компонент
abstract class Beverage {
  public abstract cost(): number

  description: string = 'Unknown beverage'

  public getDescription() {
    return this.description
  }
}

// Декоратор
abstract class CondimentDecorator extends Beverage {
  beverage: Beverage
  public abstract getDescription(): string

  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }
}

// Конкретный компонент
class Espresso extends Beverage {
  constructor() {
    super()
    this.description = 'Espresso'
  }

  public cost(): number {
    return 1.99
  }
}

// Конкретный компонент
class HouseBlend extends Beverage {
  constructor() {
    super()
    this.description = 'House blend coffee'
  }

  public cost(): number {
    return 0.99
  }
}

// Конкретный декоратор
class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Mocha'
  }

  public cost(): number {
    return this.beverage.cost() + 0.2
  }
}

// Конкретный декоратор
class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Whip'
  }

  public cost(): number {
    return this.beverage.cost() + 0.4
  }
}

function DecoratorMain() {
  const beverage = new Espresso()

  console.log(`${beverage.getDescription()} $${beverage.cost()}`)

  let beverage2 = new HouseBlend()

  beverage2 = new Mocha(beverage2)
  beverage2 = new Mocha(beverage2)
  beverage2 = new Whip(beverage2)

  console.log(`${beverage2.getDescription()} $${beverage2.cost()}`)
}

DecoratorMain()
