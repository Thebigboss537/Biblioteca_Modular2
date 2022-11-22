export interface ReservadosInterface {
    id_reserva: number;
    material: {
        id_material: number;
        titulo: string;
    };
    usuario: {
        id_usuario: number;
        cedula: number;
        nombre: string;
        apellido: string;
    };
    
}