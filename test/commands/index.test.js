// export tests

const { ShowDeviceTypesCommand, ShowSdksCommand, InstallCommand, LaunchCommand, StartCommand, getdevicetypes } = require('../../src/index')

test('getdevicetypes function export', function () {
  const command = getdevicetypes
  expect(typeof command).toEqual('function')
})

test('ShowDeviceTypesCommand class export', function () {
  const command = new ShowDeviceTypesCommand()
  expect(typeof command).toEqual('object')
  expect(typeof command.run).toEqual('function')
})

test('ShowSdksCommand class export', function () {
  const command = new ShowSdksCommand()
  expect(typeof command).toEqual('object')
  expect(typeof command.run).toEqual('function')
})

test('InstallCommand class export', function () {
  const command = new InstallCommand()
  expect(typeof command).toEqual('object')
  expect(typeof command.run).toEqual('function')
})

test('LaunchCommand class export', function () {
  const command = new LaunchCommand()
  expect(typeof command).toEqual('object')
  expect(typeof command.run).toEqual('function')
})

test('StartCommand class export', function () {
  const command = new StartCommand()
  expect(typeof command).toEqual('object')
  expect(typeof command.run).toEqual('function')
})
