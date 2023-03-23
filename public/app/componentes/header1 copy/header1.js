export var Attributeshead1;
(function (Attributeshead1) {
    Attributeshead1["name"] = "name";
    Attributeshead1["uid"] = "uid";
})(Attributeshead1 || (Attributeshead1 = {}));
class myhead1 extends HTMLElement {
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
            case Attributeshead1.uid:
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
                
                <link rel="stylesheet" href="./app/componentes/header1/header1.css">
                <div class="barra">
                <img  class ="img" src="https://yt3.googleusercontent.com/ytc/AL5GRJXQ_ZwqS4HKyKWBfrsKocRrtsqfQG_0fTTphtlzVw=s900-c-k-c0x00ffffff-no-rj" alt="">
                <div class="home">Home </div>
                <div class="shows">buscar juegos </div>
                <div class="movies"> Movies </div>
                <div class="new"> New & Popular </div>
                <div class="list"> My List </div>
                ">
                </div>
        
            
                `;
        }
    }
}
customElements.define("my-head1", myhead1);
export default myhead1;
