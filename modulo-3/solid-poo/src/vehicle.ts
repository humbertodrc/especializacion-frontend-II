abstract class Vehicle {
  protected speed: number = 0;
  protected engineStarted: boolean = false;

  start() {
    this.engineStarted = true;
  }

  stop() {
    this.engineStarted = false;
  }

  accelerate(targetSpeed: number) {
    if (this.engineStarted) {
      this.speed = targetSpeed;
    } else {
      throw new Error("Engine is not started yet");
    }
  }
}

export default Vehicle;