import colors from "../../../../data/styling/colors";
import { Stack } from "expo-router";
import React from "react";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="[noteId]" options={{ title: "Note Details" }} />
    </Stack>
  );
};

export default HomeLayout;

