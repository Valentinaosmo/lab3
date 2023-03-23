export enum Attributes {
    "name" = "name",
    "uid" = "uid",
    "email"="email",
    "username"="username"
}

class MyProfile extends HTMLElement {
    name?: string;
    uid?: number;
    email?:string;
    username?:string;
    
    static get observedAttributes() {
        const attrs: Record<Attributes, null> = { 
            uid: null,
            name: null,
            email:null,
            username:null
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
        propName: Attributes,
        _: string | undefined, // lo mismo que oldValue
        newValue: string | undefined
        ) {
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

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="./app/componentes/componente1/componente1.css">          
<div class="banner1">
                <div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="${this.name}" alt="" class="smal">
  </div>
  <div class="card-footer">
    <h6>${this.email}</h6><p>
    <br>
    <br>
    ${this.username}
  </div>
</div>
      </div>
                       
     

                `;
            }
        }
    }

    customElements.define("my-profile", MyProfile);
export default MyProfile;