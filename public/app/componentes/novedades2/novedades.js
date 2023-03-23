export var Attributesnov;
(function (Attributesnov) {
    Attributesnov["name"] = "name";
    Attributesnov["uid"] = "uid";
    Attributesnov["email"] = "email";
    Attributesnov["username"] = "username";
    Attributesnov["leermas"] = "leermas";
})(Attributesnov || (Attributesnov = {}));
class Mynovedades extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            email: null,
            username: null,
            leermas: null
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
            case Attributesnov.uid:
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
                <h1> ${this.leermas}</h1>
                <img src="${this.name}" alt="">
               
                <p>
                ${this.email}
                </p>
                <p>
                 ${this.username}
                </p>
                </section>
                `;
        }
    }
}
customElements.define("my-novedades", Mynovedades);
export default Mynovedades;
