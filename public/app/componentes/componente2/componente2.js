export var Attributesmenu;
(function (Attributesmenu) {
    Attributesmenu["name"] = "name";
    Attributesmenu["uid"] = "uid";
    Attributesmenu["titulo"] = "titulo";
    Attributesmenu["compra"] = "compra";
    Attributesmenu["boton"] = "boton";
})(Attributesmenu || (Attributesmenu = {}));
class Mymenu extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            titulo: null,
            compra: null,
            boton: null
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
            case Attributesmenu.uid:
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
                <link rel="stylesheet" href="./app/componentes/componente2/componente2.css">
                <p>
                <p>
                </p>
                </p>
                
                
                <section>
                <div class="banner1">
                <br></br>
                <h1>${this.titulo}</h1>
                <img src="${this.name}" alt="" class="banner1">
                
                <p>
                <h1>${this.compra}</h1>
                <buttom><h4>${this.boton}</h4></buttom>
                </div>
               
    
                </section>
                `;
        }
    }
}
customElements.define("my-menu", Mymenu);
export default Mymenu;
