interface IPizza {
  prepare(): void
  bake(): void
  cut(): void
  box(): void
}

type PizzaType = 'cheese' | 'pepperoni'

class PepperoniPizza implements IPizza {
  prepare(): void {
    console.log('prepare pepperoni')
  }
  bake(): void {
    console.log('bake pepperoni')
  }
  cut(): void {
    console.log('cut pepperoni')
  }
  box(): void {
    console.log('box pepperoni')
  }
}

class CheesePizza implements IPizza {
  prepare(): void {
    console.log('prepare Cheese')
  }
  bake(): void {
    console.log('bake Cheese')
  }
  cut(): void {
    console.log('cut Cheese')
  }
  box(): void {
    console.log('box Cheese')
  }
}

// Фабрика с фабричным методом
class SimplePizzaFactory {
  public createPizza(type: PizzaType): IPizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza()
      case 'pepperoni':
        return new PepperoniPizza()
      default:
        throw new Error('incorrect type')
    }
  }
}

class PizzaStore {
  factory: SimplePizzaFactory

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory
  }

  public order(type: PizzaType): IPizza {
    const pizza = this.factory.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza
  }
}

function FactoryMain() {
  const pizzaFactory = new SimplePizzaFactory()

  const pizzaStore = new PizzaStore(pizzaFactory)

  pizzaStore.order('cheese')
}
