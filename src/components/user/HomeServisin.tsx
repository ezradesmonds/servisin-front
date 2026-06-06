import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, Modal, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";



export const HomeServisin = (props: any) => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const slideAnim = React.useRef(new Animated.Value(1000)).current;
  const overlayAnim = React.useRef(new Animated.Value(0)).current;

  const openSheet = () => {
    setSheetOpen(true);
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnim, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      })
    ]).start();
  };

  const closeSheet = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 1000,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnim, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      })
    ]).start(() => setSheetOpen(false));
  };

  const services = [
    { id: 1, label: 'AC Service', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/j1x2o57t_expires_30_days.png' },
    { id: 2, label: 'TV Repair', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/3ndy0d74_expires_30_days.png' },
    { id: 3, label: 'Washing\nMachine', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/n3wa4gsc_expires_30_days.png' },
    { id: 4, label: 'Electrical', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2pvg2nzh_expires_30_days.png' },
    { id: 5, label: 'Plumbing', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/j1x2o57t_expires_30_days.png' },
    { id: 6, label: 'Painting', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/3ndy0d74_expires_30_days.png' },
    { id: 7, label: 'Cleaning', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/n3wa4gsc_expires_30_days.png' },
  ];

  const allServices = [
    ...services,
    { id: 8, label: 'Carpentry', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2pvg2nzh_expires_30_days.png' },
    { id: 9, label: 'Roofing', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/j1x2o57t_expires_30_days.png' },
    { id: 10, label: 'Gardening', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/3ndy0d74_expires_30_days.png' },
    { id: 11, label: 'Moving', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/n3wa4gsc_expires_30_days.png' },
    { id: 12, label: 'Pest Control', icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2pvg2nzh_expires_30_days.png' },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8FAFC",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 390,
          flex: 1,
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          position: "relative",
        }}
      >
        

        <ScrollView
          style={{
            flex: 1,
            paddingTop: 16,
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View
            style={{
              marginBottom: 32,
              paddingHorizontal: 24,
            }}
          >
            <View
              style={{
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  color: "#424752",
                  fontSize: 14,
                }}
              >
                {"Selamat datang kembali,"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#003F87",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                {"Halo, Budi!"}
              </Text>
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F2F3FC",
              borderRadius: 24,
              paddingVertical: 18,
              paddingHorizontal: 23,
              marginBottom: 32,
              marginHorizontal: 24,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/39jouta1_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 18,
                height: 18,
                marginRight: 15,
              }}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#727784",
                  fontSize: 16,
                }}
              >
                {"Cari layanan servis..."}
              </Text>
            </View>
          </View> */}
          <View
            style={{
              backgroundColor: "#003F87",
              borderRadius: 24,
              marginBottom: 32,
              marginHorizontal: 24,
              overflow: "hidden",
            }}
          >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={["#0056B3", "#003F87"]}
                style={{
                  padding: 24,
                }}
              >
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#FEA520",
                  borderRadius: 9999,
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  marginBottom: 12,
                }}
              >
                <Text
                  style={{
                    color: "#694000",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"PROMO TERBATAS"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 16,
                }}
              >
                {"Diskon 20% untuk\nservis pertama!"}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    color: "#D7E2FF",
                    fontSize: 14,
                    marginRight: 4,
                  }}
                >
                  {"Gunakan kode:"}
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {"BARUSERVIS"}
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              marginBottom: 32,
              marginHorizontal: 24,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 1,
                }}
              >
                <Text
                  style={{
                    color: "#191C21",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {"Kategori Layanan"}
                </Text>
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {services.map((item, index) => (
                <View key={item.id} style={{ width: '23%', alignItems: 'center', marginBottom: 16 }}>
                  <Image
                    source={{ uri: item.icon }}
                    resizeMode={"stretch"}
                    style={{ width: 64, height: 64, marginBottom: 8 }}
                  />
                  <Text style={{ color: "#424752", fontSize: 11, fontWeight: "bold", textAlign: "center" }}>
                    {item.label}
                  </Text>
                </View>
              ))}
              <TouchableOpacity onPress={openSheet} style={{ width: '23%', alignItems: 'center', marginBottom: 16 }}>
                <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#F2F3FC', borderWidth: 1.5, borderColor: '#003F87', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <Text style={{ color: '#003F87', fontSize: 24, fontWeight: 'bold' }}>⊞</Text>
                </View>
                <Text style={{ color: "#003F87", fontSize: 11, fontWeight: "bold", textAlign: "center" }}>
                  Semua
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 32, marginHorizontal: 24, gap: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191c21' }}>
                Teknisi Terdekat
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={{ fontSize: 12, fontWeight: '500', color: '#004c24' }}>
                  Jakarta Selatan
                </Text>
              </View>
            </View>

            <View style={{ gap: 24 }}>
              {/* Card 1 */}
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ width: 80, height: 80, borderRadius: 16, backgroundColor: '#ccc' }}>
                  <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/njlxhq9s_expires_30_days.png" }} style={{ width: 80, height: 80, borderRadius: 16 }} />
                  <View style={{ position: 'absolute', left: 60, top: 60, width: 24, height: 24, borderRadius: 12, backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: '#f2f3fc', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#004c24' }} />
                  </View>
                </View>
                <View style={{ flex: 1, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#c2c6d41a' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ gap: 4 }}>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191c21' }}>Kevin Pratama</Text>
                      <View style={{ flexDirection: 'row', gap: 8 }}>
                        <View style={{ backgroundColor: '#004c241a', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999 }}>
                          <Text style={{ fontSize: 8, fontWeight: '600', color: '#004c24', textTransform: 'uppercase' }}>Verified Pro</Text>
                        </View>
                        <View style={{ backgroundColor: '#8653001a', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999 }}>
                          <Text style={{ fontSize: 8, fontWeight: '600', color: '#865300', textTransform: 'uppercase' }}>Quick Response</Text>
                        </View>
                      </View>
                    </View>
                    <Text style={{ fontSize: 10, fontWeight: '500', color: '#424752' }}>0.8 km</Text>
                  </View>
                  <Text style={{ fontSize: 12, color: '#424752', marginTop: 4 }}>Specialized in Smart Home & TV repairs...</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 4 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                      <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#191c21' }}>⭐️ 4.9</Text>
                    </View>
                    <Text style={{ fontSize: 11, color: '#424752' }}>Available Now</Text>
                  </View>
                </View>
              </View>

              {/* Card 2 */}
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ width: 80, height: 80, borderRadius: 16, backgroundColor: '#ccc' }}>
                  <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/e3iswc0o_expires_30_days.png" }} style={{ width: 80, height: 80, borderRadius: 16 }} />
                  <View style={{ position: 'absolute', left: 60, top: 60, width: 24, height: 24, borderRadius: 12, backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: '#f2f3fc', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#004c24' }} />
                  </View>
                </View>
                <View style={{ flex: 1, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#c2c6d41a' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ gap: 4 }}>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191c21' }}>Linda Wijaya</Text>
                      <View style={{ flexDirection: 'row', gap: 8 }}>
                        <View style={{ backgroundColor: '#004c241a', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999 }}>
                          <Text style={{ fontSize: 8, fontWeight: '600', color: '#004c24', textTransform: 'uppercase' }}>Verified Pro</Text>
                        </View>
                      </View>
                    </View>
                    <Text style={{ fontSize: 10, fontWeight: '500', color: '#424752' }}>1.5 km</Text>
                  </View>
                  <Text style={{ fontSize: 12, color: '#424752', marginTop: 4 }}>Deep cleaning and disinfection services...</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 4 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                      <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#191c21' }}>⭐️ 4.7</Text>
                    </View>
                    <Text style={{ fontSize: 11, color: '#424752' }}>Next: 2 PM</Text>
                  </View>
                </View>
              </View>

            </View>
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={isSheetOpen}
        transparent={true}
        animationType="none"
        onRequestClose={closeSheet}
      >
        <TouchableWithoutFeedback onPress={closeSheet}>
          <Animated.View style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
            opacity: overlayAnim,
          }} />
        </TouchableWithoutFeedback>
        <Animated.View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingBottom: 16,
          transform: [{ translateY: slideAnim }]
        }}>
          <View style={{ width: 36, height: 4, backgroundColor: '#ddd', borderRadius: 2, marginVertical: 10, alignSelf: 'center' }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191C21', paddingHorizontal: 14, paddingBottom: 10 }}>All services</Text>
          <ScrollView style={{ maxHeight: 320, paddingHorizontal: 12 }} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {allServices.map(item => (
              <TouchableOpacity key={item.id} style={{ width: '23%', backgroundColor: '#F2F3FC', borderRadius: 12, paddingVertical: 12, alignItems: 'center', marginBottom: 8 }}>
                <Image source={{ uri: item.icon }} style={{ width: 32, height: 32, marginBottom: 6 }} />
                <Text style={{ color: '#003F87', fontSize: 10, textAlign: 'center', fontWeight: 'bold' }}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity onPress={closeSheet} style={{ marginHorizontal: 12, marginTop: 12, backgroundColor: '#003F87', borderRadius: 12, paddingVertical: 12, alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }}>Tutup</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>

    </View>
  );
};

export default HomeServisin;
