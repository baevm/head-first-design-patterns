import { FlyBehavior, FlyRocketPowered, FlyWithWings } from './flyBehavior'
import { Quack, QuackBehavior } from './quackBehavior'

abstract class Duck {
  private flyBehavior: FlyBehavior
  private quackBehavior: QuackBehavior

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior
    this.quackBehavior = quackBehavior
  }

  public abstract display(): void

  public performFly(): void {
    this.flyBehavior.fly()
  }

  public performQuack(): void {
    this.quackBehavior.quack()
  }

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb
  }

  public swim(): void {
    console.log('Swimming')
  }
}

class MallardDuck extends Duck {
  constructor() {
    const flyBehavior = new FlyWithWings()
    const quackBehavior = new Quack()

    super(flyBehavior, quackBehavior)
  }

  public display(): void {
    console.log('Im Mallard Duck')
  }
}

function main() {
  const mallardDuck = new MallardDuck()
  mallardDuck.performFly()
  mallardDuck.performQuack()

  const rockerFlyer = new FlyRocketPowered()
  mallardDuck.setFlyBehavior(rockerFlyer)

  mallardDuck.performFly()
}

main()
