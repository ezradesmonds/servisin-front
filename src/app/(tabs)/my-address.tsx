import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function MyAddressPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <TouchableOpacity style={{ backgroundColor: "#FFFFFF", padding: 20, borderRadius: 16, marginBottom: 16, borderColor: "#003F87", borderWidth: 2 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <View style={{ backgroundColor: "#E0F2FE", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 }}>
              <Text style={{ fontSize: 12, color: "#0369A1", fontWeight: "bold" }}>Main Address</Text>
            </View>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191C21", marginBottom: 4 }}>Budi Santoso</Text>
          <Text style={{ fontSize: 14, color: "#424752", lineHeight: 20 }}>
            Jl. Sudirman No. 123, RT 01/RW 02, Senayan, Kebayoran Baru, Jakarta Selatan, 12190
          </Text>
          <Text style={{ fontSize: 14, color: "#727784", marginTop: 8 }}>081234567890</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#FFFFFF", padding: 20, borderRadius: 16, marginBottom: 16, borderColor: "#E2E8F0", borderWidth: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <View style={{ backgroundColor: "#F1F5F9", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 }}>
              <Text style={{ fontSize: 12, color: "#64748B", fontWeight: "bold" }}>Office</Text>
            </View>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191C21", marginBottom: 4 }}>Budi Santoso</Text>
          <Text style={{ fontSize: 14, color: "#424752", lineHeight: 20 }}>
            Menara Astra, Jl. Jend. Sudirman Kav 5-6, Karet Tengsin, Tanah Abang, Jakarta Pusat, 10220
          </Text>
          <Text style={{ fontSize: 14, color: "#727784", marginTop: 8 }}>081234567890</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#003F87", padding: 16, borderRadius: 12, alignItems: "center", marginTop: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFFFFF" }}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
