interface Duck {
  quack(): void
  fly(): void
}

class MallardDuck implements Duck {
  quack(): void {
    console.log('quack')
  }
  fly(): void {
    console.log('flying')
  }
}

interface Turkey {
  gobble(): void
  fly(): void
}

class WildTurkey implements Turkey {
  gobble(): void {
    console.log('gobble')
  }
  fly(): void {
    console.log('flying')
  }
}

class TurkeyToDuckAdapter implements Duck {
  turkey: Turkey

  constructor(turkey: Turkey) {
    this.turkey = turkey
  }

  quack(): void {
    this.turkey.gobble()
  }

  fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly()
    }
  }
}

function AdapterMain() {
  const duck = new MallardDuck()

  duck.fly()
  duck.quack()

  const turkey = new WildTurkey()

  turkey.fly()
  turkey.gobble()

  const turkeyAdapter = new TurkeyToDuckAdapter(turkey)

  turkeyAdapter.fly()
  turkeyAdapter.quack()
}
