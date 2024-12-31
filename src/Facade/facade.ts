class Amplifier {
  public on() {
    console.log('amplifier on')
  }

  public setVolume(newVolume: number) {
    console.log('new volume ', newVolume)
  }
}

class Tuner {
  public on() {
    console.log('tuner on')
  }

  public off() {
    console.log('tuner off')
  }
}

class StreamingPlayer {
  public on() {
    console.log('player on')
  }

  public off() {
    console.log('player off')
  }
}

class Projector {
  public on() {
    console.log('projector on')
  }

  public off() {
    console.log('projector off')
  }

  public wideScreenMode() {
    console.log('wide screen toggle')
  }
}

class TheaterLights {
  public on() {
    console.log('lights on')
  }

  public off() {
    console.log('lights off')
  }
}

class ProjectorScreen {
  public on() {
    console.log('screen on')
  }

  public off() {
    console.log('screen off')
  }
}

class HomeTheaterFacade {
  amplifier: Amplifier
  tuner: Tuner
  projector: Projector
  streamingPlayer: StreamingPlayer
  lights: TheaterLights
  screen: ProjectorScreen

  constructor(
    amp: Amplifier,
    tuner: Tuner,
    projector: Projector,
    streamingPlayer: StreamingPlayer,
    lights: TheaterLights,
    screen: ProjectorScreen,
  ) {
    this.amplifier = amp
    this.tuner = tuner
    this.projector = projector
    this.streamingPlayer = streamingPlayer
    this.lights = lights
    this.screen = screen
  }

  public watchMovie() {
    this.lights.on()

    this.screen.on()

    this.projector.on()
    this.projector.wideScreenMode()

    this.amplifier.on()
    this.amplifier.setVolume(10)

    this.streamingPlayer.on()
    this.tuner.on()
  }
}

function FacadeMain() {
  const amplifier: Amplifier = new Amplifier()
  const tuner: Tuner = new Tuner()
  const projector: Projector = new Projector()
  const streamingPlayer: StreamingPlayer = new StreamingPlayer()
  const lights: TheaterLights = new TheaterLights()
  const screen: ProjectorScreen = new ProjectorScreen()

  const homeTheater = new HomeTheaterFacade(amplifier, tuner, projector, streamingPlayer, lights, screen)

  homeTheater.watchMovie()
}
