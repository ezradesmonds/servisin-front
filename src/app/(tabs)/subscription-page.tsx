import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const SvgIcon = ({ size = 20, color = "#000" }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2 }} />
);

export default function SubscriptionPage() {
  const [activeTab, setActiveTab] = useState("Telusuri");

  return (
    <View style={{ flex: 1, backgroundColor: "#f8fafc" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 128, gap: 32 }}
      >
        <View style={{ flexDirection: "row", padding: 4, backgroundColor: "#f2f3fc", borderRadius: 12 }}>
          <TouchableOpacity
            style={{ flex: 1, paddingVertical: 10, alignItems: "center", backgroundColor: activeTab === "Telusuri" ? "white" : "transparent", borderRadius: 8 }}
            onPress={() => setActiveTab("Telusuri")}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: activeTab === "Telusuri" ? "#003f87" : "#424752" }}>
              Telusuri
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, paddingVertical: 10, alignItems: "center", backgroundColor: activeTab === "Paket Saya" ? "white" : "transparent", borderRadius: 8 }}
            onPress={() => setActiveTab("Paket Saya")}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: activeTab === "Paket Saya" ? "#003f87" : "#424752" }}>
              Paket Saya
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "Telusuri" ? (
          <View style={{ gap: 24 }}>
            <View style={{ alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#191c21", lineHeight: 32 }}>
                Solusi Perawatan{"\n"}Tanpa Khawatir
              </Text>
              <Text style={{ fontSize: 14, textAlign: "center", color: "#424752", lineHeight: 22 }}>
                Pilih paket yang sesuai dengan kebutuhan rumah Anda.
              </Text>
            </View>

            <View style={{ gap: 16 }}>
              <View style={{ flexDirection: "row", alignItems: "center", padding: 16, borderRadius: 16, backgroundColor: "white", borderWidth: 1, borderColor: "rgba(194,198,212,0.15)" }}>
                <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "#f1f5f9", justifyContent: "center", alignItems: "center" }}>
                  <SvgIcon size={24} color="#64748B" />
                </View>
                <View style={{ flex: 1, paddingLeft: 16 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>Bronze</Text>
                    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                      <Text style={{ fontSize: 14, fontWeight: "bold", color: "#003f87" }}>$10</Text>
                      <Text style={{ fontSize: 10, fontWeight: "500", color: "#424752" }}>/bln</Text>
                    </View>
                  </View>
                  <Text style={{ fontSize: 12, color: "#424752", marginTop: 4 }}>2 free minor checkups, standard…</Text>
                </View>
                <SvgIcon size={12} color="#C2C6D4" />
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", padding: 16, borderRadius: 16, backgroundColor: "#003f87", position: "relative" }}>
                <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.2)", justifyContent: "center", alignItems: "center" }}>
                  <SvgIcon size={24} color="white" />
                </View>
                <View style={{ flex: 1, paddingLeft: 16 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Silver</Text>
                    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                      <Text style={{ fontSize: 14, fontWeight: "bold", color: "#d7e2ff" }}>$25</Text>
                      <Text style={{ fontSize: 10, fontWeight: "500", color: "rgba(215,226,255,0.7)" }}>/bln</Text>
                    </View>
                  </View>
                  <Text style={{ fontSize: 12, color: "rgba(215,226,255,0.8)", marginTop: 4 }}>1 AC cleaning & 2 checkups included.</Text>
                </View>
                <SvgIcon size={12} color="rgba(255,255,255,0.5)" />
                <View style={{ position: "absolute", top: -8, right: 16, backgroundColor: "#fea520", paddingHorizontal: 8, paddingVertical: 2, borderRadius: 9999 }}>
                  <Text style={{ fontSize: 8, fontWeight: "bold", color: "#694000" }}>POPULER</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", padding: 16, borderRadius: 16, backgroundColor: "white", borderWidth: 1, borderColor: "rgba(254,165,32,0.3)" }}>
                <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "rgba(255,221,185,0.3)", justifyContent: "center", alignItems: "center" }}>
                  <SvgIcon size={24} color="#865300" />
                </View>
                <View style={{ flex: 1, paddingLeft: 16 }}>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>Gold</Text>
                    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                      <Text style={{ fontSize: 14, fontWeight: "bold", color: "#865300" }}>$50</Text>
                      <Text style={{ fontSize: 10, fontWeight: "500", color: "#424752" }}>/bln</Text>
                    </View>
                  </View>
                  <Text style={{ fontSize: 12, color: "#424752", marginTop: 4 }}>V.I.P treatment & unlimited checkups.</Text>
                </View>
                <SvgIcon size={12} color="#C2C6D4" />
              </View>
            </View>

            <View style={{ borderTopWidth: 1, borderTopColor: "rgba(194,198,212,0.2)", paddingTop: 16, gap: 16 }}>
              <View style={{ backgroundColor: "#f2f3fc", borderRadius: 16, padding: 16, flexDirection: "row", alignItems: "center" }}>
                <SvgIcon size={16} color="#424752" />
                <Text style={{ color: "rgba(66,71,82,0.6)", marginLeft: 12 }}>Cari paket teknisi atau promo...</Text>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>Paket Kustom</Text>
                <Text style={{ fontSize: 12, fontWeight: "600", color: "#003f87" }}>Lihat Semua</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", padding: 16, borderRadius: 16, backgroundColor: "white", borderWidth: 1, borderColor: "rgba(194,198,212,0.1)" }}>
                <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "#eff6ff", justifyContent: "center", alignItems: "center" }}>
                  <SvgIcon size={24} color="#2563EB" />
                </View>
                <View style={{ flex: 1, paddingLeft: 16 }}>
                  <Text style={{ fontSize: 14, fontWeight: "bold", color: "#191c21" }}>Langganan Spesial Rifki</Text>
                  <Text style={{ fontSize: 12, color: "#424752", marginTop: 4 }}>Paket pembersihan menyeluruh…</Text>
                </View>
                <SvgIcon size={12} color="#C2C6D4" />
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", padding: 16, borderRadius: 16, backgroundColor: "white", borderWidth: 1, borderColor: "rgba(194,198,212,0.1)" }}>
                <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "#fff7ed", justifyContent: "center", alignItems: "center" }}>
                  <SvgIcon size={24} color="#EA580C" />
                </View>
                <View style={{ flex: 1, paddingLeft: 16 }}>
                  <Text style={{ fontSize: 14, fontWeight: "bold", color: "#191c21" }}>Diskon Perumahan Citraland</Text>
                  <Text style={{ fontSize: 12, color: "#424752", marginTop: 4 }}>Tarif khusus untuk warga Citraland.</Text>
                </View>
                <SvgIcon size={12} color="#C2C6D4" />
              </View>
            </View>
          </View>
        ) : (
          <View style={{ gap: 24 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#191c21" }}>Status Berlangganan</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 9999, backgroundColor: "rgba(0,76,36,0.1)" }}>
                <SvgIcon size={12} color="#004C24" />
                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#004c24" }}>Aktif</Text>
              </View>
            </View>

            <LinearGradient
              colors={["#003f87", "#0056b3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ padding: 24, borderRadius: 32, gap: 32 }}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                  <Text style={{ fontSize: 12, fontWeight: "bold", color: "#bfdbfe", textTransform: "uppercase" }}>Current Membership</Text>
                  <Text style={{ fontSize: 24, fontWeight: "bold", color: "white", marginTop: 4 }}>Silver Plan Active</Text>
                </View>
                <View style={{ padding: 12, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <SvgIcon size={24} color="white" />
                </View>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.1)", justifyContent: "center", alignItems: "center" }}>
                  <SvgIcon size={20} color="#DBEAFE" />
                </View>
                <View>
                  <Text style={{ fontSize: 10, fontWeight: "bold", color: "#bfdbfe", textTransform: "uppercase" }}>Berlaku Hingga</Text>
                  <Text style={{ fontSize: 14, fontWeight: "600", color: "white" }}>Oct 24, 2024</Text>
                </View>
              </View>

              <View style={{ padding: 16, borderRadius: 16, backgroundColor: "rgba(0,0,0,0.1)", borderWidth: 1, borderColor: "rgba(255,255,255,0.05)", gap: 12 }}>
                <Text style={{ fontSize: 10, fontWeight: "bold", color: "#bfdbfe", textTransform: "uppercase" }}>Sisa Kuota Manfaat</Text>
                
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <SvgIcon size={16} color="#FFDDB9" />
                    <Text style={{ fontSize: 14, fontWeight: "500", color: "white" }}>Major AC Cleaning</Text>
                  </View>
                  <View style={{ paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>1x</Text>
                  </View>
                </View>

                <View style={{ height: 1, backgroundColor: "rgba(255,255,255,0.1)" }} />

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <SvgIcon size={16} color="#FFDDB9" />
                    <Text style={{ fontSize: 14, fontWeight: "500", color: "white" }}>Minor Checkups</Text>
                  </View>
                  <View style={{ paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>2x</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>

            <TouchableOpacity>
              <LinearGradient
                colors={["#865300", "#fea520"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ paddingVertical: 16, borderRadius: 12, alignItems: "center", flexDirection: "row", justifyContent: "center", gap: 8 }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Upgrade Plan Sekarang</Text>
              </LinearGradient>
            </TouchableOpacity>

            <Text style={{ fontSize: 12, color: "#424752", textAlign: "center", marginHorizontal: 24 }}>
              Tingkatkan ke Gold untuk mendapatkan prioritas teknisi dan diskon suku cadang hingga 20%.
            </Text>
          </View>
        )}
      </ScrollView>

    </View>
  );
}
