import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../data/styling/colors";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContext } from "@/context/AuthContext";
import { useState, useMemo, useCallback } from "react";

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const queryClient = useMemo(() => new QueryClient(), []);

  const setAuth = useCallback((value: boolean) => {
    setIsAuthenticated(value);
  }, []);

  const authContextValue = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated: setAuth,
    }),
    [isAuthenticated, setAuth]
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
        <QueryClientProvider client={queryClient}>
          <AuthContext.Provider value={authContextValue}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(protected)" />
            </Stack>
          </AuthContext.Provider>
        </QueryClientProvider>
        <StatusBar barStyle={"light-content"} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
