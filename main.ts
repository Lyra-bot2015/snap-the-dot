input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        game.gameOver()
    }
})
input.onButtonPressed(Button.AB, function () {
    Sprite = game.createSprite(2, 2)
    Cheese = 200
    game.setScore(0)
})
input.onButtonPressed(Button.B, function () {
    Cheese += -10
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Sprite.delete()
    basic.showIcon(IconNames.Heart)
})
let Cheese = 0
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
Cheese = 200
basic.forever(function () {
    Sprite.ifOnEdgeBounce()
    basic.pause(500)
})
basic.forever(function () {
    Sprite.move(1)
    basic.pause(Cheese)
})
