import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Onboarding1() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: "#F9F9FC", paddingTop: insets.top }}>
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 120 }}>
        
        <View style={{ marginBottom: 40 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <Text style={{ fontSize: 44, fontWeight: "900", color: "#1A1C1E", lineHeight: 50 }}>
              Identity{"\n"}Verification
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#006E25", marginTop: 8 }}>1/3</Text>
          </View>
          
          <View style={{ flexDirection: "row", height: 8, gap: 8, marginBottom: 16 }}>
            <View style={{ flex: 1, backgroundColor: "#003F87", borderRadius: 4 }} />
            <View style={{ flex: 1, backgroundColor: "#E2E2E5", borderRadius: 4 }} />
            <View style={{ flex: 1, backgroundColor: "#E2E2E5", borderRadius: 4 }} />
          </View>
          
          <Text style={{ fontSize: 16, color: "#424752", lineHeight: 24 }}>
            Please upload your identity and certification to start taking orders. Our team will verify your documents within 24 hours.
          </Text>
        </View>

        <View style={{ gap: 24 }}>
          {/* Upload KTP */}
          <View style={{ gap: 16 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase" }}>Identity Document</Text>
            <TouchableOpacity style={{ padding: 24, borderRadius: 8, backgroundColor: "#FFFFFF", borderWidth: 2, borderColor: "#C2C6D4", borderStyle: "dashed", alignItems: "center" }}>
              <View style={{ width: 64, height: 64, borderRadius: 12, backgroundColor: "#F3F3F6", justifyContent: "center", alignItems: "center", marginBottom: 16 }}>
                <Text style={{ fontSize: 24, color: "#003F87" }}>📄</Text>
              </View>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1A1C1E", marginBottom: 4 }}>Upload KTP</Text>
              <Text style={{ fontSize: 16, color: "#727784" }}>JPEG or PNG, Max 5MB</Text>
            </TouchableOpacity>
          </View>

          {/* Certificate */}
          <View style={{ gap: 16 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase" }}>Professional Qualification</Text>
            <TouchableOpacity style={{ padding: 24, borderRadius: 8, backgroundColor: "#FFFFFF", borderWidth: 2, borderColor: "#C2C6D4", borderStyle: "dashed", alignItems: "center" }}>
              <View style={{ width: 64, height: 64, borderRadius: 12, backgroundColor: "#F3F3F6", justifyContent: "center", alignItems: "center", marginBottom: 16 }}>
                <Text style={{ fontSize: 24, color: "#003F87" }}>🎓</Text>
              </View>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1A1C1E", marginBottom: 4 }}>Certificate of Expertise</Text>
              <Text style={{ fontSize: 16, color: "#727784" }}>PDF or Image document</Text>
            </TouchableOpacity>
          </View>

          {/* Privacy Note */}
          <View style={{ flexDirection: "row", padding: 16, borderRadius: 8, backgroundColor: "#F3F3F6", gap: 16, alignItems: "flex-start" }}>
            <Text style={{ fontSize: 20 }}>🔒</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#5B4300", textTransform: "uppercase", marginBottom: 4 }}>Privacy Note</Text>
              <Text style={{ fontSize: 14, color: "#424752", lineHeight: 20 }}>
                Your data is encrypted and used only for verification purposes according to our security protocols.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Sticky Action */}
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24, paddingBottom: Math.max(insets.bottom, 24), backgroundColor: "rgba(249, 249, 252, 0.9)" }}>
        <TouchableOpacity 
          onPress={() => router.push("/technician/onboarding-2")}
          style={{ backgroundColor: "#003F87", borderRadius: 12, paddingVertical: 16, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 4 }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
