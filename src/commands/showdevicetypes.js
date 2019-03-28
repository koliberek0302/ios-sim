const BaseCommand = require('../BaseCommand')
const { getDeviceTypes } = require('../helpers')

class ShowDeviceTypesCommand extends BaseCommand {
  async run () {
    const deviceTypes = getDeviceTypes()

    this.log(deviceTypes.join('\n'))
    return deviceTypes
  }
}

ShowDeviceTypesCommand.description = 'List the available device types'

ShowDeviceTypesCommand.flags = {
  ...BaseCommand.flags
}

module.exports = ShowDeviceTypesCommand
