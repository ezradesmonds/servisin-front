import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Platform } from "react-native";
import { router } from "expo-router";
import { Image as ExpoImage } from "expo-image";

export default function LoginServisin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Navigate to home after login
    router.replace("/home");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#F8FAFC", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <View style={{ width: "100%", maxWidth: 400, backgroundColor: "#FFFFFF", padding: 32, borderRadius: 24, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 4 }}>
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <Image 
            source={require("./icon/logo_servisin.png")} 
            style={{ width: 80, height: 80, marginBottom: 16 }} 
            resizeMode="contain"
          />
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#003F87", marginBottom: 8 }}>Selamat Datang</Text>
          <Text style={{ fontSize: 14, color: "#64748B", textAlign: "center" }}>Masuk untuk melanjutkan ke Servisin</Text>
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "#003F87", marginBottom: 8 }}>EMAIL</Text>
          <TextInput
            placeholder="user@email.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={{ backgroundColor: "#F1F5F9", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontSize: 14, color: "#191C21" }}
          />
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "#003F87", marginBottom: 8 }}>PASSWORD</Text>
          <TextInput
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{ backgroundColor: "#F1F5F9", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontSize: 14, color: "#191C21" }}
          />
          <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 8 }}>
            <Text style={{ fontSize: 12, color: "#003F87", fontWeight: "600" }}>Lupa password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          onPress={handleLogin}
          style={{ backgroundColor: "#003F87", borderRadius: 12, paddingVertical: 16, alignItems: "center", marginBottom: 16 }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>Masuk</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#E2E8F0" }} />
          <Text style={{ paddingHorizontal: 8, color: "#94A3B8", fontSize: 12 }}>Atau masuk dengan</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "#E2E8F0" }} />
        </View>

        <TouchableOpacity 
          style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E2E8F0", borderRadius: 12, paddingVertical: 14, marginBottom: 24 }}
          onPress={() => alert("Google Login")}
        >
          <ExpoImage 
            source={require("./icon/google.svg")} 
            style={{ width: 20, height: 20, marginRight: 12 }} 
            contentFit="contain"
          />
          <Text style={{ color: "#191C21", fontSize: 16, fontWeight: "bold" }}>Google</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 24 }}>
          <Text style={{ color: "#64748B", fontSize: 14 }}>Belum punya akun? </Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={{ color: "#003F87", fontSize: 14, fontWeight: "bold" }}>Daftar sekarang</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={{ backgroundColor: "#F1F5F9", borderRadius: 12, paddingVertical: 14, alignItems: "center" }}
          onPress={() => router.push("/technician/login")}
        >
          <Text style={{ color: "#475569", fontSize: 14, fontWeight: "bold" }}>Masuk mode teknisi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
