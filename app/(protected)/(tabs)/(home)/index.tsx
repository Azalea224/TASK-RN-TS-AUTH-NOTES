import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React from "react";
import colors from "../../../../data/styling/colors";
import Note from "../../../../components/Note";
import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "@/api/notes";
import { NoteType } from "@/types/NoteType";

const Home = () => {
  const {
    data: notes,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getAllNotes,
  });

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={colors.white} />
        <Text style={{ color: colors.white, marginTop: 10 }}>
          Loading notes...
        </Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ color: "red", fontSize: 16, marginBottom: 10 }}>
          Error loading notes
        </Text>
        <Text
          style={{ color: colors.white, fontSize: 14, textAlign: "center" }}
        >
          {(error as any)?.response?.data?.message ||
            error?.message ||
            "Please try again"}
        </Text>
      </View>
    );
  }

  if (!notes || notes.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text
          style={{ color: colors.white, fontSize: 18, textAlign: "center" }}
        >
          No notes found. Create your first note!
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor={colors.white}
            colors={[colors.white]}
          />
        }
      >
        {notes.map((note: NoteType) => (
          <Note key={note._id} note={note} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
