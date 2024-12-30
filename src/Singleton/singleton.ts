class ChocolateBoiler {
  private empty: boolean
  private boiled: boolean

  private static instance: ChocolateBoiler

  private constructor() {
    this.empty = true
    this.boiled = false
  }

  public static getInstance(): ChocolateBoiler {
    if (this.instance === null) {
      this.instance = new ChocolateBoiler()
    }

    return this.instance
  }

  public boil() {
    this.boiled = true
    console.log('boiled')
  }
}

function SingletonMain() {
  // error
  // const testBoiler = new ChocolateBoiler()

  const boiler = ChocolateBoiler.getInstance()

  boiler.boil()
}
