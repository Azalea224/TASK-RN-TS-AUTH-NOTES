import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../../../../data/styling/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [topics, setTopics] = useState([""]);
  const [noteBody, setNoteBody] = useState("");

  const addTopic = () => {
    setTopics([...topics, ""]);
  };

  const updateTopic = (text: string, index: number) => {
    const newTopics = [...topics];
    newTopics[index] = text;
    setTopics(newTopics);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 3,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Add Note
          </Text>
          <Text style={{ color: colors.white, fontSize: 16, marginBottom: 20 }}>
            Create a new note
          </Text>

          <TextInput
            style={{
              backgroundColor: colors.white,
              padding: 15,
              borderRadius: 8,
              marginBottom: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 2,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.1)",
            }}
            value={title}
            onChangeText={setTitle}
            placeholder="Note Title"
          />

          {topics.map((topic, index) => (
            <TextInput
              key={index}
              style={{
                backgroundColor: colors.white,
                padding: 15,
                borderRadius: 8,
                marginBottom: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 2,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
              }}
              value={topic}
              onChangeText={(text) => updateTopic(text, index)}
              placeholder={`Topic ${index + 1}`}
            />
          ))}

          <TouchableOpacity
            style={{
              backgroundColor: colors.tertiary,
              padding: 15,
              borderRadius: 8,
              marginBottom: 20,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.2)",
            }}
            onPress={addTopic}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: "bold",
                fontSize: 16,
                textShadowColor: "rgba(0, 0, 0, 0.25)",
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 2,
              }}
            >
              + Add Topic
            </Text>
          </TouchableOpacity>

          <TextInput
            style={{
              backgroundColor: colors.white,
              padding: 15,
              borderRadius: 8,
              marginBottom: 20,
              height: 120,
              textAlignVertical: "top",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 2,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.1)",
            }}
            value={noteBody}
            onChangeText={setNoteBody}
            placeholder="Note Content"
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              padding: 15,
              borderRadius: 8,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 7,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.1)",
            }}
          >
            <Text
              style={{
                color: colors.primary,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Create Note
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNote;

