export interface Usuario {
    id: string;
    nombre: string;
    email: string;
    avatar?: string; 
}

export interface Producto {
    id: string;
    nombre: string;
    precio: number;
    imagen: string;
    categoria: string;
    disponible: boolean;
}

export interface ItemCarrito {
    producto: Producto;
    cantidad: number;
}

export type EstadoPedido =
    | "pendiente"
    | "preparando"
    | "en_camino"
    | "entregado";
