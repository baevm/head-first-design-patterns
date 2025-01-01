// Template
abstract class CaffeineBeverage {
  // template method
  prepareRecipe() {
    this.boilWater()
    this.brew()
    this.pourInCup()

    if (this.isWithCondiments()) {
      this.addCondiments()
    }
  }

  // common methods
  boilWater() {
    console.log('boiling')
  }

  pourInCup() {
    console.log('pouring')
  }

  abstract brew(): void
  abstract addCondiments(): void

  // hook
  isWithCondiments(): boolean {
    return true
  }
}

class Tea extends CaffeineBeverage {
  brew(): void {
    console.log('steeping the tea')
  }
  addCondiments(): void {
    console.log('adding lemon')
  }

  isWithCondiments(): boolean {
    return false
  }
}

class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log('dripping coffee')
  }
  addCondiments(): void {
    console.log('adding milk')
  }

  isWithCondiments(): boolean {
    return true
  }
}
