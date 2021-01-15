export class TTCard {
    constructor (args) {
        this.name = args.name
        this.ranks = {
            right: args.ranks.right,
            top: args.ranks.top,
            left: args.ranks.left,
            bottom: args.ranks.bottom
        }
        this.isPlayed = false
        this.color = args.color
        this.HTMLElement = document.createElement('div')

        this.setColor = this.setColor.bind(this)

        this.setHTMLRepresentation()
    }

    setColor(color, setHTML) {
        this.color = color
        if (setHTML) {
            setHTMLRepresentation()
        }
    }

    setHTMLRepresentation () {
        this.HTMLElement.classList.add('tripletriad-card')
        this.HTMLElement.style.backgroundColor = this.color
        
        if (this.isPlayed) {
            this.HTMLElement.style.opacity = 0.8
        }
    }
}