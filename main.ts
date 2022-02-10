bluetooth.onBluetoothConnected(function () {
    connected = 1
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    connected = 0
    basic.showIcon(IconNames.No)
})
let connected = 0
connected = 0
bluetooth.startUartService()
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
}
basic.forever(function () {
    if (connected == 1) {
        bluetooth.uartWriteNumber(input.rotation(Rotation.Roll))
        basic.pause(100)
    }
})
