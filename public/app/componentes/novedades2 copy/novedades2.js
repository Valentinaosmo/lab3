export var Attributesnov2;
(function (Attributesnov2) {
    Attributesnov2["name"] = "name";
    Attributesnov2["uid"] = "uid";
    Attributesnov2["email"] = "email";
    Attributesnov2["username"] = "username";
    Attributesnov2["nintendo"] = "nintendo";
})(Attributesnov2 || (Attributesnov2 = {}));
class Mynovedades2 extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            email: null,
            username: null,
            nintendo: null
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
            case Attributesnov2.uid:
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
                <h1> ${this.nintendo}</h1>
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
customElements.define("my-novedades2", Mynovedades2);
export default Mynovedades2;
