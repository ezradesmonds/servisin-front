import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";



export const HomeServisin = (props: any) => {
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
          <View
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
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#003F87",
              borderRadius: 24,
              marginBottom: 32,
              marginHorizontal: 24,
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                color: "#D7E2FF",
                fontSize: 14,
                marginTop: 137,
                marginLeft: 32,
                marginRight: 41,
              }}
            >
              {"Gunakan kode: "}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#0056B3", "#0056B300"]}
                style={{
                  height: 192,
                }}
              ></LinearGradient>
              <View
                style={{
                  position: "absolute",
                  top: 33,
                  left: -139,
                  backgroundColor: "#FEA520",
                  borderRadius: 9999,
                  paddingVertical: 7,
                  paddingHorizontal: 12,
                }}
              >
                <Text
                  style={{
                    color: "#694000",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"PROMO TERBATAS"}
                </Text>
              </View>
              <Text
                style={{
                  position: "absolute",
                  top: 61,
                  right: 99,
                  color: "#FFFFFF",
                  fontSize: 24,
                  fontWeight: "bold",
                  width: 211,
                }}
              >
                {"Diskon 20% untuk\nservis pertama!"}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  bottom: 43,
                  left: -34,
                  color: "#D7E2FF",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"BARUSERVIS"}
              </Text>
            </View>
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
              <View
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 1,
                }}
              >
                <Text
                  style={{
                    color: "#003F87",
                    fontSize: 14,
                  }}
                >
                  {"Lihat Semua"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingBottom: 16,
                  marginRight: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/j1x2o57t_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 64,
                    height: 64,
                    marginBottom: 14,
                  }}
                />
                <Text
                  style={{
                    color: "#424752",
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  {"AC Service"}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingBottom: 14,
                  marginRight: 17,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/3ndy0d74_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 64,
                    height: 64,
                    marginBottom: 14,
                  }}
                />
                <Text
                  style={{
                    color: "#424752",
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  {"TV Repair"}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingBottom: 1,
                  marginRight: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/n3wa4gsc_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 64,
                    height: 64,
                    marginBottom: 10,
                  }}
                />
                <View
                  style={{
                    paddingVertical: 2,
                    paddingHorizontal: 13,
                  }}
                >
                  <Text
                    style={{
                      color: "#424752",
                      fontSize: 11,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {"Washing\nMachine"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingBottom: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2pvg2nzh_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 64,
                    height: 64,
                    marginBottom: 14,
                  }}
                />
                <Text
                  style={{
                    color: "#424752",
                    fontSize: 11,
                    fontWeight: "bold",
                  }}
                >
                  {"Electrical"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
              marginHorizontal: 24,
            }}
          >
            <View
              style={{
                alignItems: "center",
                paddingVertical: 7,
              }}
            >
              <Text
                style={{
                  color: "#191C21",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Teknisi Terdekat"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/r0c10z2q_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 9,
                  height: 11,
                  marginRight: 3,
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
                    color: "#004C24",
                    fontSize: 12,
                  }}
                >
                  {"Jakarta Selatan"}
                </Text>
              </View>
            </View>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: "row",
            }}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: 24,
                borderWidth: 1,
                paddingVertical: 17,
                marginRight: 16,
                minWidth: 260,
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
              <View
                style={{
                  alignItems: "center",
                  marginLeft: 17,
                  marginRight: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/njlxhq9s_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </View>
              <View
                style={{
                  marginRight: 16,
                  flex: 1,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    alignItems: "center",
                    paddingVertical: 3,
                  }}
                >
                  <Text
                    style={{
                      color: "#191C21",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Andi Wijaya"}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    alignItems: "center",
                    paddingBottom: 3,
                  }}
                >
                  <View
                    style={{
                      paddingRight: 16,
                    }}
                  >
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 11,
                      }}
                    >
                      {"Spesialis AC"}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFDDB94D",
                    borderRadius: 9999,
                    paddingVertical: 2,
                    paddingHorizontal: 8,
                    marginTop: 4,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/knflv83f_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      borderRadius: 9999,
                      width: 10,
                      height: 9,
                      marginRight: 4,
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
                        color: "#865300",
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {"4.9"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: 24,
                borderWidth: 1,
                paddingVertical: 17,
                minWidth: 260,
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
              <View
                style={{
                  alignItems: "center",
                  marginLeft: 17,
                  marginRight: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/e3iswc0o_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </View>
              <View
                style={{
                  marginRight: 16,
                  flex: 1,
                }}
              >
                <View
                  style={{
                    alignSelf: "flex-start",
                    alignItems: "center",
                    paddingVertical: 3,
                  }}
                >
                  <Text
                    style={{
                      color: "#191C21",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {"Siti Rahma"}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    alignItems: "center",
                    paddingBottom: 3,
                  }}
                >
                  <View
                    style={{
                      paddingRight: 16,
                    }}
                  >
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 11,
                      }}
                    >
                      {"Elektronik TV"}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFDDB94D",
                    borderRadius: 9999,
                    paddingVertical: 2,
                    paddingHorizontal: 8,
                    marginTop: 4,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/tttp9kt8_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      borderRadius: 9999,
                      width: 10,
                      height: 9,
                      marginRight: 4,
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
                        color: "#865300",
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {"4.8"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>

        
      </View>
    </SafeAreaView>
  );
};

export default HomeServisin;

