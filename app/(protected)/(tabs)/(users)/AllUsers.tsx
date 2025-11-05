import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../../data/styling/colors";
import UserProfileCard from "../../../../components/UserProfileCard";
const Users = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.primary }}>
      <UserProfileCard
        imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        email="test@test.com"
        username="test"
      />
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({});

