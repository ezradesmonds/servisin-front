import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const SvgIcon = ({ size = 20, color = "#000" }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2 }} />
);

export default function NotificationPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9ff" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24, paddingBottom: 128, gap: 32 }}
      >
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", textTransform: "uppercase", color: "#003f87" }}>
            Preferensi
          </Text>
          <Text style={{ fontSize: 36, fontWeight: "bold", color: "#003f87" }}>
            Kelola bagaimana kami menghubungi Anda.
          </Text>
          <Text style={{ fontSize: 16, color: "#424752", marginTop: 8 }}>
            Pilih jenis pemberitahuan yang ingin Anda terima untuk tetap mendapatkan info terbaru tentang servis dan akun Anda.
          </Text>
        </View>

        <View style={{ gap: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 24,
              borderRadius: 12,
              backgroundColor: "white",
              shadowColor: "rgba(0,0,0,0.04)",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 1,
              shadowRadius: 24,
              elevation: 4,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 20, flex: 1 }}>
              <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: "rgba(0,63,135,0.1)", alignItems: "center", justifyContent: "center" }}>
                <SvgIcon size={20} color="#003F87" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#003f87" }}>Push Notifications</Text>
                <Text style={{ fontSize: 14, color: "#424752", marginTop: 4 }}>Terima pemberitahuan instan di perangkat Anda.</Text>
              </View>
            </View>
            <View style={{ width: 48, height: 32, borderRadius: 16, backgroundColor: "#0056b3", justifyContent: "center", paddingHorizontal: 4 }}>
              <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: "white", alignSelf: "flex-end" }} />
            </View>
          </View>

          <View style={{ padding: 4, borderRadius: 12, backgroundColor: "#f2f3fc" }}>
            <View style={{ backgroundColor: "white", borderRadius: 8, overflow: "hidden" }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 24, borderBottomWidth: 1, borderBottomColor: "#f2f3fc" }}>
                <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 20, flex: 1 }}>
                  <View style={{ paddingTop: 4 }}>
                    <SvgIcon size={20} color="#865300" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>Order Status Updates</Text>
                    <Text style={{ fontSize: 14, color: "#424752", marginTop: 4 }}>Dapatkan update real-time saat teknisi menuju lokasi atau pekerjaan selesai.</Text>
                  </View>
                </View>
                <View style={{ width: 48, height: 32, borderRadius: 16, backgroundColor: "#0056b3", justifyContent: "center", paddingHorizontal: 4 }}>
                  <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: "white", alignSelf: "flex-end" }} />
                </View>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 24, borderBottomWidth: 1, borderBottomColor: "#f2f3fc" }}>
                <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 20, flex: 1 }}>
                  <View style={{ paddingTop: 4 }}>
                    <SvgIcon size={20} color="#003F87" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>Chat Messages</Text>
                    <Text style={{ fontSize: 14, color: "#424752", marginTop: 4 }}>Notifikasi saat teknisi atau customer service mengirimkan pesan kepada Anda.</Text>
                  </View>
                </View>
                <View style={{ width: 48, height: 32, borderRadius: 16, backgroundColor: "#0056b3", justifyContent: "center", paddingHorizontal: 4 }}>
                  <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: "white", alignSelf: "flex-end" }} />
                </View>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 24, borderBottomWidth: 1, borderBottomColor: "#f2f3fc" }}>
                <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 20, flex: 1 }}>
                  <View style={{ paddingTop: 4 }}>
                    <SvgIcon size={20} color="#004C24" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>Promos & Offers</Text>
                    <Text style={{ fontSize: 14, color: "#424752", marginTop: 4 }}>Informasi tentang diskon eksklusif dan penawaran layanan terbaru.</Text>
                  </View>
                </View>
                <View style={{ width: 48, height: 32, borderRadius: 16, backgroundColor: "#c2c6d4", justifyContent: "center", paddingHorizontal: 4 }}>
                  <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: "white", alignSelf: "flex-start" }} />
                </View>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 24 }}>
                <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 20, flex: 1 }}>
                  <View style={{ paddingTop: 4 }}>
                    <SvgIcon size={20} color="#003F87" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>Email Notifications</Text>
                    <Text style={{ fontSize: 14, color: "#424752", marginTop: 4 }}>Ringkasan transaksi dan laporan servis dikirimkan langsung ke email Anda.</Text>
                  </View>
                </View>
                <View style={{ width: 48, height: 32, borderRadius: 16, backgroundColor: "#0056b3", justifyContent: "center", paddingHorizontal: 4 }}>
                  <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: "white", alignSelf: "flex-end" }} />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ padding: 24, borderRadius: 12, backgroundColor: "rgba(0,63,135,0.05)", borderLeftWidth: 4, borderLeftColor: "#003f87" }}>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <SvgIcon size={20} color="#003F87" />
            <Text style={{ flex: 1, fontSize: 14, color: "#424752", lineHeight: 22 }}>
              Kami menghargai privasi Anda. Notifikasi sistem yang bersifat krusial (seperti keamanan akun) akan tetap dikirimkan meskipun pengaturan di atas dimatikan.
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <LinearGradient
            colors={["#003f87", "#0056b3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ paddingVertical: 16, borderRadius: 12, alignItems: "center", flexDirection: "row", justifyContent: "center", gap: 8 }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Simpan Pengaturan</Text>
            <SvgIcon size={20} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
}
