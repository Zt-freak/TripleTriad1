import { TTSpace } from './TTSpace.js'

export class TTGame {
    constructor (args) {
        this.players = args.players
        this.currentTurn = this.players[0]
        this.grid = [
            [new TTSpace({card: null}), new TTSpace({card: null}), new TTSpace({card: null})],
            [new TTSpace({card: null}), new TTSpace({card: null}), new TTSpace({card: null})],
            [new TTSpace({card: null}), new TTSpace({card: null}), new TTSpace({card: null})]
        ]
        this.gameBoard = document.createElement('div')
        this.optionsMenu = document.createElement('div')
        this.parentElement = args.parent

        this.setGameBoard()
        this.setOptionsMenu()
        this.render()
    }

    setGameBoard () {
        this.gameBoard.classList.add('tripletriad-gameboard')
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                this.gameBoard.appendChild(this.grid[i][j].HTMLElement)
            }
        }
    }

    setOptionsMenu () {
        this.optionsMenu.classList.add('tripletriad-options')
        for (let i = 0; i < this.currentTurn.deck.length; i++) {
            this.optionsMenu.appendChild(this.currentTurn.deck[i].HTMLElement)
        }
    }

    render () {
        this.parentElement.innerHTML = ''
        this.parentElement.appendChild(this.gameBoard)
        this.parentElement.appendChild(this.optionsMenu)
    }
}