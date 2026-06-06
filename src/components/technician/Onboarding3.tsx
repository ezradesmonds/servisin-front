import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from "react-native";
import { router } from "expo-router";

export default function Onboarding3() {
  const [basicRate, setBasicRate] = useState("");
  const [travelFee, setTravelFee] = useState("");
  const [emergencyFee, setEmergencyFee] = useState("");

  const handleFinish = () => {
    // Should navigate to technician dashboard. But we'll just go home or alert for now.
    router.replace("/home");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F9FC" }}>
      {/* Top Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 24, backgroundColor: "#F9F9FC" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#0056B3" }}>Onboarding</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          <Text style={{ color: "#1A1C1E" }}>PRO</Text>
          <Text style={{ color: "#0056B3" }}>FIELD</Text>
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 120 }}>
        
        <View style={{ marginBottom: 32 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16 }}>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#003F87", textTransform: "uppercase", marginBottom: 4 }}>Step 3 of 3</Text>
              <Text style={{ fontSize: 36, fontWeight: "bold", color: "#1A1C1E" }}>Service Pricing</Text>
            </View>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#006E25" }}>Finalizing</Text>
          </View>
          
          <View style={{ flexDirection: "row", height: 8, gap: 8 }}>
            <View style={{ flex: 1, backgroundColor: "#0056B3", borderRadius: 4 }} />
            <View style={{ flex: 1, backgroundColor: "#0056B3", borderRadius: 4 }} />
            <View style={{ flex: 1, backgroundColor: "#003F87", borderRadius: 4 }} />
          </View>
        </View>

        <View style={{ backgroundColor: "#FFFFFF", padding: 24, borderRadius: 8, gap: 24 }}>
          <View style={{ backgroundColor: "#80F98B", padding: 16, borderRadius: 8, alignSelf: "flex-start", marginBottom: 8 }}>
            <Text style={{ fontSize: 24 }}>💰</Text>
          </View>

          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1A1C1E", marginBottom: 8 }}>How it works</Text>
            <Text style={{ fontSize: 16, color: "#424752", lineHeight: 24 }}>
              Set your competitive rates below. We recommend matching the market average to get more initial bookings.
            </Text>
          </View>

          {/* Pricing Inputs */}
          <View style={{ gap: 16 }}>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase", marginBottom: 8 }}>Basic Rate (Hourly)</Text>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#F3F3F6", borderRadius: 8, paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#727784", marginRight: 8 }}>Rp</Text>
                <TextInput
                  placeholder="0"
                  value={basicRate}
                  onChangeText={setBasicRate}
                  keyboardType="numeric"
                  style={{ flex: 1, paddingVertical: 16, fontSize: 16, color: "#1A1C1E" }}
                />
              </View>
            </View>

            <View>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase", marginBottom: 8 }}>Travel Fee (Per KM)</Text>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#F3F3F6", borderRadius: 8, paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#727784", marginRight: 8 }}>Rp</Text>
                <TextInput
                  placeholder="0"
                  value={travelFee}
                  onChangeText={setTravelFee}
                  keyboardType="numeric"
                  style={{ flex: 1, paddingVertical: 16, fontSize: 16, color: "#1A1C1E" }}
                />
              </View>
            </View>

            <View>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase", marginBottom: 8 }}>Emergency Fee (Optional)</Text>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#F3F3F6", borderRadius: 8, paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#727784", marginRight: 8 }}>Rp</Text>
                <TextInput
                  placeholder="0"
                  value={emergencyFee}
                  onChangeText={setEmergencyFee}
                  keyboardType="numeric"
                  style={{ flex: 1, paddingVertical: 16, fontSize: 16, color: "#1A1C1E" }}
                />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Bottom Sticky Action */}
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: "rgba(255, 255, 255, 0.9)", flexDirection: "row", gap: 16 }}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={{ flex: 1, backgroundColor: "#E8E8EA", borderRadius: 8, paddingVertical: 16, alignItems: "center" }}
        >
          <Text style={{ color: "#1A1C1E", fontSize: 18, fontWeight: "bold" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleFinish}
          style={{ flex: 2, backgroundColor: "#006E25", borderRadius: 8, paddingVertical: 16, alignItems: "center" }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>Finish Onboarding</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
