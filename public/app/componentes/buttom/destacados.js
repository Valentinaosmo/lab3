export var Attributesdestacados;
(function (Attributesdestacados) {
    Attributesdestacados["name"] = "name";
    Attributesdestacados["uid"] = "uid";
})(Attributesdestacados || (Attributesdestacados = {}));
class mydestacados extends HTMLElement {
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
            case Attributesdestacados.uid:
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
        <div>
        <div class="row">
        <br>
        <br>
        <br>
        <strong align=right style="font-size:30px">Destacados</strong>
        </div>
    
      
        </div>
              </header>
        
        
            
                `;
        }
    }
}
customElements.define("my-destacados", mydestacados);
export default mydestacados;
