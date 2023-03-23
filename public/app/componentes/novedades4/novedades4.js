export var Attributesnov4;
(function (Attributesnov4) {
    Attributesnov4["name"] = "name";
    Attributesnov4["uid"] = "uid";
    Attributesnov4["email"] = "email";
    Attributesnov4["username"] = "username";
    Attributesnov4["nintendo"] = "nintendo";
    Attributesnov4["titulo"] = "titulo";
})(Attributesnov4 || (Attributesnov4 = {}));
class Mynovedades4 extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            email: null,
            username: null,
            nintendo: null,
            titulo: null
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
            case Attributesnov4.uid:
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
                <link rel="stylesheet" href="./app/components/novedades4/novedades4.css">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="${this.name}" alt="" class="smal">
  </div>
  <h6> ${this.titulo}</h6>
  <div class="card-footer">
  <small>${this.username}</small>
  <p><br>
  <h6>${this.email}</h6><p>
  l ${this.nintendo}
  </div>
</div>
                
                
    
                `;
        }
    }
}
customElements.define("my-novedades4", Mynovedades4);
export default Mynovedades4;
