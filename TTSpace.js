export class TTSpace {
    constructor (args) {
        this.HTMLElement = document.createElement('div')
        
        this.setHTMLRepresentation = this.setHTMLRepresentation.bind(this)
        this.card = args.card
        
        this.setHTMLRepresentation()
    }

    setHTMLRepresentation () {
        this.HTMLElement.classList.add('tripletriad-space')
    }

    setCard (card) {
        this.card = card
    }

    renderCard () {
        this.HTMLElement.innerHTML = ''
        this.HTMLElement.appendChild(this.card)
    }
}