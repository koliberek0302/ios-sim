const ShowDeviceTypesCommand = require('./commands/showdevicetypes')
const ShowSdksCommand = require('./commands/showsdks')
const InstallCommand = require('./commands/install')
const LaunchCommand = require('./commands/launch')
const StartCommand = require('./commands/start')
const { getDeviceTypes } = require('./helpers')

function deprecatedMessage (old, nnew) {
  console.warn(`${old} is deprecated, use ${nnew} instead.`)
}

module.exports = {
  getdevicetypes: () => { // legacy for backwards compatibility
    deprecatedMessage('ios-sim.getdevicetypes', 'ShowDeviceTypesCommand')
    return getDeviceTypes()
  },
  ShowDeviceTypesCommand,
  ShowSdksCommand,
  InstallCommand,
  LaunchCommand,
  StartCommand
}
