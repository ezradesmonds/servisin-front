import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function HomeTechnician() {
  const handleLogout = () => {
    router.replace("/technician/login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F9FC", padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#191C1E", marginBottom: 24 }}>
        Technician Dashboard
      </Text>
      <Text style={{ fontSize: 16, color: "#434654", marginBottom: 40 }}>
        Welcome to your dashboard! Here you will receive and manage orders.
      </Text>

      <TouchableOpacity 
        onPress={handleLogout}
        style={{ backgroundColor: "#003D9B", borderRadius: 12, paddingVertical: 16, alignItems: "center" }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
