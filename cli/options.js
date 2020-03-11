class Options {
  constructor(argv) {
    this.interactiveMode = Boolean(argv.find(isInteractiveSwitch))
    this.isTTY = Boolean(argv.find(isTTYSwitch))
    this.cucumberArgv = argv.filter(arg => !isInteractiveSwitch(arg) && !isTTYSwitch(arg) && !noSandbox(arg))
  }
}

function isInteractiveSwitch(arg) {
  return arg === '--interactive' || arg === '-i'
}

function isTTYSwitch(arg) {
  return arg === '--TTY'
}

function noSandbox(arg) {
  return arg === '--no-sandbox'
}

module.exports = Options
