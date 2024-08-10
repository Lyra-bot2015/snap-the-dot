input.onButtonPressed(Button.B, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        if (game.score() == 5) {
            Sprite.delete()
            game.addScore(1)
            Cheese += -100
            basic.showString("LEVEL 2")
            Sprite = game.createSprite(2, 2)
        } else {
            if (game.score() == 10) {
                Sprite.delete()
                game.addScore(1)
                Cheese += -100
                basic.showString("LEVEL 3")
                Sprite = game.createSprite(2, 2)
            } else {
                if (game.score() == 15) {
                    Sprite.delete()
                    game.addScore(1)
                    Cheese += -100
                    basic.showString("LEVEL 4")
                    Sprite = game.createSprite(2, 2)
                } else {
                    if (game.score() == 20) {
                        Sprite.delete()
                        game.addScore(1)
                        Cheese += -100
                        basic.showString("LEVEL 5")
                        Sprite = game.createSprite(2, 2)
                    } else {
                        if (game.score() == 25) {
                            Sprite.delete()
                            game.addScore(1)
                            basic.showString("WINNER!")
                            music.play(music.stringPlayable("A - F - F A D G ", 120), music.PlaybackMode.UntilDone)
                            Cheese = 800
                        } else {
                            game.addScore(1)
                        }
                    }
                }
            }
        }
    } else {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        game.gameOver()
        basic.clearScreen()
        Cheese = 800
    }
})
let Cheese = 0
let Sprite: game.LedSprite = null
basic.showString("LEVEL 1")
Sprite = game.createSprite(2, 2)
Cheese = 800
game.setScore(0)
basic.forever(function () {
    Sprite.ifOnEdgeBounce()
    basic.pause(Cheese)
})
basic.forever(function () {
    Sprite.change(LedSpriteProperty.X, 1)
    basic.pause(Cheese)
})
