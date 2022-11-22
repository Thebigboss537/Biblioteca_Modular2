export interface UsuarioInterface {
    id_usuario: number;
    cedula: number;
    nombre: string;
    apellido: string;
    id_programa_academico: number;
    telefono: string;
    semestre: number;
    id_rol: number;
    correo_electronico: string;
    contraseña: string;
    estado: number;
    id_usuario_autenticacion: number;
}