import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderTop } from "./HeaderTop";
import { BottomnavbarHome } from "./BottomnavbarHome";

export const ProfileServisin = (props: any) => {
  return (
    <SafeAreaView
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
        {/* @ts-ignore */}
        <HeaderTop />

        <ScrollView
          style={{
            flex: 1,
            paddingTop: 16,
            paddingHorizontal: 24,
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View
            style={{
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/p7r1witb_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 128,
                height: 128,
                marginBottom: 4,
              }}
            />
            <View
              style={{
                alignItems: "center",
                paddingTop: 18,
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  color: "#003F87",
                  fontSize: 30,
                  fontWeight: "bold",
                  marginBottom: 7,
                }}
              >
                {"Budi Santoso"}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                paddingVertical: 4,
              }}
            >
              <Text
                style={{
                  color: "#424752",
                  fontSize: 16,
                }}
              >
                {"budi.santoso@email.com"}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingTop: 8,
              marginBottom: 32,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#00000000",
                borderRadius: 12,
                borderWidth: 1,
                padding: 21,
                marginBottom: 16,
                shadowColor: "#000000",
                shadowOpacity: 0.05,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 4,
                elevation: 2,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/613bopl3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 64,
                  height: 48,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    marginBottom: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#191C21",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"Edit Profil"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#424752",
                      fontSize: 12,
                    }}
                  >
                    {"Update data pribadi"}
                  </Text>
                </View>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/twwvogzw_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 7,
                  height: 12,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#00000000",
                borderRadius: 12,
                borderWidth: 1,
                padding: 21,
                marginBottom: 16,
                shadowColor: "#000000",
                shadowOpacity: 0.05,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 4,
                elevation: 2,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/wihuhq0s_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 64,
                  height: 48,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    marginBottom: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#191C21",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"Alamat Saya"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#424752",
                      fontSize: 12,
                    }}
                  >
                    {"Kelola lokasi servis"}
                  </Text>
                </View>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/n11hk7re_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 7,
                  height: 12,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#00000000",
                borderRadius: 12,
                borderWidth: 1,
                padding: 21,
                marginBottom: 16,
                shadowColor: "#000000",
                shadowOpacity: 0.05,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 4,
                elevation: 2,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/6c75o50u_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 64,
                  height: 48,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    marginBottom: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#191C21",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"Paket Langganan"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#424752",
                      fontSize: 12,
                    }}
                  >
                    {"Harga khusus untuk partner kami"}
                  </Text>
                </View>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/oc7wd0pq_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 7,
                  height: 12,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#00000000",
                borderRadius: 12,
                borderWidth: 1,
                padding: 21,
                marginBottom: 16,
                shadowColor: "#000000",
                shadowOpacity: 0.05,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 4,
                elevation: 2,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/75vjf9i4_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 64,
                  height: 48,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    marginBottom: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#191C21",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"Notifikasi"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#424752",
                      fontSize: 12,
                    }}
                  >
                    {"Update & pengingat"}
                  </Text>
                </View>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/bt9pssvb_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 7,
                  height: 12,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#00000000",
                borderRadius: 12,
                borderWidth: 1,
                padding: 21,
                shadowColor: "#000000",
                shadowOpacity: 0.05,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 4,
                elevation: 2,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/i7qrxss1_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 64,
                  height: 48,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    marginBottom: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#191C21",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {"Referral Program"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#424752",
                      fontSize: 12,
                    }}
                  >
                    {"Ajak teman, dapat reward"}
                  </Text>
                </View>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/zkrj5wcy_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 7,
                  height: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 32,
            }}
          >
            <View
              style={{
                paddingLeft: 8,
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  color: "#727784",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Dukungan & Lainnya"}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F2F3FC",
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/6nlx0rl3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 34,
                  height: 18,
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
                  }}
                >
                  {"Pusat Bantuan"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/4j47djov_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 7,
                  height: 12,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F2F3FC",
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/72868s3p_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 32,
                  height: 20,
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
                  }}
                >
                  {"Syarat & Ketentuan"}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/jrbbsnpr_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 7,
                  height: 12,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFDAD633",
                borderRadius: 12,
                padding: 16,
              }}
              onPress={() => alert("Logout pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/68o27mza_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 12,
                  width: 34,
                  height: 18,
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
                    color: "#BA1A1A",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {"Logout"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#003F87", "#0056B3"]}
            style={{
              borderRadius: 24,
              paddingVertical: 28,
              paddingHorizontal: 24,
              marginBottom: 48,
            }}
          >
            <View
              style={{
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {"Ajak Teman & Dapatkan Bonus"}
              </Text>
            </View>
            <View
              style={{
                paddingBottom: 8,
                paddingRight: 22,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"Dapatkan diskon 20% untuk setiap teman\nyang menggunakan kode referalmu."}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                paddingVertical: 13,
                paddingHorizontal: 24,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#003F87",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Bagikan Kode"}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </ScrollView>

        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          {/* @ts-ignore */}
          <BottomnavbarHome />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileServisin;
