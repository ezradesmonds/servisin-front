import React from "react";
import { View, ScrollView, Text, TouchableOpacity, TextInput } from "react-native";
import { router } from "expo-router";

export default function HelpCenterPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <View style={{ backgroundColor: "#003F87", paddingHorizontal: 24, paddingBottom: 24, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#FFFFFF", marginBottom: 16 }}>How can we help you?</Text>
        <TextInput 
          placeholder="Search for articles..." 
          style={{ backgroundColor: "#FFFFFF", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 16 }}
        />
      </View>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#191C21", marginBottom: 16 }}>Top Questions</Text>
        
        {["How do I cancel a booking?", "What payment methods are accepted?", "How do I contact my technician?", "Is there a warranty for the service?"].map((q, idx) => (
          <TouchableOpacity key={idx} style={{ backgroundColor: "#FFFFFF", padding: 16, borderRadius: 12, marginBottom: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: 14, color: "#424752", flex: 1 }}>{q}</Text>
            <Text style={{ fontSize: 16, color: "#003F87" }}>{">"}</Text>
          </TouchableOpacity>
        ))}

        <View style={{ marginTop: 32, alignItems: "center" }}>
          <Text style={{ fontSize: 14, color: "#727784", marginBottom: 16 }}>Still need help?</Text>
          <TouchableOpacity style={{ backgroundColor: "#003F87", paddingVertical: 16, paddingHorizontal: 32, borderRadius: 12, width: "100%", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFFFFF" }}>Call Center</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
