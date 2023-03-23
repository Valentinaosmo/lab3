export var AttributesDes;
(function (AttributesDes) {
    AttributesDes["name"] = "name";
    AttributesDes["uid"] = "uid";
    AttributesDes["email"] = "email";
    AttributesDes["username"] = "username";
    AttributesDes["leermas"] = "leermas";
    AttributesDes["fecha"] = "fecha";
})(AttributesDes || (AttributesDes = {}));
class myDesk extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            email: null,
            username: null,
            leermas: null,
            fecha: null
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
            case AttributesDes.uid:
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
                <p>
                ${this.email}
                </p>
                <p>
                this is for titule ${this.username}
                </p>
                ${this.leermas}
                fecha
                ${this.fecha}
                </section>
                `;
        }
    }
}
customElements.define("my-des", myDesk);
export default myDesk;
