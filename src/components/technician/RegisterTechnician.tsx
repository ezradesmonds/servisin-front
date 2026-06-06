import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";

export default function RegisterTechnician() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Navigate to onboarding 1
    router.push("/technician/onboarding-1");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#F7F9FC", padding: 24, paddingVertical: 48 }}>
      <Text style={{ fontSize: 24, fontWeight: "900", fontStyle: "italic", color: "#0056B3", marginBottom: 40 }}>Servisin</Text>
      
      <View style={{ marginBottom: 32 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#191C1E", marginBottom: 8 }}>Join as Technician</Text>
        <Text style={{ fontSize: 16, color: "#434654", lineHeight: 24 }}>
          Daftarkan akun Anda untuk menjadi mitra teknisi Servisin.
        </Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#434654", textTransform: "uppercase", marginBottom: 8 }}>Full Name</Text>
        <TextInput
          placeholder="John Doe"
          value={name}
          onChangeText={setName}
          style={{ backgroundColor: "#FFFFFF", borderRadius: 24, paddingHorizontal: 20, paddingVertical: 16, fontSize: 16, color: "#191C1E", shadowColor: "#191c1e", shadowOpacity: 0.04, shadowRadius: 32, elevation: 4 }}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#434654", textTransform: "uppercase", marginBottom: 8 }}>Email</Text>
        <TextInput
          placeholder="name@technician.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={{ backgroundColor: "#FFFFFF", borderRadius: 24, paddingHorizontal: 20, paddingVertical: 16, fontSize: 16, color: "#191C1E", shadowColor: "#191c1e", shadowOpacity: 0.04, shadowRadius: 32, elevation: 4 }}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#434654", textTransform: "uppercase", marginBottom: 8 }}>Phone Number</Text>
        <TextInput
          placeholder="081234567890"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={{ backgroundColor: "#FFFFFF", borderRadius: 24, paddingHorizontal: 20, paddingVertical: 16, fontSize: 16, color: "#191C1E", shadowColor: "#191c1e", shadowOpacity: 0.04, shadowRadius: 32, elevation: 4 }}
        />
      </View>

      <View style={{ marginBottom: 32 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#434654", textTransform: "uppercase", marginBottom: 8 }}>Password</Text>
        <TextInput
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{ backgroundColor: "#FFFFFF", borderRadius: 24, paddingHorizontal: 20, paddingVertical: 16, fontSize: 16, color: "#191C1E", shadowColor: "#191c1e", shadowOpacity: 0.04, shadowRadius: 32, elevation: 4 }}
        />
      </View>

      <TouchableOpacity 
        onPress={handleRegister}
        style={{ backgroundColor: "#003D9B", borderRadius: 999, paddingVertical: 16, alignItems: "center", marginBottom: 24 }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>Daftar</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#C3C6D6", opacity: 0.2 }} />
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#737685", paddingHorizontal: 16, textTransform: "uppercase" }}>Or join us</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#C3C6D6", opacity: 0.2 }} />
      </View>

      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#434654", marginBottom: 16 }}>Sudah punya akun?</Text>
        <TouchableOpacity 
          onPress={() => router.push("/technician/login")}
          style={{ backgroundColor: "#CCDEFE", borderRadius: 999, paddingVertical: 16, paddingHorizontal: 32, alignItems: "center" }}
        >
          <Text style={{ color: "#51627D", fontSize: 16, fontWeight: "bold" }}>Masuk Sebagai Technician</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
