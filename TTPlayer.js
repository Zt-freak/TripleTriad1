export class TTPlayer {
    constructor (args) {
        this.deck = []
        this.color = args.color
    }

    addCards(deck){
        this.deck = deck
    }
}