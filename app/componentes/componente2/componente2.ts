export enum Attributesmenu {
    "name" = "name",
    "uid" = "uid",
    "titulo"="titulo",
    "compra"="compra",
    "boton"="boton"
    
}

class Mymenu extends HTMLElement {
    name?: string;
    uid?: number;
    titulo?:string;
    compra?:string;
    boton?:string;
   
    
    static get observedAttributes() {
        const attrs: Record<Attributesmenu, null> = { 
            uid: null,
            name: null,
            titulo:null,
            compra:null,
            boton:null
            
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
    
    attributeChangedCallback(
        propName: Attributesmenu,
        _: string | undefined, // lo mismo que oldValue
        newValue: string | undefined
        ) {
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