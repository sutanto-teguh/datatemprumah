basic.showLeds(`
    # . . . #
    . # . # .
    . # . # .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(100)
})
