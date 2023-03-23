export enum Attributeshead {
    "name" = "name",
    "uid" = "uid",
    
    
}

class myhead extends HTMLElement {
    name?: string;
    uid?: number;
    
    
    static get observedAttributes() {
        const attrs: Record<Attributeshead, null> = { 
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
        propName: Attributeshead,
        _: string | undefined, // lo mismo que oldValue
        newValue: string | undefined
        ) {
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
                <link rel="stylesheet" href="./app/componentes/header/header.css">
                <section>
                <img src="imagen.PNG">
                <h1></h1>
            
                </section>
                `;
            }
        }
    }

customElements.define("my-head", myhead);
export default myhead;