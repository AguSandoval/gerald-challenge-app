import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

export default function FavouritesScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">Favourites</ThemedText>
            <ThemedText style={styles.subtitle}>
                Your favourite items:
            </ThemedText>

            <ScrollView style={styles.favouritesList}>
                <ThemedView style={styles.favouriteItem}>
                    <ThemedText type="subtitle">iPhone 15 Pro</ThemedText>
                    <ThemedText>Smartphone premium</ThemedText>
                    <ThemedText style={styles.price}>$999.99</ThemedText>
                    <TouchableOpacity style={styles.addToCartButton}>
                        <ThemedText style={styles.buttonText}>
                            Add to cart
                        </ThemedText>
                    </TouchableOpacity>
                </ThemedView>

                <ThemedView style={styles.favouriteItem}>
                    <ThemedText type="subtitle">MacBook Air M2</ThemedText>
                    <ThemedText>Laptop</ThemedText>
                    <ThemedText style={styles.price}>$1,199.99</ThemedText>
                    <TouchableOpacity style={styles.addToCartButton}>
                        <ThemedText style={styles.buttonText}>
                            Add to cart
                        </ThemedText>
                    </TouchableOpacity>
                </ThemedView>

                <ThemedView style={styles.favouriteItem}>
                    <ThemedText type="subtitle">AirPods Pro</ThemedText>
                    <ThemedText>Noise cancelling headphones</ThemedText>
                    <ThemedText style={styles.price}>$249.99</ThemedText>
                    <TouchableOpacity style={styles.addToCartButton}>
                        <ThemedText style={styles.buttonText}>
                            Add to cart
                        </ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </ScrollView>
        </ThemedView>
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
    favouritesList: {
        flex: 1,
    },
    favouriteItem: {
        backgroundColor: "#ffecb5",
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    price: {
        fontWeight: "bold",
        color: "#2c3e50",
        fontSize: 18,
        marginVertical: 5,
    },
    addToCartButton: {
        backgroundColor: "#28a745",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
        alignSelf: "flex-start",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});
