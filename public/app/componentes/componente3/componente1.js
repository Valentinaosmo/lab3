export var Attributes;
(function (Attributes) {
    Attributes["name"] = "name";
    Attributes["uid"] = "uid";
    Attributes["email"] = "email";
    Attributes["username"] = "username";
})(Attributes || (Attributes = {}));
class MyProfile extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            email: null,
            username: null
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
            case Attributes.uid:
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
                this is for email ${this.email}
                </p>
                <p>
                this is for titule ${this.username}
                </p>
                </section>
                `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
