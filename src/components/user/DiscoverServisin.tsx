import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export const DiscoverServisin = (props: any) => {
  return (
    <SafeAreaView
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
            <TouchableOpacity>
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
          
          <View
            style={{
              paddingTop: 8,
              marginBottom: 24,
              paddingHorizontal: 24,
            }}
          >
            <View
              style={{
                marginBottom: 23,
              }}
            >
              <Text
                style={{
                  color: "#191C21",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {"Explore Nearby"}
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: 24,
                }}
              >
                <View
                  style={{
                    marginRight: 16,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/cwx10spo_expires_30_days.png",
                    }}
                    resizeMode={"cover"}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 12,
                      marginBottom: 5,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    borderBottomWidth: 1,
                    borderBottomColor: "#F2F3FC",
                    paddingBottom: 17,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          color: "#191C21",
                          fontSize: 16,
                          fontWeight: "bold",
                          marginBottom: 4,
                        }}
                      >
                        {"Kevin Pratama"}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "#004C241A",
                            borderRadius: 9999,
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                            marginRight: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#004C24",
                              fontSize: 10,
                              fontWeight: "bold",
                            }}
                          >
                            {"Verified Pro"}
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: "#8653001A",
                            borderRadius: 9999,
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#865300",
                              fontSize: 10,
                              fontWeight: "bold",
                            }}
                          >
                            {"Quick Response"}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 12,
                      }}
                    >
                      {"0.8 km"}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#424752",
                      fontSize: 12,
                      marginBottom: 8,
                      marginTop: 4,
                    }}
                  >
                    {"Specialized in Smart Home & TV repairs..."}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#191C21",
                        fontSize: 12,
                        fontWeight: "bold",
                        marginRight: 16,
                      }}
                    >
                      {"⭐ 4.9"}
                    </Text>
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 12,
                      }}
                    >
                      {"🟢 Available Now"}
                    </Text>
                  </View>
                </View>
              </View>
              
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <View
                  style={{
                    marginRight: 16,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/wensg4b4_expires_30_days.png",
                    }}
                    resizeMode={"cover"}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 12,
                      marginBottom: 5,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    paddingBottom: 17,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          color: "#191C21",
                          fontSize: 16,
                          fontWeight: "bold",
                          marginBottom: 4,
                        }}
                      >
                        {"Linda Wijaya"}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "#004C241A",
                            borderRadius: 9999,
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                            marginRight: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#004C24",
                              fontSize: 10,
                              fontWeight: "bold",
                            }}
                          >
                            {"Verified Pro"}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 12,
                      }}
                    >
                      {"1.5 km"}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#424752",
                      fontSize: 12,
                      marginBottom: 8,
                      marginTop: 4,
                    }}
                  >
                    {"Deep cleaning and disinfection services…"}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#191C21",
                        fontSize: 12,
                        fontWeight: "bold",
                        marginRight: 16,
                      }}
                    >
                      {"⭐ 4.7"}
                    </Text>
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 12,
                      }}
                    >
                      {"🕒 Next: 2 PM"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        
      </View>
    </SafeAreaView>
  );
};

export default DiscoverServisin;

