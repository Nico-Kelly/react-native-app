import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Producto } from '@/types';
import { Colors, Spacing, FontSize, Radius } from '@/constants/theme';

interface Props {
    producto: Producto;
    onPress: (p: Producto) => void;
    onFavorito: (id: string) => void;
}

export function TarjetaProducto({ producto, onPress, onFavorito }: Props) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => onPress(producto)}
            activeOpacity={0.85}
        >
            <Image source={{ uri: producto.imagen }} style={styles.imagen} />
            <View style={styles.info}>
                <Text style={styles.nombre}>{producto.nombre}</Text>
                <Text style={styles.precio}>${producto.precio.toFixed(2)}</Text>
                {/* Conditional Rendering */}
                {!producto.disponible && (
                    <Text style={styles.agotado}>Agotado</Text>
                )}
            </View>
            <TouchableOpacity onPress={() => onFavorito(producto.id)}>
                <Text style={styles.icono}>♡</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.surface,
        padding: Spacing.md,
        borderRadius: Radius.md,
        marginBottom: Spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: Radius.sm,
        elevation: 2,
    },
    imagen: {
        width: 60, height: 60, borderRadius: Radius.sm, marginRight:
            Spacing.md
    }, 
    info: { flex: 1 },
    nombre: { fontSize: FontSize.md, fontWeight: 'bold', color: Colors.text },
    precio: { fontSize: FontSize.md, color: Colors.primary, marginTop: Spacing.xs },
    agotado: {
        fontSize: FontSize.sm, color: Colors.danger, fontWeight: 'bold',
        marginTop: Spacing.xs
    },
    
    icono: { fontSize: FontSize.xl, color: Colors.textMuted }
});