interface IObservable {
  registerObserver(o: IObserver): void
  removeObserver(o: IObserver): void
  notifyObserver(): void
}

interface IObserver {
  update(): void
}

// Concrete observable
class WeatherData implements IObservable {
  public observers: IObserver[]
  private humidity: number = 0
  private temp: number = 0
  private pressure: number = 0

  constructor() {
    this.observers = []
  }

  registerObserver(o: IObserver): void {
    this.observers.push(o)
  }

  removeObserver(o: IObserver): void {
    this.observers = this.observers.filter((ob) => ob !== o)
  }

  notifyObserver(): void {
    this.observers.forEach((ob) => {
      ob.update()
    })
  }

  measurementsChanged() {
    this.notifyObserver()
  }

  setMeasurements(temp: number, humidity: number, pressure: number): void {
    this.temp = temp
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }

  public getTemp(): number {
    return this.temp
  }

  public getHumidity(): number {
    return this.humidity
  }

  public getPressure(): number {
    return this.pressure
  }
}

interface DisplayElement {
  display(): void
}

// Concrete observer
class CurrentConditionsDisplay implements IObserver, DisplayElement {
  private temp: number = 0
  private humidity: number = 0
  private weatherData: WeatherData

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  display(): void {
    console.log(`Current conditions: temp: ${this.temp} humidity: ${this.humidity}`)
  }

  update(): void {
    this.temp = this.weatherData.getTemp()
    this.humidity = this.weatherData.getHumidity()
    this.display()
  }
}

function main() {
  const weatherData = new WeatherData()

  const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData)

  weatherData.setMeasurements(50, 40, 30)
  weatherData.setMeasurements(10, 60, 40)
  weatherData.setMeasurements(20, 50, 90)
}

main()
