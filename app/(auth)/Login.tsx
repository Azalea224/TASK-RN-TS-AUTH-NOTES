import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { login } from "@/api/auth";
import colors from "../../data/styling/colors";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import UserInfo from "@/types/UserInfo";
import { storeToken } from "@/api/storage";
import { AuthContext } from "@/context/AuthContext";
import { router } from "expo-router";
const Index = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending, error } = useMutation({
    mutationFn: (userInfo: UserInfo) =>
      login({ email: userInfo.email, password: userInfo.password }),
    onSuccess: async (data) => {
      await storeToken(data.token);
      console.log(data.token);
      setIsAuthenticated(true);
      router.replace("/(protected)/(tabs)/(home)");
    },
    onError: (error: any) => {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Status:", error.response.status);
      }
    },
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%", padding: 20 }}>
          <Text style={{ color: colors.white, fontSize: 16 }}>
            Login to your account
          </Text>

          <TextInput
            style={{
              backgroundColor: colors.white,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder="Email"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={{
              backgroundColor: colors.white,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            autoCapitalize="none"
          />

          {error && (
            <Text
              style={{
                color: "red",
                fontSize: 14,
                marginTop: 10,
                textAlign: "center",
              }}
            >
              {error.response?.data?.message ||
                error.message ||
                "Login failed. Please check your credentials."}
            </Text>
          )}

          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              alignItems: "center",
              opacity: isPending ? 0.6 : 1,
            }}
            onPress={() => {
              if (!username || !password) {
                return;
              }
              mutate({ email: username, password: password });
            }}
            disabled={isPending}
          >
            <Text
              style={{
                color: colors.primary,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {isPending ? "Logging in..." : "Login"}
            </Text>
          </TouchableOpacity>

          <Text style={{ color: colors.white, fontSize: 16 }}>
            Don't have an account?{" "}
            <Text style={{ color: colors.white, fontWeight: "bold" }}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Index;

const styles = StyleSheet.create({});
