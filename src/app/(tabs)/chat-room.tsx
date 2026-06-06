import React from "react";
import { View, ScrollView, Text, TouchableOpacity, TextInput } from "react-native";
import { router } from "expo-router";

export default function ChatRoomPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <View style={{ alignSelf: "center", backgroundColor: "#E2E8F0", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginBottom: 24 }}>
          <Text style={{ fontSize: 12, color: "#64748B" }}>Today</Text>
        </View>
        <View style={{ alignSelf: "flex-start", backgroundColor: "#FFFFFF", padding: 16, borderRadius: 16, borderBottomLeftRadius: 4, marginBottom: 16, maxWidth: "80%" }}>
          <Text style={{ fontSize: 14, color: "#191C21", lineHeight: 20 }}>Hello! I'm on my way to your location. Should be there in 10 minutes.</Text>
          <Text style={{ fontSize: 10, color: "#94A3B8", marginTop: 8, textAlign: "right" }}>09:45 AM</Text>
        </View>
        <View style={{ alignSelf: "flex-end", backgroundColor: "#003F87", padding: 16, borderRadius: 16, borderBottomRightRadius: 4, marginBottom: 16, maxWidth: "80%" }}>
          <Text style={{ fontSize: 14, color: "#FFFFFF", lineHeight: 20 }}>Great, thanks! The gate code is 1234.</Text>
          <Text style={{ fontSize: 10, color: "#93C5FD", marginTop: 8, textAlign: "right" }}>09:47 AM</Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: "#FFFFFF", borderTopWidth: 1, borderTopColor: "#F1F5F9" }}>
        <TextInput 
          placeholder="Type a message..." 
          style={{ flex: 1, backgroundColor: "#F8FAFC", borderRadius: 24, paddingHorizontal: 16, paddingVertical: 12, marginRight: 12, fontSize: 14 }}
        />
        <TouchableOpacity style={{ backgroundColor: "#003F87", width: 48, height: 48, borderRadius: 24, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
