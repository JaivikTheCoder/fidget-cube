input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . # . #
        # . . . #
        # # # # #
        `)
    for (let index = 0; index < 2; index++) {
        music.playMelody("C C5 C C5 C C5 C C5 ", 125)
        music.playMelody("F B C E A G F E ", 500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        music.setTempo(120)
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
    }
})
