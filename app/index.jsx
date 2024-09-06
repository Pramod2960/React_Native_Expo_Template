import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 h-full font-plight justify-center items-center bg-blue-300">
      <Link href="/profile">Pramod Nahar</Link>

      <Text className="font-pblack text-3xl">Paroo</Text>
    </View>
  );
};

export default index;
