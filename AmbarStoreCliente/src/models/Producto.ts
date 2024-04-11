export class Producto {
    id: any;
    producto: any;
    precio: any;
    costo: any;
    cantidad: any;
    descripcion: any;
    imagen: string;
    id_tipoProducto: any;
    id_tipoDescuento: number;
    cantidad_producto: number;
    precioDescuento: any;

    constructor() {
        this.id = "";
        this.producto = "";
        this.precio = "";
        this.costo = "";
        this.cantidad = "";
        this.descripcion = "";
        this.imagen = "";
        this.id_tipoProducto = "";
        this.id_tipoDescuento = 0;
        this.cantidad_producto = 1;
        this.precioDescuento = 0;
    }
}