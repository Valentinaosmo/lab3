export enum AttributesDes {
    "name" = "name",
    "uid" = "uid",
    "email"="email",
    "username"="username",
    "leermas"="leermas",
    "fecha"="fecha",
    "novedades"="novedades"
}

class myDesk extends HTMLElement {
    name?: string;
    uid?: number;
    email?:string;
    username?:string;
    leermas?:string;
    fecha?:string;
    novedades?:string;
    
    static get observedAttributes() {
        const attrs: Record<AttributesDes, null> = { 
            uid: null,
            name: null,
            email:null,
            username:null,
            leermas:null,
            fecha:null,
            novedades:null
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
        propName: AttributesDes,
        _: string | undefined, // lo mismo que oldValue
        newValue: string | undefined
        ) {
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
                <link rel="stylesheet" href="./app/componentes/componente3/componente3.css">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
                <h3>${this.novedades}</h3>

<ul class="menu">
<li class="list-item">
                  <div class="card" style="width: 40rem;">
                    <div class="card-body">
                      
                      <img src="${this.name}" alt="" class="smal">
                    </div>
                    ${this.fecha}
                    <p>
                      <div class="card-footer">
                        <h5>${this.username}</h5>
                        <p>
                          ${this.email}
                          <p>
                            <h6>${this.leermas}</h6>
                      </div>
                    </div>
    </li>
</ul>
    
              

                `;
            }
        }
    }

customElements.define("my-des", myDesk);
export default myDesk;