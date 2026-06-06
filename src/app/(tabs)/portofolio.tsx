import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function PortofolioPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {[1, 2, 3, 4].map((item) => (
          <View key={item} style={{ marginBottom: 24 }}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/1r4yyo52_expires_30_days.png" }}
              style={{ width: "100%", height: 200, borderRadius: 16, marginBottom: 12 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191C21", marginBottom: 4 }}>High-efficiency Panel Upgrade</Text>
            <Text style={{ fontSize: 14, color: "#424752" }}>Completed project for residential area with top quality materials.</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
