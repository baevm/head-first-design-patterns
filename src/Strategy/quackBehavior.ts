// Strategy
export interface QuackBehavior {
  quack(): void
}

// Implementations of strategy

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack')
  }
}

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('No quack')
  }
}

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('Squaek')
  }
}
