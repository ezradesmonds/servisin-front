import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const SvgIcon = ({ size = 20, color = "#000" }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2 }} />
);

export default function ReferralProgram() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9ff" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 128, gap: 32 }}
      >
        <LinearGradient
          colors={["#003f87", "#0056b3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 32, borderRadius: 24, overflow: "hidden", position: "relative" }}
        >
          <View style={{ position: "absolute", right: -50, bottom: -50, width: 200, height: 200, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 100 }} />
          
          <View style={{ gap: 16 }}>
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "white", lineHeight: 40 }}>
              Spread the{"\n"}word, reap{"\n"}the rewards
            </Text>
            <Text style={{ fontSize: 14, color: "#d7e2ff", lineHeight: 22 }}>
              Earn up to $50 for every friend who books their first home service with Servisin.
            </Text>
            <TouchableOpacity style={{ alignSelf: "flex-start", marginTop: 8, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24, backgroundColor: "#fea520" }}>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#663e00" }}>Invite Friends</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={{ padding: 24, borderRadius: 24, backgroundColor: "white", borderWidth: 1, borderColor: "rgba(194,198,212,0.15)", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: "#424752", textTransform: "uppercase" }}>Your Unique Referral Code</Text>
          <View style={{ width: "100%", marginTop: 16, flexDirection: "row", alignItems: "center", backgroundColor: "#f2f3fc", borderRadius: 24, borderWidth: 2, borderColor: "rgba(0,63,135,0.2)", borderStyle: "dashed", padding: 12 }}>
            <Text style={{ flex: 1, fontSize: 24, fontWeight: "bold", color: "#003f87", textAlign: "center" }}>SERVISIN24</Text>
            <TouchableOpacity style={{ padding: 12, borderRadius: 8, backgroundColor: "#003f87" }}>
              <SvgIcon size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 12, fontStyle: "italic", color: "#424752", textAlign: "center", marginTop: 16, lineHeight: 20 }}>
            Share this code with your friends to give them 20% off!
          </Text>
        </View>

        <View style={{ gap: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#003f87" }}>How it works</Text>
          <View style={{ gap: 16 }}>
            <View style={{ flexDirection: "row", padding: 24, borderRadius: 24, backgroundColor: "#f2f3fc", gap: 16 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#003f87", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>1</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#191c21" }}>Share your code</Text>
                <Text style={{ fontSize: 12, color: "#424752", marginTop: 4 }}>Send your code via WhatsApp, Email, or Social Media.</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", padding: 24, borderRadius: 24, backgroundColor: "#f2f3fc", gap: 16 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#003f87", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>2</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#191c21" }}>Friend joins</Text>
                <Text style={{ fontSize: 12, color: "#424752", marginTop: 4 }}>They use your code for their first technician booking.</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", padding: 24, borderRadius: 24, backgroundColor: "#f2f3fc", gap: 16 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#003f87", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>3</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#191c21" }}>Both get rewards</Text>
                <Text style={{ fontSize: 12, color: "#424752", marginTop: 4 }}>You earn credits and they get a major discount.</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ gap: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#003f87" }}>Your Progress</Text>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <View style={{ flex: 1, padding: 24, borderRadius: 24, backgroundColor: "#e1e2ea" }}>
              <Text style={{ fontSize: 12, fontWeight: "600", color: "#424752", textTransform: "uppercase" }}>Total Earned</Text>
              <Text style={{ fontSize: 32, fontWeight: "bold", color: "#191c21", marginTop: 8 }}>$50</Text>
            </View>
            <View style={{ flex: 1, padding: 24, borderRadius: 24, backgroundColor: "#e1e2ea" }}>
              <Text style={{ fontSize: 12, fontWeight: "600", color: "#424752", textTransform: "uppercase" }}>Friends Referred</Text>
              <Text style={{ fontSize: 32, fontWeight: "bold", color: "#191c21", marginTop: 8 }}>2</Text>
            </View>
          </View>

          <View style={{ borderRadius: 24, backgroundColor: "white", borderWidth: 1, borderColor: "rgba(194,198,212,0.1)", overflow: "hidden" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16, borderBottomWidth: 1, borderBottomColor: "rgba(194,198,212,0.1)" }}>
              <Text style={{ fontSize: 14, fontWeight: "bold", color: "#191c21" }}>Recent Activity</Text>
              <Text style={{ fontSize: 12, fontWeight: "600", color: "#003f87" }}>View All</Text>
            </View>

            <View style={{ padding: 16, flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#e1e2ea", justifyContent: "center", alignItems: "center" }}>
                <SvgIcon size={20} color="#424752" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#191c21" }}>Sarah Mitchell</Text>
                <Text style={{ fontSize: 12, color: "#424752", marginTop: 2 }}>Completed first booking</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#004c24" }}>+$20.00</Text>
                <Text style={{ fontSize: 10, color: "#424752", marginTop: 2 }}>Oct 24</Text>
              </View>
            </View>

            <View style={{ padding: 16, flexDirection: "row", alignItems: "center", gap: 16, borderTopWidth: 1, borderTopColor: "rgba(194,198,212,0.1)" }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#e1e2ea", justifyContent: "center", alignItems: "center" }}>
                <SvgIcon size={20} color="#424752" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#191c21" }}>David Chen</Text>
                <Text style={{ fontSize: 12, color: "#424752", marginTop: 2 }}>Used your referral code</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#004c24" }}>+$20.00</Text>
                <Text style={{ fontSize: 10, color: "#424752", marginTop: 2 }}>Oct 22</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
