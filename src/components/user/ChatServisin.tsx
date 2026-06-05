import React from "react";
import { View, ScrollView, Text, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export const ChatServisin = (props: any) => {
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
            paddingHorizontal: 24,
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View
            style={{
              marginBottom: 32,
            }}
          >
            <View
              style={{
                marginBottom: 24,
              }}
            >
              <Text
                style={{
                  color: "#003F87",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                {"Messages"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F2F3FC",
                borderRadius: 12,
                paddingVertical: 18,
                paddingHorizontal: 19,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/75kqh8q1_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 18,
                  height: 17,
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
                    color: "#6B7280",
                    fontSize: 16,
                  }}
                >
                  {"Search technicians or jobs..."}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <View
              style={{
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/8lband24_expires_30_days.png",
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
                    color: "#865300",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  {"Recent"}
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
                  marginRight: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/voblhl6u_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 56,
                    height: 56,
                    marginBottom: 7,
                  }}
                />
                <View
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: "#7EFBA4",
                    borderColor: "#F9F9FF",
                    borderRadius: 9999,
                    borderWidth: 2,
                    marginLeft: 40,
                  }}
                ></View>
              </View>
              <View
                style={{
                  marginRight: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/ccfnjmq1_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 56,
                    height: 56,
                    marginBottom: 7,
                  }}
                />
                <View
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: "#7EFBA4",
                    borderColor: "#F9F9FF",
                    borderRadius: 9999,
                    borderWidth: 2,
                    marginLeft: 40,
                  }}
                ></View>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/rg3w0kos_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 56,
                  height: 79,
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginBottom: 48,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#003F870D",
                borderRadius: 12,
                borderWidth: 1,
                paddingVertical: 1,
                marginBottom: 16,
                shadowColor: "#000000",
                shadowOpacity: 0.05,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 16,
                elevation: 4,
              }}
            >
              <View
                style={{
                  width: 4,
                  height: 108,
                  backgroundColor: "#865300",
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12,
                  marginLeft: 1,
                  marginRight: 12,
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 17,
                }}
              >
                <ImageBackground
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/njdwuz2c_expires_30_days.png",
                  }}
                  resizeMode={"cover"}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 12,
                    overflow: "hidden",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    marginRight: 16,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#004C24",
                      borderColor: "#FFFFFF",
                      borderRadius: 9999,
                      borderWidth: 2,
                      paddingVertical: 2,
                      paddingHorizontal: 6,
                      marginBottom: -5,
                      marginLeft: -5,
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 8,
                        fontWeight: "bold",
                      }}
                    >
                      {"Verified"}
                    </Text>
                  </View>
                </ImageBackground>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 4,
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
                          color: "#1E3A8A",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        {"Marcus Chen"}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "#865300",
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {"2 MIN AGO"}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: "#191C21",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {"I've arrived at the location,…"}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 4,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#003F871A",
                        borderRadius: 9999,
                        paddingVertical: 5,
                        paddingHorizontal: 8,
                        marginRight: 8,
                      }}
                    >
                      <Text
                        style={{
                          color: "#003F87",
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        {"AC Service"}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: "#865300",
                        borderRadius: 9999,
                        paddingVertical: 3,
                        paddingHorizontal: 6,
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        {"1"}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F2F3FC80",
                borderColor: "#00000000",
                borderRadius: 12,
                borderWidth: 1,
                padding: 17,
                marginBottom: 16,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/b5xuj6td_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 12,
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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      paddingVertical: 6,
                    }}
                  >
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {"Sarah Jenkins"}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#727784",
                      fontSize: 10,
                    }}
                  >
                    {"2:45 PM"}
                  </Text>
                </View>
                <View
                  style={{
                    paddingRight: 14,
                    marginBottom: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#727784",
                      fontSize: 14,
                    }}
                  >
                    {"Payment confirmed. Thank you…"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 4,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#E1E2EA",
                      borderRadius: 9999,
                      paddingVertical: 4,
                      paddingHorizontal: 8,
                      marginRight: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 10,
                      }}
                    >
                      {"Plumbing"}
                    </Text>
                  </View>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/8gsl9f8c_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 12,
                      height: 7,
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#00000000",
                borderRadius: 12,
                borderWidth: 1,
                padding: 17,
                marginBottom: 16,
                shadowColor: "#000000",
                shadowOpacity: 0.03,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 16,
                elevation: 4,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/rzvv6j2j_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 12,
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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 4,
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
                        color: "#1E3A8A",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {"David Miller"}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#727784",
                      fontSize: 10,
                    }}
                  >
                    {"YESTERDAY"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/jrwyhroz_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 10,
                      height: 10,
                      marginRight: 4,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-start",
                      paddingVertical: 3,
                    }}
                  >
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 14,
                      }}
                    >
                      {"Sent a photo of the electrical…"}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    paddingTop: 4,
                  }}
                >
                  <View
                    style={{
                      alignSelf: "flex-start",
                      backgroundColor: "#003F871A",
                      borderRadius: 9999,
                      paddingVertical: 5,
                      paddingHorizontal: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: "#003F87",
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {"Electrical"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                paddingVertical: 32,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/azvj39k2_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 48,
                  height: 42,
                  marginBottom: 12,
                }}
              />
              <View
                style={{
                  alignItems: "center",
                  paddingVertical: 2,
                }}
              >
                <Text
                  style={{
                    color: "#727784",
                    fontSize: 12,
                  }}
                >
                  {"Looking for older conversations? View Archive"}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        
      </View>
    </SafeAreaView>
  );
};

export default ChatServisin;

