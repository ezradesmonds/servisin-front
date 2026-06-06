import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Image } from "expo-image";
import logoIcon from "../user/icon/logo_servisin.png";

export default function RegisterTechnician() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Navigate to onboarding
    router.push("/technician/onboarding");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F9FC" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16, paddingVertical: 16 }}>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <Image
          style={{ width: 42, height: 42, borderRadius: 8 }}
          source={logoIcon}
          contentFit="cover"
        />
        <Text style={{ fontWeight: '800', color: '#1e3a8a', fontSize: 19 }}>Servisin</Text>
      </View>
      
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#191C1E", marginBottom: 4 }}>Join as Technician</Text>
        <Text style={{ fontSize: 14, color: "#434654", lineHeight: 20 }}>
          Daftarkan akun Anda untuk menjadi mitra teknisi Servisin.
        </Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#434654", textTransform: "uppercase", marginBottom: 6 }}>Full Name</Text>
        <TextInput
          placeholder="John Doe"
          value={name}
          onChangeText={setName}
          style={{ backgroundColor: "#FFFFFF", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 14, color: "#191C1E", borderWidth: 1, borderColor: '#e2e2eb' }}
        />
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#434654", textTransform: "uppercase", marginBottom: 6 }}>Email</Text>
        <TextInput
          placeholder="name@technician.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={{ backgroundColor: "#FFFFFF", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 14, color: "#191C1E", borderWidth: 1, borderColor: '#e2e2eb' }}
        />
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#434654", textTransform: "uppercase", marginBottom: 6 }}>Phone Number</Text>
        <TextInput
          placeholder="081234567890"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={{ backgroundColor: "#FFFFFF", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 14, color: "#191C1E", borderWidth: 1, borderColor: '#e2e2eb' }}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#434654", textTransform: "uppercase", marginBottom: 6 }}>Password</Text>
        <TextInput
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{ backgroundColor: "#FFFFFF", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 14, color: "#191C1E", borderWidth: 1, borderColor: '#e2e2eb' }}
        />
      </View>

      <TouchableOpacity 
        onPress={handleRegister}
        style={{ backgroundColor: "#00327D", borderRadius: 12, paddingVertical: 14, alignItems: "center", marginBottom: 20 }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>Daftar</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#C3C6D6", opacity: 0.4 }} />
        <Text style={{ fontSize: 11, fontWeight: "bold", color: "#737685", paddingHorizontal: 12, textTransform: "uppercase" }}>Or</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#C3C6D6", opacity: 0.4 }} />
      </View>

      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Text style={{ fontSize: 13, fontWeight: "500", color: "#434654", marginBottom: 12 }}>Sudah punya akun?</Text>
        <TouchableOpacity 
          onPress={() => router.push("/technician/login")}
          style={{ backgroundColor: "#CCDEFE", borderRadius: 12, paddingVertical: 12, paddingHorizontal: 24, alignItems: "center", width: '100%' }}
        >
          <Text style={{ color: "#51627D", fontSize: 14, fontWeight: "bold" }}>Masuk Sebagai Technician</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: "auto", gap: 16 }}>
        <TouchableOpacity 
          onPress={() => router.replace("/login")}
          style={{ backgroundColor: "#e2e2eb", borderRadius: 12, paddingVertical: 12, alignItems: "center" }}
        >
          <Text style={{ color: "#434654", fontSize: 14, fontWeight: "bold" }}>Masuk Mode User</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 10, fontWeight: "500", color: "#737685", textAlign: "center" }}>
          BY CONTINUING, YOU AGREE TO OUR{"\n"}
          <Text style={{ color: "#434654" }}>TERMS OF SERVICE</Text> & <Text style={{ color: "#434654" }}>PRIVACY POLICY</Text>
        </Text>
      </View>

    </ScrollView>
    </SafeAreaView>
  );
}
