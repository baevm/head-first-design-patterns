// Strategy
export interface FlyBehavior {
  fly(): void
}

// Implementations of strategy

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('Im flying')
  }
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log('i cant fly')
  }
}

export class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log('Im flying on rocket')
  }
}
