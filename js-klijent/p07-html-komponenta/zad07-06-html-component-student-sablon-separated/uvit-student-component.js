fetch("uvit-student-component.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {
    class Student extends HTMLElement {
        constructor() {
            // увек у конструктору на почетку позвати super()
            super();
            // придруживање ДОМ сенке уз корен 
            var shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = html;
        }

        connectedCallback() { }

        disconnectedCallback() { }

        attributeChangedCallback(attrName, oldVal, newVal) { }
    }

    customElements.define('uvit-student', Student);
}