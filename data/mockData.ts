import { Producto } from '@/types';
// Simula una carga de datos.

export const PRODUCTOS_MOCK: Producto[] = [
{
id: '1',
nombre: 'Auriculares Bluetooth Pro',
precio: 12999,
imagen: 'https://picsum.photos/seed/prod1/400/300',
categoria: 'electronica',
disponible: true,
},
{
id: '2',
nombre: 'Teclado Mecánico RGB',
precio: 8499,
imagen: 'https://picsum.photos/seed/prod2/400/300',
categoria: 'electronica',
disponible: false, // <- Caso edge para conditional rendering
},
{
id: '3',
nombre: 'Mouse Inalámbrico Ergonómico',
precio: 4500,
imagen: 'https://picsum.photos/seed/prod3/400/300',
categoria: 'electronica',
disponible: true,
}
];