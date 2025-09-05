import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

const { width } = Dimensions.get("window");
const DRAWER_WIDTH = width * 0.5;

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const progress = useSharedValue(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        return () => {
            progress.value = 0;
        };
    }, [progress]);

    const toggleDrawer = () => {
        const nextState = progress.value === 0 ? 1 : 0;
        progress.value = withSpring(nextState, {
            damping: 15,
            stiffness: 90,
            mass: 0.8,
        });
        setDrawerOpen(nextState === 1);
    };

    // in order to prevent warnings from reanimated,
    // added this fnc that ensures the drawer is closed before navigating
    const navigateAndCloseDrawer = (route: string) => {
        if (progress.value === 1) {
            toggleDrawer();
            // uses a timeout to ensure animation completes
            setTimeout(() => {
                router.push(route as any); // types any for now....
            }, 400);
        } else {
            router.push(route as any);
        }
    };

    const drawerAnimatedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(progress.value, [0, 1], [0, 1]);
        return {
            opacity,
        };
    });

    const mainAnimatedStyle = useAnimatedStyle(() => {
        const rotateZ = interpolate(progress.value, [0, 1], [0, -7.5]);

        const translateX = interpolate(
            progress.value,
            [0, 1],
            [0, DRAWER_WIDTH * 1.25]
        );
        const translateY = interpolate(progress.value, [0, 1], [0, 50]);

        return {
            transform: [
                { translateX },
                { translateY },
                { rotateZ: `${rotateZ}deg` },
            ],
            borderRadius: 32,
            overflow: "hidden",
        };
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.drawer, drawerAnimatedStyle]}>
                <SafeAreaView style={styles.drawerContent}>
                    <Text style={styles.drawerTitle}>Beka</Text>
                    <View style={styles.drawerButtonsContainer}>
                        <TouchableOpacity
                            style={styles.drawerItemSelected}
                            onPress={() =>
                                navigateAndCloseDrawer("/(tabs)/home")
                            }
                        >
                            <Text style={styles.drawerItemTextSelected}>
                                Start
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.drawerItem}
                            onPress={() =>
                                navigateAndCloseDrawer("/(tabs)/cart")
                            }
                        >
                            <Text style={styles.drawerItemText}>Your cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.drawerItem}
                            onPress={() =>
                                navigateAndCloseDrawer("/(tabs)/favourites")
                            }
                        >
                            <Text style={styles.drawerItemText}>
                                Favourites
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.drawerItem}
                            onPress={() => navigateAndCloseDrawer("/orders")}
                        >
                            <Text style={styles.drawerItemText}>
                                Your orders
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Animated.View>

            <Animated.View style={[styles.mainContent, mainAnimatedStyle]}>
                <SafeAreaView style={styles.header}>
                    <TouchableOpacity
                        onPress={toggleDrawer}
                        style={styles.menuButton}
                    >
                        <Text style={styles.menuIcon}>☰</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Menu</Text>
                </SafeAreaView>

                <View style={{ flex: 1 }}>
                    <ThemeProvider
                        value={
                            colorScheme === "dark" ? DarkTheme : DefaultTheme
                        }
                    >
                        <Stack screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="(tabs)" />
                            <Stack.Screen name="orders" />
                        </Stack>
                        <StatusBar style="auto" />
                    </ThemeProvider>
                </View>
            </Animated.View>

            {drawerOpen && (
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={toggleDrawer}
                    activeOpacity={1}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawer: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width,
        backgroundColor: "#101f30",
        zIndex: 1,
    },
    drawerContent: {
        flex: 1,
        paddingTop: 60,
    },
    drawerButtonsContainer: {
        paddingHorizontal: 20,
        gap: 16,
    },
    drawerTitle: {
        color: "#ffffff",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30,
        marginTop: 20,
        marginLeft: 32,
    },
    drawerItemSelected: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: "#fa807260",
        // substracts 32 because of the padding
        maxWidth: DRAWER_WIDTH - 32,
    },
    drawerItem: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        maxWidth: DRAWER_WIDTH - 32,
    },
    drawerItemTextSelected: {
        color: "salmon",
        fontSize: 20,
        fontWeight: "500",
    },
    drawerItemText: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
    },
    mainContent: {
        flex: 1,
        backgroundColor: "#ffffff",
        zIndex: 1,
    },
    header: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 24,
        color: "#666",
    },
    menuButton: {
        padding: 12,
    },
    menuIcon: {
        color: "#666",
        fontSize: 32,
    },
    overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
});
