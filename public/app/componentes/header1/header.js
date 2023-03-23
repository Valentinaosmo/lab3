export var Attributeshead;
(function (Attributeshead) {
    Attributeshead["name"] = "name";
    Attributeshead["uid"] = "uid";
})(Attributeshead || (Attributeshead = {}));
class myhead extends HTMLElement {
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
            case Attributeshead.uid:
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
                <h1></h1>
               
                </section>
                `;
        }
    }
}
customElements.define("my-head", myhead);
export default myhead;
