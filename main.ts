input.onButtonPressed(Button.A, function () {
    pancho.move(-1)
})
input.onGesture(Gesture.Shake, function () {
    game.pause()
    basic.showString("" + (lista_de_texto._pickRandom()))
    game.resume()
})
function bala2 () {
    if (game.score() > 2) {
        balazo2 = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            balazo2.change(LedSpriteProperty.Y, 1)
            basic.pause(450)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    pancho.move(1)
})
function bala () {
    balazo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        balazo.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
}
let balazo: game.LedSprite = null
let balazo2: game.LedSprite = null
let lista_de_texto: string[] = []
let pancho: game.LedSprite = null
game.setScore(0)
pancho = game.createSprite(2, 4)
bala()
basic.forever(function () {
    if (balazo.isTouching(pancho)) {
        basic.showIcon(IconNames.No)
        game.gameOver()
        if (balazo.isTouchingEdge()) {
            game.addScore(1)
            balazo.delete()
            bala()
        }
    }
})
basic.forever(function () {
    if (balazo.isTouchingEdge()) {
        game.addScore(1)
        balazo.delete()
        bala()
    }
})
basic.forever(function () {
    if (game.score() > 15) {
        balazo.change(LedSpriteProperty.Y, 1)
        basic.pause(400)
    }
})
basic.forever(function () {
    lista_de_texto = [
    "tu puedes",
    "Bv",
    ":)",
    "XD"
    ]
})
basic.forever(function () {
    if (balazo2.isTouchingEdge()) {
        game.addScore(1)
        balazo2.delete()
        bala2()
    }
})
