import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function TermsConditionsPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#191C21", marginBottom: 8 }}>Terms of Service</Text>
        <Text style={{ fontSize: 14, color: "#727784", marginBottom: 24 }}>Last updated: October 2024</Text>

        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#191C21", marginBottom: 8 }}>1. Introduction</Text>
        <Text style={{ fontSize: 14, color: "#424752", lineHeight: 24, marginBottom: 24 }}>
          Welcome to Servisin! These terms and conditions outline the rules and regulations for the use of Servisin's App.
          By accessing this app we assume you accept these terms and conditions. Do not continue to use Servisin if you do not agree to take all of the terms and conditions stated on this page.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#191C21", marginBottom: 8 }}>2. Service Booking</Text>
        <Text style={{ fontSize: 14, color: "#424752", lineHeight: 24, marginBottom: 24 }}>
          Users must provide accurate information when booking a service. The estimated cost may vary depending on the actual condition assessed by the technician upon arrival. Cancellations made within 2 hours of the scheduled time may incur a fee.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#191C21", marginBottom: 8 }}>3. Payment Terms</Text>
        <Text style={{ fontSize: 14, color: "#424752", lineHeight: 24, marginBottom: 24 }}>
          All payments are processed securely through our platform. You agree to pay all charges at the prices then in effect for your purchases and any applicable service fees.
        </Text>
      </ScrollView>
    </View>
  );
}
