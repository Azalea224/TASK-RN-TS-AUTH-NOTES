import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../../../data/styling/colors";

const NoteDetails = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: colors.secondary,
          padding: 20,
          borderRadius: 15,
          minHeight: 200,
          elevation: 5,
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          {"Note Title"}
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: colors.white }}>{"Topic1"}</Text>
          <Text style={{ color: colors.white }}>{"Topic2"}</Text>
        </View>

        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          {"Note Body"}
        </Text>
      </View>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({});

