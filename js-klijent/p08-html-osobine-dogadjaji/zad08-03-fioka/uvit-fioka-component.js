fetch("uvit-fioka-component.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {

    class Fioka extends HTMLElement {
        constructor() {
            // увек у конструктору на почетку позвати super()
            super();
            // придруживање ДОМ сенке уз корен 
            let senkaKoren = this.attachShadow({ mode: 'open' });
            senkaKoren.innerHTML = html;
            // реферисње на визуелни елеменат
            this.statusElement = senkaKoren.querySelector('h2');
            // постављање ослушкивача догађаја за click
            this.addEventListener('click', e => {
                // ако је ослушкивач онемогућен, клик се игнорише
                if (this.disabled)
                    return;
                this.pomeriFioku();
            });

        }

        connectedCallback() { }

        disconnectedCallback() { }

        // особина отворено
        get otvoreno() {
            return this.hasAttribute('otvoreno');
        }

        set otvoreno(val) {
            // Reflect the value of the open property as an HTML attribute.
            if (val) {
                this.setAttribute('otvoreno', 'XXX');
            } else {
                this.removeAttribute('otvoreno');
            }
        }

        // особина disabled
        get disabled() {
            return this.hasAttribute('disabled');
        }

        set disabled(val) {
            // Reflect the value of the disabled property as an HTML attribute.
            if (val) {
                this.setAttribute('disabled', '');
            } else {
                this.removeAttribute('disabled');
            }
        }

        static get observedAttributes() {
            return ['disabled', 'otvoreno'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (this.disabled) {
                this.setAttribute('tabindex', '-1');
                this.setAttribute('aria-disabled', 'true');
            } else {
                this.setAttribute('tabindex', '0');
                this.setAttribute('aria-disabled', 'false');
                if (this.otvoreno) {
                    this.statusElement.innerHTML = "otvoreno";
                    this.statusElement.setAttribute('style', 'background-color:green');
                } else {
                    this.statusElement.innerHTML = "zatvoreno";
                    this.statusElement.setAttribute('style', 'background-color:red');
                }
            }
        }

        pomeriFioku() {
            this.otvoreno = !this.otvoreno;
            console.log(`Fioka je pomerena. Status fioke: ${this.hasAttribute('otvoreno') ? 'otvoreno' : 'zatvoreno'}`);
        }

    }

    // нови елеменат
    customElements.define('uvit-fioka', Fioka);
}