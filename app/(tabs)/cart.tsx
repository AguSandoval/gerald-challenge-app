import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

export default function CartScreen() {
    return (
        <ScrollView>
            <ThemedView style={styles.container}>
                <ThemedText type="title">Cart</ThemedText>
                <ThemedText style={styles.subtitle}>
                    Check your cart items below:
                </ThemedText>

                <ScrollView style={styles.cartItems}>
                    <ThemedView style={styles.cartItem}>
                        <ThemedText type="subtitle">Item 1</ThemedText>
                        <ThemedText>Quantity: 2</ThemedText>
                        <ThemedText style={styles.price}>$15.99</ThemedText>
                    </ThemedView>

                    <ThemedView style={styles.cartItem}>
                        <ThemedText type="subtitle">Item 2</ThemedText>
                        <ThemedText>Quantity: 1</ThemedText>
                        <ThemedText style={styles.price}>$9.99</ThemedText>
                    </ThemedView>

                    <ThemedView style={styles.cartItem}>
                        <ThemedText type="subtitle">Item 3</ThemedText>
                        <ThemedText>Quantity: 3</ThemedText>
                        <ThemedText style={styles.price}>$24.99</ThemedText>
                    </ThemedView>
                </ScrollView>

                <ThemedView style={styles.total}>
                    <ThemedText type="title">Total: $50.97</ThemedText>
                    <TouchableOpacity style={styles.checkoutButton}>
                        <ThemedText style={styles.checkoutText}>
                            Checkout
                        </ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    subtitle: {
        marginBottom: 20,
        opacity: 0.7,
    },
    cartItems: {
        flex: 1,
    },
    cartItem: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
    },
    price: {
        fontWeight: "bold",
        color: "#2c3e50",
    },
    total: {
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
        paddingTop: 20,
        alignItems: "center",
    },
    checkoutButton: {
        backgroundColor: "#2c3e50",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 15,
    },
    checkoutText: {
        color: "white",
        fontWeight: "bold",
    },
});
