import React from "react";
import { View, ScrollView, Text, TouchableOpacity, TextInput } from "react-native";
import { router } from "expo-router";

export default function MakeReviewPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#191C21", marginBottom: 8 }}>How was the service?</Text>
          <Text style={{ fontSize: 14, color: "#727784", textAlign: "center", marginBottom: 24 }}>
            Please rate your experience with Marcus Chen for the AC Deep Cleaning service.
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 8 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star}>
                <Text style={{ fontSize: 48, color: star <= 4 ? "#F59E0B" : "#E2E8F0" }}>★</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191C21", marginBottom: 12 }}>Write your feedback</Text>
        <TextInput 
          placeholder="Tell us what you liked or what could be improved..." 
          multiline
          numberOfLines={6}
          style={{ backgroundColor: "#F8FAFC", borderRadius: 12, padding: 16, fontSize: 14, minHeight: 120, textAlignVertical: "top", marginBottom: 32 }}
        />

        <TouchableOpacity 
          style={{ backgroundColor: "#003F87", padding: 16, borderRadius: 12, alignItems: "center" }}
          onPress={() => router.back()}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFFFFF" }}>Submit Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
