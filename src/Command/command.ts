// Command interface
interface Command {
  execute(): void
}

// Concrete command
class LightOnCommand implements Command {
  private light: Light

  constructor(light: Light) {
    this.light = light
  }

  execute(): void {
    this.light.on()
  }
}

// Concrete command
class LightOffCommand implements Command {
  private light: Light

  constructor(light: Light) {
    this.light = light
  }

  execute(): void {
    this.light.off()
  }
}

// Receiver
class Light {
  on(): void {
    console.log('The light is on')
  }

  off(): void {
    console.log('The light is off')
  }
}

// Invoker
class RemoteControl {
  command: Command

  constructor(command: Command) {
    this.command = command
  }

  public setCommand(command: Command) {
    this.command = command
  }

  public buttonWasPressed() {
    this.command.execute()
  }
}

function CommandMain() {
  const light = new Light()
  const lightOn = new LightOnCommand(light)

  const remote = new RemoteControl(lightOn)

  remote.buttonWasPressed()
}
