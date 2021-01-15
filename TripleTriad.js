import { TTGame } from './TTGame.js'
import { TTCard } from './TTCard.js'
import { TTPlayer } from './TTPlayer.js'

const player1 = new TTPlayer(
    {
        color: 'blue',
    }
)
player1.addCards(
    [
        new TTCard(
            {
                name: 'Haurchefant Greystone',
                ranks: {
                    right: 1,
                    top: 2,
                    left: 3,
                    bottom: 4,
                },
                color: 'blue'
            }
        ),
        new TTCard(
            {
                name: 'Urianger Augurelt',
                ranks: {
                    right: 4,
                    top: 3,
                    left: 2,
                    bottom: 1,
                },
                color: 'blue'
            }
        ),
        new TTCard(
            {
                name: 'Alphinaud Leveilleur',
                ranks: {
                    right: 4,
                    top: 1,
                    left: 4,
                    bottom: 1,
                },
                color: 'blue'
            }
        ),
        new TTCard(
            {
                name: 'Alisaie Leveilleur',
                ranks: {
                    right: 1,
                    top: 4,
                    left: 1,
                    bottom: 4,
                },
                color: 'blue'
            }
        ),
        new TTCard(
            {
                name: 'Tataru Taru',
                ranks: {
                    right: 3,
                    top: 2,
                    left: 2,
                    bottom: 1,
                },
                color: 'blue'
            }
        )
    ]
)

const player2 = new TTPlayer(
    {
        color: 'red',
    }
)
player2.addCards(
    [
        new TTCard(
            {
                name: 'Haurchefant Greystone',
                ranks: {
                    right: 1,
                    top: 2,
                    left: 3,
                    bottom: 4,
                },
                color: 'red'
            }
        ),
        new TTCard(
            {
                name: 'Urianger Augurelt',
                ranks: {
                    right: 4,
                    top: 3,
                    left: 2,
                    bottom: 1,
                },
                color: 'red'
            }
        ),
        new TTCard(
            {
                name: 'Alphinaud Leveilleur',
                ranks: {
                    right: 4,
                    top: 1,
                    left: 4,
                    bottom: 1,
                },
                color: 'red'
            }
        ),
        new TTCard(
            {
                name: 'Alisaie Leveilleur',
                ranks: {
                    right: 1,
                    top: 4,
                    left: 1,
                    bottom: 4,
                },
                color: 'red'
            }
        ),
        new TTCard(
            {
                name: 'Tataru Taru',
                ranks: {
                    right: 3,
                    top: 2,
                    left: 2,
                    bottom: 1,
                },
                color: 'red'
            }
        )
    ]
)

const game = new TTGame(
    {
        parent: document.body,
        players: [
            player1,
            player2
        ]
    }
)

console.log(game)