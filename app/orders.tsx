import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

export default function OrdersScreen() {
    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <ThemedText style={styles.backButtonText}>←</ThemedText>
                </TouchableOpacity>
                <ThemedText type="title">📦 Orders</ThemedText>
            </SafeAreaView>

            <View style={styles.content}>
                <ThemedText style={styles.subtitle}>
                    Check your past orders here
                </ThemedText>

                <View style={styles.orderCard}>
                    <ThemedText type="subtitle">Order #12345</ThemedText>
                    <ThemedText>Status: In Progress</ThemedText>
                    <ThemedText>Total: $25.99</ThemedText>
                </View>

                <View style={styles.orderCard}>
                    <ThemedText type="subtitle">Order #12344</ThemedText>
                    <ThemedText>Status: Delivered</ThemedText>
                    <ThemedText>Total: $42.50</ThemedText>
                </View>

                <View style={styles.orderCard}>
                    <ThemedText type="subtitle">Order #12343</ThemedText>
                    <ThemedText>Status: Cancelled</ThemedText>
                    <ThemedText>Total: $18.75</ThemedText>
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        gap: 10,
    },
    backButton: {
        alignSelf: "flex-start",
        paddingHorizontal: 15,
    },
    backButtonText: {
        color: "#2c3e50",
        fontWeight: "bold",
        fontSize: 20,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    subtitle: {
        marginBottom: 20,
        opacity: 0.7,
    },
    orderCard: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
});
