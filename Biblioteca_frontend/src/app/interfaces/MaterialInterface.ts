export interface MaterialInterface {
    id_material: number;
    titulo: string;
    autores: [{
        id_autor: number;
        nombre: string;
    }];
    categorias: [{
        id_categoria: string;
        nombre: string;
    }];
    tipo_material: {
        id_tipo_material: number;
        nombre: string;
    };
    id_tipo_material: number;
    editorial: {
        id_editorial: number;
        nombre: string;
    };
    id_editorial: number;
    descripcion: string;
    año: string;
    formato: string;
    idioma: string;
    isbn: string;
    sede: {
        id_sede: number;
        nombre: string;
    };
    id_sede: number;
    observacion: string; 
    nombresdeautores: string;
    nombresdecategorias: string;
    archivo: string;
}