import React from "react";
import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#FFFFFF" }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 40, paddingBottom: 40, gap: 32 }}
      >
        <View style={{ alignItems: "center", gap: 16, paddingVertical: 24 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#003f87" }}>
            Notification Page
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", color: "#424752" }}>
            Halaman notifikasi Anda
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
