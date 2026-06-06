import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';

export const DiscoverServisin = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8FAFC",
        alignItems: "center",
      }}
    >
      <View style={{ width: 390, flex: 1, backgroundColor: "#FFFFFF", overflow: "hidden", position: "relative" }}>
        
        
        <ScrollView
          style={{
            flex: 1,
            paddingTop: 16,
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              paddingVertical: 17,
              paddingHorizontal: 19,
              marginBottom: 32,
              marginHorizontal: 24,
              shadowColor: "#000000",
              shadowOpacity: 0.1,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/3xfb4aqa_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 18,
                height: 18,
                marginRight: 11,
              }}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#424752",
                  fontSize: 14,
                }}
              >
                {"Search for services or technicians"}
              </Text>
            </View>
          </View>
          
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#003F87",
              borderRadius: 12,
              paddingVertical: 16,
              marginBottom: 32,
              marginHorizontal: 24,
              shadowColor: "#865300",
              shadowOpacity: 0.2,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowRadius: 6,
              elevation: 6,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/4g215j35_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 12,
                width: 44,
                height: 24,
                marginRight: 16,
              }}
            />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Cek Paket Harga Khusus"}
            </Text>
          </TouchableOpacity>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: "row",
              paddingVertical: 8,
              marginBottom: 32,
            }}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            <View
              style={{
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2cqxa4dd_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 56,
                  height: 56,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  alignItems: "center",
                  paddingVertical: 3,
                }}
              >
                <Text
                  style={{
                    color: "#424752",
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  {"AC"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/qaccobfl_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 56,
                  height: 56,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  alignItems: "center",
                  paddingVertical: 3,
                }}
              >
                <Text
                  style={{
                    color: "#424752",
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  {"TV"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/lonamwmk_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 56,
                  height: 56,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  alignItems: "center",
                  paddingVertical: 3,
                }}
              >
                <Text
                  style={{
                    color: "#424752",
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  {"Washer"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/5dm6dd54_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 56,
                  height: 56,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  paddingVertical: 3,
                  paddingHorizontal: 1,
                }}
              >
                <Text
                  style={{
                    color: "#424752",
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  {"Electric"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/5dm6dd54_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 56,
                  height: 56,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  paddingVertical: 3,
                  paddingHorizontal: 1,
                }}
              >
                <Text
                  style={{
                    color: "#424752",
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  {"Others"}
                </Text>
              </View>
            </View>
          </ScrollView>
          
          <View
            style={{
              paddingTop: 8,
              marginBottom: 40,
              paddingHorizontal: 24,
            }}
          >
            <View
              style={{
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  color: "#191C21",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Recent Service"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                padding: 20,
                shadowColor: "#000000",
                shadowOpacity: 0.05,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 24,
                elevation: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/hqjzpd00_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 56,
                  height: 56,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "#191C21",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginBottom: 4,
                  }}
                >
                  {"Marcus Chen"}
                </Text>
                <Text
                  style={{
                    color: "#424752",
                    fontSize: 12,
                  }}
                >
                  {"AC Cleaning •\nCompleted 2 days ago"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#003F87",
                  borderRadius: 9999,
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"Rebook"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
              paddingHorizontal: 24,
            }}
          >
            <Text
              style={{
                color: "#191C21",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {"Pilihan Servisin"}
            </Text>
            <TouchableOpacity onPress={() => router.push('/all-services')}>
              <Text
                style={{
                  color: "#003F87",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"See All"}
              </Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: "row",
              marginBottom: 40,
            }}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: 16,
                borderWidth: 1,
                padding: 12,
                marginRight: 16,
                width: 200,
                shadowColor: "#000000",
                shadowOpacity: 0.05,
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2231x2kh_expires_30_days.png",
                }}
                resizeMode={"cover"}
                style={{
                  height: 120,
                  borderRadius: 8,
                  overflow: "hidden",
                  marginBottom: 12,
                  justifyContent: "flex-end",
                  padding: 8,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFFFFFE3",
                    borderRadius: 8,
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#191C21",
                      fontSize: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {"⭐ 4.9"}
                  </Text>
                </View>
              </ImageBackground>
              <Text
                style={{
                  color: "#191C21",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                {"Aria Santoso"}
              </Text>
              <Text
                style={{
                  color: "#424752",
                  fontSize: 10,
                  marginBottom: 8,
                }}
              >
                {"Washing Machine Specialist"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                  <Text
                    style={{
                      color: "#865300",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"IDR 150k"}
                  </Text>
                  <Text style={{ color: "#424752", fontSize: 10 }}>{"/hr"}</Text>
                </View>
              </View>
            </View>
            
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: 16,
                borderWidth: 1,
                padding: 12,
                width: 200,
                shadowColor: "#000000",
                shadowOpacity: 0.05,
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2231x2kh_expires_30_days.png",
                }}
                resizeMode={"cover"}
                style={{
                  height: 120,
                  borderRadius: 8,
                  overflow: "hidden",
                  marginBottom: 12,
                  justifyContent: "flex-end",
                  padding: 8,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFFFFFE3",
                    borderRadius: 8,
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#191C21",
                      fontSize: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {"⭐ 4.9"}
                  </Text>
                </View>
              </ImageBackground>
              <Text
                style={{
                  color: "#191C21",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                {"Budi Hartono"}
              </Text>
              <Text
                style={{
                  color: "#424752",
                  fontSize: 10,
                  marginBottom: 8,
                }}
              >
                {"Master Electrician"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                  <Text
                    style={{
                      color: "#865300",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"IDR 150k"}
                  </Text>
                  <Text style={{ color: "#424752", fontSize: 10 }}>{"/hr"}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          
          <View style={{ paddingTop: 8, marginBottom: 24, paddingHorizontal: 24, gap: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: '#191c21', fontSize: 18, fontWeight: 'bold' }}>
                Eksplorasi
              </Text>
              <TouchableOpacity>
                <Text style={{ color: '#003f87', fontSize: 12, fontWeight: 'bold' }}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {[1, 2, 3, 4].map((item, index) => (
                <View key={index} style={{ width: '48%', backgroundColor: '#FFFFFF', borderRadius: 16, padding: 12, marginBottom: 16, shadowColor: '#000000', shadowOpacity: 0.05, shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, elevation: 2, borderWidth: 1, borderColor: '#c2c6d41a' }}>
                  <View style={{ width: '100%', height: 104, borderRadius: 12, backgroundColor: '#ccc', marginBottom: 10, overflow: 'hidden' }}>
                    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2231x2kh_expires_30_days.png" }} style={{ width: '100%', height: '100%' }} contentFit="cover" />
                    <View style={{ position: 'absolute', bottom: 8, left: 8, backgroundColor: 'rgba(255,255,255,0.9)', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 }}>
                      <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#191c21' }}>⭐ 4.9</Text>
                    </View>
                  </View>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#191c21', marginBottom: 2 }}>Aria Santoso</Text>
                  <Text style={{ fontSize: 10, color: '#424752', marginBottom: 8 }}>Washing Machine Specialist</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                      <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#865300' }}>IDR 150k</Text>
                      <Text style={{ fontSize: 8, color: '#424752' }}>/hr</Text>
                    </View>
                    <View style={{ backgroundColor: '#61de8a33', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 }}>
                      <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#004C24' }}>→</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        
      </View>
    </View>
  );
};

export default DiscoverServisin;

