export var Attributesfijo;
(function (Attributesfijo) {
    Attributesfijo["name"] = "name";
    Attributesfijo["uid"] = "uid";
})(Attributesfijo || (Attributesfijo = {}));
class Myfijo extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, // lo mismo que oldValue
    newValue) {
        switch (propName) {
            case Attributesfijo.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/profile/profile.css">
                <section>
                <img src="${this.name}" alt="">
                
               
                </p>
                </section>
                `;
        }
    }
}
customElements.define("my-fijo", Myfijo);
export default Myfijo;
