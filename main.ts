input.onGesture(Gesture.TiltLeft, function () {
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.giggle.playUntilDone()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
music.playTone(131, music.beat(BeatFraction.Whole))
music.playTone(147, music.beat(BeatFraction.Whole))
music.playTone(165, music.beat(BeatFraction.Whole))
music.playTone(175, music.beat(BeatFraction.Whole))
music.playTone(196, music.beat(BeatFraction.Whole))
music.playTone(220, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(262, music.beat(BeatFraction.Whole))
