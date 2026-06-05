import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

// Dummy Icon Component
const DummyIcon = ({ size = 24, color = "#CCC" }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2 }} />
);

export default function TransactionDetail() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#FFFFFF" }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 40, paddingBottom: 40, gap: 32 }}
      >
        <View style={{ alignItems: "center", gap: 16, paddingVertical: 24 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 80,
              paddingVertical: 20,
              borderRadius: 9999,
              backgroundColor: "#7efba4",
              shadowColor: "rgba(0,76,36,0.1)",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 1,
              shadowRadius: 15,
              elevation: 4,
            }}
          >
            <DummyIcon size={30} color="#00210C" />
          </View>
          <View style={{ alignItems: "center", gap: 4 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#003f87" }}>
              Service Completed
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", color: "#424752" }}>
              Transaction ID: #SRV-99281-2024
            </Text>
          </View>
        </View>

        <LinearGradient
          colors={["rgba(0,76,36,0.1)", "rgba(0,103,51,0.2)"]}
          style={{
            borderRadius: 12,
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            borderWidth: 1,
            borderColor: "rgba(0,76,36,0.1)",
          }}
        >
          <DummyIcon size={30} color="#004C24" />
          <View style={{ gap: 4, flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#005228" }}>Servisin Protection</Text>
            <Text style={{ fontSize: 12, color: "rgba(0,82,40,0.7)" }}>
              This work is covered by our 30-day quality guarantee.
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#003f87",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 21,
                alignSelf: "flex-start",
                marginTop: 4,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#FFF" }}>Cek Garansi</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={{ gap: 24, marginTop: 24 }}>
          <View
            style={{
              padding: 24,
              borderRadius: 12,
              backgroundColor: "#FFF",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 2,
              shadowOffset: { width: 0, height: 1 },
              elevation: 2,
              flexDirection: "row",
              gap: 24,
            }}
          >
            <View style={{ position: "relative" }}>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/j0q6i871_expires_30_days.png" }}
                style={{ width: 80, height: 96, borderRadius: 12 }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: -10,
                  left: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 9999,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.5)",
                }}
              >
                <DummyIcon size={12} color="#865300" />
                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#191c21" }}>4.9</Text>
              </View>
            </View>
            <View style={{ flex: 1, gap: 16 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                <View>
                  <Text style={{ fontSize: 10, fontWeight: "bold", textTransform: "uppercase", color: "#865300" }}>
                    Your{"\n"}Professional
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: "bold", color: "#003f87", marginVertical: 4 }}>
                    Alex{"\n"}Thompson
                  </Text>
                  <Text style={{ fontSize: 14, color: "#424752" }}>
                    Master{"\n"}Electrician •{"\n"}Gold Member
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 9999,
                    backgroundColor: "rgba(0,103,51,0.1)",
                  }}
                >
                  <DummyIcon size={11} color="#006733" />
                  <Text style={{ fontSize: 12, fontWeight: "bold", color: "#006733" }}>Verified</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", gap: 8 }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: 12,
                    borderRadius: 8,
                    backgroundColor: "#f2f3fc",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold", color: "#003f87" }}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: 12,
                    borderRadius: 8,
                    backgroundColor: "#f2f3fc",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold", color: "#003f87", textAlign: "center" }}>
                    Rate{"\n"}Service
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 24,
              borderRadius: 12,
              backgroundColor: "#FFF",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 2,
              shadowOffset: { width: 0, height: 1 },
              elevation: 2,
              gap: 24,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <DummyIcon size={20} color="#003F87" />
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#191c21" }}>Service Summary</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 16, padding: 16, borderRadius: 12, backgroundColor: "#f2f3fc" }}>
              <View
                style={{
                  width: 40,
                  height: 48,
                  borderRadius: 8,
                  backgroundColor: "#0056b3",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DummyIcon size={18} color="#BBD0FF" />
              </View>
              <View style={{ flex: 1, gap: 4 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>
                  Central AC Repair &{"\n"}Maintenance
                </Text>
                <Text style={{ fontSize: 14, color: "#424752" }}>
                  Deep cleaning, refrigerant top-up, and wiring inspection for 2 units.
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 16 }}>
              <View
                style={{
                  flex: 1,
                  padding: 16,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "rgba(194,198,212,0.3)",
                  gap: 4,
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "bold", textTransform: "uppercase", color: "#424752" }}>Date</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>Oct 24,{"\n"}2023</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  padding: 16,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "rgba(194,198,212,0.3)",
                  gap: 4,
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "bold", textTransform: "uppercase", color: "#424752" }}>
                  Time Slot
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>09:00 AM -{"\n"}11:30 AM</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 16,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "rgba(194,198,212,0.3)",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                <DummyIcon size={20} color="#424752" />
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#191c21" }}>
                  Grand Emerald{"\n"}Residences, Block C #12,{"\n"}Jakarta
                </Text>
              </View>
              <DummyIcon size={18} color="#003F87" />
            </View>
          </View>

          <View
            style={{
              padding: 24,
              borderRadius: 12,
              backgroundColor: "#FFF",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 2,
              shadowOffset: { width: 0, height: 1 },
              elevation: 2,
              gap: 24,
              marginTop: 24,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#191c21" }}>Payment Details</Text>

            <View style={{ gap: 12 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 14, color: "#424752" }}>Service Base Fee</Text>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#191c21" }}>$85.00</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 14, color: "#424752" }}>Parts & Components</Text>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#191c21" }}>$42.50</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 14, color: "#424752" }}>Technician Travel</Text>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#004c24" }}>FREE</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 14, color: "#424752" }}>Platform Fee</Text>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#191c21" }}>$2.00</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  paddingTop: 16,
                  borderTopWidth: 1,
                  borderColor: "rgba(194,198,212,0.2)",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#191c21" }}>Total Amount</Text>
                <Text style={{ fontSize: 24, fontWeight: "bold", color: "#003f87" }}>$129.50</Text>
              </View>
            </View>

            <View style={{ padding: 16, borderRadius: 12, backgroundColor: "#f2f3fc", gap: 8 }}>
              <Text style={{ fontSize: 10, fontWeight: "bold", textTransform: "uppercase", color: "#424752" }}>
                Payment Method
              </Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <DummyIcon size={20} color="#003F87" />
                  <Text style={{ fontSize: 14, fontWeight: "bold", color: "#191c21" }}>VISA •••• 4242</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 6,
                    backgroundColor: "#FFF",
                    shadowColor: "#000",
                    shadowOpacity: 0.05,
                    shadowRadius: 2,
                    shadowOffset: { width: 0, height: 1 },
                    elevation: 2,
                  }}
                >
                  <Text style={{ fontSize: 10, fontWeight: "bold", color: "#004c24" }}>PAID</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity>
              <LinearGradient
                colors={["#003f87", "#0056b3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  height: 56,
                  borderRadius: 12,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <DummyIcon size={16} color="white" />
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFF" }}>Download Invoice</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 56,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: "#c2c6d4",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <DummyIcon size={18} color="#424752" />
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#424752" }}>Get Help</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
