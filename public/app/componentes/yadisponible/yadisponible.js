export var Attributesdisponibles;
(function (Attributesdisponibles) {
    Attributesdisponibles["name"] = "name";
    Attributesdisponibles["uid"] = "uid";
})(Attributesdisponibles || (Attributesdisponibles = {}));
class mydisponibles extends HTMLElement {
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
            case Attributesdisponibles.uid:
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
                <link rel="stylesheet" href="./app/componentes/yadisponible/yadisponible.css">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
            <div class="container">
                <span> <strong align=right style="font-size:30px">Ya disponible</strong>
                <button class=" btn btn-danger" style="margin-left:20%"> mas informacion </button>

                 <img style="width:40px;display:inline;float:right;margin-left:40%" src="data:image/png;base64,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" alt="">
            </span>
            </div>


        </div>
       
     
            
                `;
        }
    }
}
customElements.define("my-disponibles", mydisponibles);
export default mydisponibles;
