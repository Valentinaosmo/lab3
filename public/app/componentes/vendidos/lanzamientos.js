export var Attributeslanzamientos;
(function (Attributeslanzamientos) {
    Attributeslanzamientos["name"] = "name";
    Attributeslanzamientos["uid"] = "uid";
})(Attributeslanzamientos || (Attributeslanzamientos = {}));
class mylanzamientos extends HTMLElement {
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
            case Attributeslanzamientos.uid:
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
            
                <link rel="stylesheet" href="./app/componentes/destacados/destacados.css">
                <header>
       <h2> Nuevos lanzamientos de Nintendo Switch </h2>
       
        
            
                `;
        }
    }
}
customElements.define("my-lanzamientos", mylanzamientos);
export default mylanzamientos;
