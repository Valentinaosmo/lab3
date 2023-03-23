// import "./components/index.js";
import data from "./componentes/componente1/data.js";
import { Attributes } from "./componentes/componente1/componente1.js";
import data2 from "./componentes/componente2/data2.js";
import { Attributesmenu } from "./componentes/componente2/componente2.js";
import data3 from "./componentes/componente3/data3.js";
import { AttributesDes } from "./componentes/componente3/componente3.js";
import dataheader from "./componentes/header/dataheader.js";
import { Attributeshead } from "./componentes/header/header.js";
import { Attributeshead1 } from "./componentes/header1/header1.js";
import datanovedades from "./componentes/novedades/datanovedades.js";
import { Attributesnov } from "./componentes/novedades/novedades.js";
import datanovedades2 from "./componentes/novedades2/datanovedades2.js";
import { Attributesnov2 } from "./componentes/novedades2/novedades2.js";
import datanovedades4 from "./componentes/novedades4/datanovedades4.js";
import { Attributesdisponibles } from "./componentes/yadisponible/yadisponible.js";
import datadisponible from "./componentes/yadisponible/datadisponible.js";
import { Attributesdestacados } from "./componentes/destacados/destacados.js";
import { Attributeslanzamientos } from "./componentes/lanzamientos/lanzamientos.js";
import { Attributesvendidos } from "./componentes/vendidos/vendidos.js";
import { Attributesnov4 } from "./componentes/novedades4/novedades4.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.menu = [];
        this.destacadas = [];
        this.head = [];
        this.head1 = [];
        this.novedade = [];
        this.novedade2 = [];
        this.novedade4 = [];
        this.disponibles = [];
        this.destacados = [];
        this.lanzamientos = [];
        this.vendidos = [];
        this.buttom = [];
        this.attachShadow({ mode: "open" });
        dataheader.forEach((hdr) => {
            const profilehead = this.ownerDocument.createElement("my-head");
            profilehead.setAttribute(Attributeshead.name, hdr.name);
            //profilehead.setAttribute(Attributes.username, user.username);
            this.head.push(profilehead);
        });
        // }
        data2.forEach((e) => {
            const profilemenu = this.ownerDocument.createElement("my-menu");
            profilemenu.setAttribute(Attributesmenu.name, e.name);
            profilemenu.setAttribute(Attributesmenu.titulo, e.titulo);
            profilemenu.setAttribute(Attributesmenu.compra, e.compra);
            profilemenu.setAttribute(Attributesmenu.boton, e.boton);
            this.menu.push(profilemenu);
        });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attributes.name, user.name);
            profileCard.setAttribute(Attributes.email, user.email);
            profileCard.setAttribute(Attributes.username, user.username);
            this.profiles.push(profileCard);
        });
        // }
        data3.forEach((U) => {
            const profileDes = this.ownerDocument.createElement("my-des");
            profileDes.setAttribute(AttributesDes.name, U.name);
            profileDes.setAttribute(AttributesDes.username, U.username);
            profileDes.setAttribute(AttributesDes.fecha, U.fecha);
            profileDes.setAttribute(AttributesDes.leermas, U.leermas);
            profileDes.setAttribute(AttributesDes.email, U.email);
            profileDes.setAttribute(AttributesDes.novedades, U.novedades);
            this.destacadas.push(profileDes);
        });
        dataheader.forEach((hdre) => {
            const profilehead1 = this.ownerDocument.createElement("my-head1");
            profilehead1.setAttribute(Attributeshead1.name, hdre.name);
            //profilehead.setAttribute(Attributes.username, user.username);
            this.head1.push(profilehead1);
        });
        datanovedades.forEach((o) => {
            const profilenov = this.ownerDocument.createElement("my-novedades");
            profilenov.setAttribute(Attributesnov.name, o.name);
            profilenov.setAttribute(Attributesnov.leermas, o.leermas);
            profilenov.setAttribute(Attributesnov.username, o.username);
            profilenov.setAttribute(Attributesnov.email, o.email);
            this.novedade.push(profilenov);
        });
        datanovedades2.forEach((a) => {
            const profilenov2 = this.ownerDocument.createElement("my-novedades2");
            profilenov2.setAttribute(Attributesnov2.name, a.name);
            profilenov2.setAttribute(Attributesnov2.nintendo, a.nintendo);
            profilenov2.setAttribute(Attributesnov2.username, a.username);
            profilenov2.setAttribute(Attributesnov2.email, a.email);
            profilenov2.setAttribute(Attributesnov2.titulo, a.titulo);
            this.novedade2.push(profilenov2);
        });
        datanovedades4.forEach((a) => {
            const profilenov4 = this.ownerDocument.createElement("my-novedades4");
            profilenov4.setAttribute(Attributesnov4.name, a.name);
            profilenov4.setAttribute(Attributesnov4.nintendo, a.nintendo);
            profilenov4.setAttribute(Attributesnov4.username, a.username);
            profilenov4.setAttribute(Attributesnov4.email, a.email);
            profilenov4.setAttribute(Attributesnov4.titulo, a.titulo);
            this.novedade4.push(profilenov4);
        });
        datadisponible.forEach((po) => {
            const profiledisponible = this.ownerDocument.createElement("my-disponibles");
            profiledisponible.setAttribute(Attributesdisponibles.name, po.name);
            this.disponibles.push(profiledisponible);
        });
        datadisponible.forEach((pou) => {
            const profiledestacado = this.ownerDocument.createElement("my-destacados");
            profiledestacado.setAttribute(Attributesdestacados.name, pou.name);
            this.destacados.push(profiledestacado);
        });
        datadisponible.forEach((pou) => {
            const profilelanzamiento = this.ownerDocument.createElement("my-lanzamientos");
            profilelanzamiento.setAttribute(Attributeslanzamientos.name, pou.name);
            this.lanzamientos.push(profilelanzamiento);
        });
        datadisponible.forEach((poe) => {
            const profilevendidos = this.ownerDocument.createElement("my-vendidos");
            profilevendidos.setAttribute(Attributesvendidos.name, poe.name);
            this.vendidos.push(profilevendidos);
        });
    }
    connectedCallback() {
        this.render();
    }
    ;
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.head1.forEach((head1) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(head1);
            });
            this.head.forEach((head) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(head);
            });
            this.disponibles.forEach((disponibles) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(disponibles);
            });
            this.destacados.forEach((destacados) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(destacados);
            });
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.menu.forEach((menu) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(menu);
            });
            this.destacadas.forEach((destacadas) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(destacadas);
            });
            this.novedade.forEach((novedade) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(novedade);
            });
            this.vendidos.forEach((vendidos) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(vendidos);
            });
            this.novedade2.forEach((novedade2) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(novedade2);
            });
            this.lanzamientos.forEach((lanzamientos) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(lanzamientos);
            });
            this.novedade4.forEach((novedade4) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(novedade4);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
