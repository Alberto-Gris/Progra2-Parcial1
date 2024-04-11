export class CrearCarrito {
    confirmado: any;
    fecha: any;
    hora: any;
    monto_eventual_sin_descuento: any;
    monto_eventual: any;
    costo_eventual: any;
    id_cliente: any;
    id_vendedor: any;

    constructor() {
        this.confirmado = 0;
        this.fecha = "0000-00-00";
        this.hora = "0000-00-00";
        this.monto_eventual_sin_descuento = 0;
        this.monto_eventual = 0;
        this.costo_eventual = 0;
        this.id_cliente = 0;
        this.id_vendedor = 0;
    }
}