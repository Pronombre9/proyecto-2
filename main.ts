basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.lightLevel() < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.buttonIsPressed(Button.B) || input.lightLevel() > 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (false) {
    	
    } else {
    	
    }
})
