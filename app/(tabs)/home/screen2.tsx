import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Screen2() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">Screen 2</ThemedText>
            <ThemedText style={styles.subtitle}>
                Second screen of the Home stack
            </ThemedText>

            <ThemedView style={styles.content}>
                <ThemedText>
                    This is Screen 2 within the Home stack navigator.
                </ThemedText>
                <ThemedText style={styles.description}>
                    You can navigate between screens using the stack navigator.
                </ThemedText>

                <ThemedView style={styles.features}>
                    <ThemedText type="subtitle">Features:</ThemedText>
                    <ThemedText>- Stack Navigation</ThemedText>
                    <ThemedText>- Tab Navigation</ThemedText>
                    <ThemedText>- Drawer Menu</ThemedText>
                    <ThemedText>- Smooth Animations</ThemedText>
                </ThemedView>
            </ThemedView>

            <ThemedView style={styles.navigationSection}>
                <TouchableOpacity
                    style={styles.navigationButton}
                    onPress={() => router.dismissAll()}
                >
                    <ThemedText style={styles.buttonText}>
                        ← Go to Home
                    </ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.navigationButton, styles.backButton]}
                    onPress={() => router.back()}
                >
                    <ThemedText style={styles.buttonText}>← Back</ThemedText>
                </TouchableOpacity>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    subtitle: {
        marginBottom: 30,
        opacity: 0.7,
    },
    content: {
        backgroundColor: "#a3daff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    description: {
        marginTop: 10,
        marginBottom: 20,
    },
    features: {
        backgroundColor: "#3498db",
        padding: 15,
        borderRadius: 8,
    },
    navigationSection: {
        gap: 15,
    },
    navigationButton: {
        backgroundColor: "#9b59b6",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    backButton: {
        backgroundColor: "#95a5a6",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});
