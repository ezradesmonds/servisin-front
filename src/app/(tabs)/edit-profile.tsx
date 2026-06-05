import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

// SVG Dummies
const SvgIcon = ({ size = 20, color = "#000" }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2 }} />
);

export default function EditProfile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#FFFFFF" }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 96, paddingBottom: 144, gap: 48 }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 24, alignItems: "center" }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#003f87" }}>
                Alex Thompson
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "center", color: "#424752" }}>
                Gold Member • Verified Technician
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 24, position: "relative" }}>
            <View
              style={{
                width: 128,
                height: 128,
                borderRadius: 64,
                overflow: "hidden",
                borderWidth: 4,
                borderColor: "#fff",
                backgroundColor: "#f2f3fc",
                shadowColor: "rgba(30,58,138,0.1)",
                shadowOffset: { width: 0, height: 25 },
                shadowOpacity: 1,
                shadowRadius: 50,
                elevation: 10,
              }}
            >
              <View style={{ flex: 1, backgroundColor: "#ccc" }} />
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                padding: 12,
                borderRadius: 9999,
                backgroundColor: "#003f87",
                shadowColor: "rgba(0,0,0,0.1)",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 6,
                elevation: 4,
              }}
            >
              <SvgIcon size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ gap: 32 }}>
          <View style={{ gap: 24 }}>
            <View>
              <Text style={{ fontSize: 14, fontWeight: "bold", textTransform: "uppercase", color: "#865300" }}>
                Personal Details
              </Text>
            </View>
            <View style={{ gap: 24 }}>
              <View>
                <Text style={{ fontSize: 12, fontWeight: "600", color: "#424752", marginLeft: 4, marginBottom: 8 }}>
                  Nama Lengkap
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#f2f3fc",
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                  }}
                >
                  <SvgIcon size={16} color="#003F87" />
                  <Text style={{ flex: 1, fontSize: 16, fontWeight: "500", color: "#191c21", marginLeft: 16 }}>
                    Alex Thompson
                  </Text>
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 12, fontWeight: "600", color: "#424752", marginLeft: 4, marginBottom: 8 }}>
                  Email Address
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#f2f3fc",
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                  }}
                >
                  <SvgIcon size={16} color="#003F87" />
                  <Text style={{ flex: 1, fontSize: 16, fontWeight: "500", color: "#191c21", marginLeft: 16 }}>
                    alex.thompson@servisin.id
                  </Text>
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 12, fontWeight: "600", color: "#424752", marginLeft: 4, marginBottom: 8 }}>
                  Nomor Telepon
                </Text>
                <View style={{ flexDirection: "row", gap: 12 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#f2f3fc",
                      borderRadius: 12,
                      paddingHorizontal: 16,
                      paddingVertical: 16,
                    }}
                  >
                    <SvgIcon size={20} color="#003F87" />
                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#191c21", marginLeft: 8 }}>+62</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#f2f3fc",
                      borderRadius: 12,
                      paddingHorizontal: 16,
                      paddingVertical: 16,
                    }}
                  >
                    <Text style={{ flex: 1, fontSize: 16, fontWeight: "500", color: "#191c21" }}>812-3456-7890</Text>
                    <SvgIcon size={18} color="#003F87" />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ gap: 24, paddingTop: 16 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "bold", textTransform: "uppercase", color: "#865300" }}>
                Keamanan
              </Text>
              <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 4, borderRadius: 9999, backgroundColor: "rgba(0,63,135,0.05)" }}>
                <Text style={{ fontSize: 12, fontWeight: "600", color: "#003f87" }}>Ubah Password</Text>
              </TouchableOpacity>
            </View>
            <View style={{ gap: 16 }}>
              <View style={{ position: "relative" }}>
                <View
                  style={{
                    backgroundColor: "#f2f3fc",
                    borderRadius: 12,
                    paddingHorizontal: 48,
                    paddingVertical: 16,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "500", color: "rgba(66,71,82,0.6)" }}>••••••••••••</Text>
                </View>
                <View style={{ position: "absolute", left: 16, top: 18 }}>
                  <SvgIcon size={16} color="#003F87" />
                </View>
                <View style={{ position: "absolute", right: 16, top: 20 }}>
                  <SvgIcon size={16} color="#003F87" />
                </View>
              </View>
              <Text style={{ fontSize: 10, color: "#424752", marginLeft: 4 }}>
                Terakhir diperbarui 3 bulan yang lalu.
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: 24,
              borderRadius: 24,
              backgroundColor: "#f2f3fc",
              borderWidth: 1,
              borderColor: "rgba(194,198,212,0.1)",
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                <SvgIcon size={16} color="#004C24" />
                <Text style={{ fontSize: 16, fontWeight: "600", color: "#191c21" }}>Verifikasi Dua Langkah</Text>
              </View>
              <View style={{ width: 48, height: 24, borderRadius: 12, backgroundColor: "#004c24", position: "relative" }}>
                <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: "white", position: "absolute", right: 4, top: 4 }} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ position: "absolute", top: 0, left: 0, right: 0, backgroundColor: "rgba(255,255,255,0.8)" }}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 24, paddingVertical: 16, paddingTop: 48 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
            <SvgIcon size={16} color="#003F87" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1e3a8a", marginLeft: 16 }}>Edit Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
