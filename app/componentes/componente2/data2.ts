interface DataShape {
    id: number;
    name: string;
    titulo: string;
    compra: string;
    boton:string;
    
}

const data: DataShape[] = [
    {
        id: 1,
        name: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/es_LA/merchandising/homepage-banners/4576x744_LATAM_GameStoreBanner_01_SP",
        titulo: "",
        compra: "¡Compra, descarga y juega de inmediato!",
        boton:"Comprar juegos"

        
       
    },
    {
        id: 2,
        name: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/en_US/switch/site-design-update/switch-family-es",
        titulo: "Explora las consolas de videojuegos",
        compra: "Familia Nintendo Switch",
        boton:"Màs detalles"
        
    }
    
   
];

export default data;