export class Usuario {
    id: number;
    nombre_usuario: string;
    nombres: string;
    apellidos: string;
    correo: string;
    contrasena: string;
    telefono: string;
    direccion: string;
    cajero_activo: number;
    id_rango: number;
    id_tipoUsuario: number;

    constructor() {
        this.id = 0;
        this.nombre_usuario = "";
        this.nombres = "";
        this.apellidos = "";
        this.correo = "";
        this.contrasena = "";
        this.telefono = "";
        this.direccion = "";
        this.cajero_activo = 0;
        this.id_rango = 0;
        this.id_tipoUsuario = 0;
    }
    
}