import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function ReviewPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {[1, 2, 3, 4].map((item) => (
          <View key={item} style={{ backgroundColor: "#F8FAFC", padding: 16, borderRadius: 16, marginBottom: 16 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
              <Image 
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/wihuhq0s_expires_30_days.png" }} 
                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }} 
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191C21" }}>Customer Name</Text>
                <Text style={{ fontSize: 12, color: "#727784" }}>Oct 24, 2024</Text>
              </View>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#F59E0B" }}>★ 5.0</Text>
            </View>
            <Text style={{ fontSize: 14, color: "#424752", lineHeight: 20 }}>
              The service was fantastic! The technician arrived on time and fixed the issue quickly. Highly recommend!
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
