

export enum Attributesbuttom {
    "name" = "name",
    "uid" = "uid",
    
    
}

class mybuttom extends HTMLElement {
    name?: string;
    uid?: number;
    
    
    static get observedAttributes() {
        const attrs: Record<Attributesbuttom, null> = { 
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
    
    attributeChangedCallback(
        propName: Attributesbuttom,
        _: string | undefined, // lo mismo que oldValue
        newValue: string | undefined
        ) {
            switch (propName) {
                case Attributesbuttom.uid:
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
        <strong align=right style="font-size:30px">ver todos los articulos de noticias</strong>
        </div>
    
      
        </div>
              </header>
        
        
            
                `;
            }
        }
    }

customElements.define("my-buttom", mybuttom);
export default mybuttom;