import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import colors from "../../../data/styling/colors";
import { MaterialIcons } from "@expo/vector-icons";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopColor: colors.primary,
          height: 60,
          paddingBottom: 0,
          marginBottom: 0,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "All Notes",

          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(notes)"
        options={{
          headerShown: false,
          title: "Add Note",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(users)"
        options={{
          title: "Users",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});

