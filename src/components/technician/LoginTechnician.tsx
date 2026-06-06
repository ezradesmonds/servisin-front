import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch } from "react-native";
import { router } from "expo-router";

export default function LoginTechnician() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = () => {
    // Should navigate to technician dashboard, but for now we might route to onboarding if they haven't finished
    router.push("/technician/onboarding-1");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#F7F9FC", padding: 24, paddingVertical: 48 }}>
      <Text style={{ fontSize: 24, fontWeight: "900", fontStyle: "italic", color: "#0056B3", marginBottom: 40 }}>Servisin</Text>
      
      <View style={{ marginBottom: 32 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#191C1E", marginBottom: 8 }}>Welcome back</Text>
        <Text style={{ fontSize: 16, color: "#434654", lineHeight: 24 }}>
          Masuk ke akun technician Anda untuk mulai bekerja.
        </Text>
      </View>

      <View style={{ flexDirection: "row", backgroundColor: "#F2F4F7", borderRadius: 999, padding: 4, marginBottom: 24 }}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: 999, paddingVertical: 10, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#003D9B" }}>Email / Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, paddingVertical: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#434654" }}>OTP Quick Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#434654", textTransform: "uppercase", marginBottom: 8 }}>Email or Phone Number</Text>
        <TextInput
          placeholder="name@technician.com"
          value={email}
          onChangeText={setEmail}
          style={{ backgroundColor: "#FFFFFF", borderRadius: 24, paddingHorizontal: 20, paddingVertical: 16, fontSize: 16, color: "#191C1E", shadowColor: "#191c1e", shadowOpacity: 0.04, shadowRadius: 32, elevation: 4 }}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8, alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "#434654", textTransform: "uppercase" }}>Password</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#003D9B" }}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{ backgroundColor: "#FFFFFF", borderRadius: 24, paddingHorizontal: 20, paddingVertical: 16, fontSize: 16, color: "#191C1E", shadowColor: "#191c1e", shadowOpacity: 0.04, shadowRadius: 32, elevation: 4 }}
        />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
        <Switch 
          value={keepLoggedIn} 
          onValueChange={setKeepLoggedIn} 
          trackColor={{ false: "#C3C6D6", true: "#003D9B" }}
        />
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#434654", marginLeft: 8 }}>Tetap masuk di perangkat ini</Text>
      </View>

      <TouchableOpacity 
        onPress={handleLogin}
        style={{ backgroundColor: "#003D9B", borderRadius: 999, paddingVertical: 16, alignItems: "center", marginBottom: 24 }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>Masuk</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#C3C6D6", opacity: 0.2 }} />
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#737685", paddingHorizontal: 16, textTransform: "uppercase" }}>Or join us</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#C3C6D6", opacity: 0.2 }} />
      </View>

      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#434654", marginBottom: 16 }}>Belum punya akun?</Text>
        <TouchableOpacity 
          onPress={() => router.push("/technician/register")}
          style={{ backgroundColor: "#CCDEFE", borderRadius: 999, paddingVertical: 16, paddingHorizontal: 32, alignItems: "center" }}
        >
          <Text style={{ color: "#51627D", fontSize: 16, fontWeight: "bold" }}>Daftar Sebagai Technician</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", marginTop: "auto" }}>
        <Text style={{ fontSize: 11, fontWeight: "500", color: "#737685", textAlign: "center" }}>
          BY CONTINUING, YOU AGREE TO OUR{"\n"}
          <Text style={{ color: "#434654" }}>TERMS OF SERVICE</Text> & <Text style={{ color: "#434654" }}>PRIVACY POLICY</Text>
        </Text>
      </View>

    </ScrollView>
  );
}
