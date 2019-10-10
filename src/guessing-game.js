class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minNumber = min;
    this.maxNumber = max;
  }

  guess() {
    this.midNumber = Math.ceil((this.minNumber + this.maxNumber)/2);
    return this.midNumber;
  }

  lower() {
    this.maxNumber =  this.midNumber;
  }

  greater() {
    this.minNumber = this.midNumber;
  }
}

module.exports = GuessingGame;