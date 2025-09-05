import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Screen1() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">Screen 1</ThemedText>
            <ThemedText style={styles.subtitle}>
                First screen of the Home stack
            </ThemedText>

            <ThemedView style={styles.content}>
                <ThemedText>
                    This is Screen 1 within the Home stack navigator.
                </ThemedText>
                <ThemedText style={styles.description}>
                    You can navigate between screens using the stack navigator.
                </ThemedText>
            </ThemedView>

            <ThemedView style={styles.navigationSection}>
                <TouchableOpacity
                    style={styles.navigationButton}
                    onPress={() => router.push("/(tabs)/home/screen2")}
                >
                    <ThemedText style={styles.buttonText}>
                        Go to Screen 2 →
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
    },
    navigationSection: {
        gap: 15,
    },
    navigationButton: {
        backgroundColor: "#3498db",
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
