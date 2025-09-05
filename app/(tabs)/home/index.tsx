import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">Home</ThemedText>
            <ThemedText style={styles.subtitle}>
                Main screen with stack navigation
            </ThemedText>

            <ThemedView style={styles.navigationSection}>
                <ThemedText type="subtitle">Stack Navigation:</ThemedText>

                <TouchableOpacity
                    style={styles.navigationButton}
                    onPress={() => router.push("/(tabs)/home/screen1")}
                >
                    <ThemedText style={styles.buttonText}>
                        Go to Screen 1 →
                    </ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navigationButton}
                    onPress={() => router.push("/(tabs)/home/screen2")}
                >
                    <ThemedText style={styles.buttonText}>
                        Go to Screen 2 →
                    </ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <ThemedView style={styles.featuresSection}>
                <ThemedText type="subtitle">Features:</ThemedText>
                <ThemedText>• Drawer Menu with parallax effect</ThemedText>
                <ThemedText>• Bottom Tab Navigation</ThemedText>
                <ThemedText>• Stack Navigation in Home</ThemedText>
                <ThemedText>• Cart and Favourites Management</ThemedText>
                <ThemedText>• Orders System</ThemedText>
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
    navigationSection: {
        marginBottom: 30,
    },
    featuresSection: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        padding: 20,
        borderRadius: 10,
    },
    navigationButton: {
        backgroundColor: "#2c3e50",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});
