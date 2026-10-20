enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    Game_sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Game_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Game_sprite.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Game_sprite.change(LedSpriteProperty.X, 1)
})
let Game_sprite: game.LedSprite = null
basic.showString("Get the random dot you are the middle one,  ")
game.setScore(0)
Game_sprite = game.createSprite(2, 2)
let sprite = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    radio.setGroup(1)
    radio.sendMessage(game.score())
    radio.sendNumber(game.score())
    if (Game_sprite.isTouching(sprite)) {
        sprite.delete()
        game.addScore(1)
        sprite = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
