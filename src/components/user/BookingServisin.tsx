import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';


export const BookingServisin = (props: any) => {
  const [activeTab, setActiveTab] = useState<"ongoing" | "completed">("ongoing");

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
          contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 24 }}
        >
          {/* Header Title */}
          <View
            style={{
              marginBottom: 32,
            }}
          >
            <View
              style={{
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#003F87",
                  fontSize: 36,
                  fontWeight: "bold",
                }}
              >
                {"My Bookings"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#424752",
                  fontSize: 14,
                }}
              >
                {"Track your ongoing services and history."}
              </Text>
            </View>
          </View>

          {/* Tabs */}
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F2F3FC",
              borderRadius: 16,
              padding: 6,
              marginBottom: 32,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: activeTab === "ongoing" ? "#FFFFFF" : "#FFFFFF00",
                borderRadius: 12,
                paddingVertical: 15,
                paddingHorizontal: 24,
                marginRight: 8,
                shadowColor: activeTab === "ongoing" ? "#000000" : "transparent",
                shadowOpacity: activeTab === "ongoing" ? 0.1 : 0,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 4,
                elevation: activeTab === "ongoing" ? 4 : 0,
              }}
              onPress={() => setActiveTab("ongoing")}
            >
              <Text
                style={{
                  color: activeTab === "ongoing" ? "#003F87" : "#424752",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Ongoing"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: activeTab === "completed" ? "#FFFFFF" : "#FFFFFF00",
                borderRadius: 12,
                paddingVertical: 15,
                paddingHorizontal: 25,
                shadowColor: activeTab === "completed" ? "#000000" : "transparent",
                shadowOpacity: activeTab === "completed" ? 0.1 : 0,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 4,
                elevation: activeTab === "completed" ? 4 : 0,
              }}
              onPress={() => setActiveTab("completed")}
            >
              <Text
                style={{
                  color: activeTab === "completed" ? "#003F87" : "#424752",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"Completed"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Content based on Tab */}
          {activeTab === "ongoing" ? (
            <View>
              {/* In Progress Item */}
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 24,
                  paddingVertical: 20,
                  paddingHorizontal: 24,
                  marginBottom: 24,
                  shadowColor: "#000000",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 8,
                  },
                  shadowRadius: 24,
                  elevation: 10,
                }}
              >
                <View
                  style={{
                    marginBottom: 24,
                  }}
                >
                  <View
                    style={{
                      alignItems: "flex-end",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#004C241A",
                        borderRadius: 9999,
                        paddingVertical: 7,
                        paddingHorizontal: 12,
                      }}
                    >
                      <View
                        style={{
                          width: 8,
                          height: 8,
                          backgroundColor: "#004C24",
                          borderRadius: 9999,
                          marginRight: 7,
                        }}
                      ></View>
                      <Text
                        style={{
                          color: "#004C24",
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        {"In Progress"}
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/cnv3jvcb_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      borderRadius: 24,
                      height: 128,
                    }}
                  />
                </View>
                <View>
                  <View>
                    <View
                      style={{
                        marginBottom: 8,
                      }}
                    >
                      <View
                        style={{
                          paddingBottom: 4,
                        }}
                      >
                        <Text
                          style={{
                            color: "#865300",
                            fontSize: 11,
                            fontWeight: "bold",
                          }}
                        >
                          {"HVAC Maintenance"}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: "#191C21",
                            fontSize: 20,
                            fontWeight: "bold",
                          }}
                        >
                          {"AC Deep Cleaning"}
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
                          flexDirection: "row",
                          alignItems: "center",
                          marginRight: 16,
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/0h0fn7z5_expires_30_days.png",
                          }}
                          resizeMode={"stretch"}
                          style={{
                            width: 10,
                            height: 10,
                            marginRight: 6,
                          }}
                        />
                        <View
                          style={{
                            paddingVertical: 4,
                            paddingHorizontal: 1,
                          }}
                        >
                          <Text
                            style={{
                              color: "#424752",
                              fontSize: 14,
                            }}
                          >
                            {"Marcus Chen"}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/p8vltfvt_expires_30_days.png",
                          }}
                          resizeMode={"stretch"}
                          style={{
                            width: 12,
                            height: 13,
                            marginRight: 5,
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
                              fontSize: 14,
                            }}
                          >
                            {"Today, 2:30 PM"}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      borderRadius: 12,
                      marginTop: 24,
                    }}
                    onPress={() => alert("Pressed!")}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#003F87", "#0056B3"]}
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 12,
                        paddingVertical: 14,
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/9ngszjf8_expires_30_days.png",
                        }}
                        resizeMode={"stretch"}
                        style={{
                          borderRadius: 12,
                          width: 15,
                          height: 15,
                          marginRight: 8,
                        }}
                      />
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        {"Contact Technician"}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Scheduled Item */}
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 24,
                  paddingVertical: 20,
                  paddingHorizontal: 24,
                  marginBottom: 24,
                  shadowColor: "#000000",
                  shadowOpacity: 0.1,
                  shadowOffset: {
                    width: 0,
                    height: 8,
                  },
                  shadowRadius: 24,
                  elevation: 10,
                }}
              >
                <View
                  style={{
                    marginBottom: 24,
                  }}
                >
                  <View
                    style={{
                      alignItems: "flex-end",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FEA5201A",
                        borderRadius: 9999,
                        paddingVertical: 7,
                        paddingHorizontal: 12,
                      }}
                    >
                      <View
                        style={{
                          width: 8,
                          height: 8,
                          backgroundColor: "#FEA520",
                          borderRadius: 9999,
                          marginRight: 7,
                        }}
                      ></View>
                      <Text
                        style={{
                          color: "#694000",
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        {"Scheduled"}
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/zipmxm20_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      borderRadius: 24,
                      height: 128,
                    }}
                  />
                </View>
                <View>
                  <View>
                    <View
                      style={{
                        marginBottom: 8,
                      }}
                    >
                      <View
                        style={{
                          paddingBottom: 4,
                        }}
                      >
                        <Text
                          style={{
                            color: "#865300",
                            fontSize: 11,
                            fontWeight: "bold",
                          }}
                        >
                          {"Plumbing Service"}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: "#191C21",
                            fontSize: 20,
                            fontWeight: "bold",
                          }}
                        >
                          {"Kitchen Sink Leak Repair"}
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
                          flexDirection: "row",
                          alignItems: "center",
                          marginRight: 16,
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/wojbkfux_expires_30_days.png",
                          }}
                          resizeMode={"stretch"}
                          style={{
                            width: 10,
                            height: 10,
                            marginRight: 6,
                          }}
                        />
                        <View
                          style={{
                            flex: 1,
                            alignItems: "flex-start",
                            paddingVertical: 4,
                          }}
                        >
                          <Text
                            style={{
                              color: "#424752",
                              fontSize: 14,
                            }}
                          >
                            {"Sarah Jenkins"}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/9l94qm42_expires_30_days.png",
                          }}
                          resizeMode={"stretch"}
                          style={{
                            width: 12,
                            height: 13,
                            marginRight: 5,
                          }}
                        />
                        <View
                          style={{
                            flex: 1,
                            paddingVertical: 3,
                          }}
                        >
                          <Text
                            style={{
                              color: "#424752",
                              fontSize: 14,
                            }}
                          >
                            {"Oct 24, 10:00 AM"}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: 24,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#E7E8F0",
                        borderRadius: 12,
                        paddingVertical: 14,
                        marginRight: 12,
                      }}
                      onPress={() => alert("Pressed!")}
                    >
                      <Image
                        source={{
                          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/rw5d5f6c_expires_30_days.png",
                        }}
                        resizeMode={"stretch"}
                        style={{
                          borderRadius: 12,
                          width: 13,
                          height: 15,
                          marginRight: 9,
                        }}
                      />
                      <Text
                        style={{
                          color: "#191C21",
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        {"Reschedule"}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={{
                          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/pg1fia8w_expires_30_days.png",
                        }}
                        resizeMode={"stretch"}
                        style={{
                          width: 48,
                          height: 48,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Completed Recently Section */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 16,
                  marginBottom: 24,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 3,
                    marginRight: 16,
                  }}
                >
                  <Text
                    style={{
                      color: "#94A3B8",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {"Completed Recently"}
                  </Text>
                </View>
                <View
                  style={{
                    height: 1,
                    flex: 1,
                    backgroundColor: "#E2E8F0",
                  }}
                ></View>
              </View>

              <View
                style={{
                  backgroundColor: "#F1F5F980",
                  borderRadius: 24,
                  padding: 24,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/10tlohgk_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 24,
                    height: 128,
                    marginBottom: 24,
                  }}
                />
                <View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          paddingBottom: 8,
                          marginRight: 36,
                        }}
                      >
                        <View
                          style={{
                            paddingBottom: 4,
                          }}
                        >
                          <Text
                            style={{
                              color: "#64748B",
                              fontSize: 11,
                              fontWeight: "bold",
                            }}
                          >
                            {"Electrical"}
                          </Text>
                        </View>
                        <View
                          style={{
                            paddingVertical: 4,
                          }}
                        >
                          <Text
                            style={{
                              color: "#191C21",
                              fontSize: 20,
                              fontWeight: "bold",
                            }}
                          >
                            {"Smart Lighting Install"}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: "#FFFFFF",
                          borderRadius: 8,
                          paddingVertical: 4,
                          paddingHorizontal: 8,
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/wjjxcmdq_expires_30_days.png",
                          }}
                          resizeMode={"stretch"}
                          style={{
                            borderRadius: 8,
                            width: 11,
                            height: 11,
                            marginRight: 4,
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
                              color: "#191C21",
                              fontSize: 12,
                              fontWeight: "bold",
                            }}
                          >
                            {"5.0"}
                          </Text>
                        </View>
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
                          flexDirection: "row",
                          alignItems: "center",
                          marginRight: 16,
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/waazluzw_expires_30_days.png",
                          }}
                          resizeMode={"stretch"}
                          style={{
                            width: 10,
                            height: 10,
                            marginRight: 6,
                          }}
                        />
                        <View
                          style={{
                            paddingVertical: 4,
                            paddingHorizontal: 1,
                          }}
                        >
                          <Text
                            style={{
                              color: "#424752",
                              fontSize: 14,
                            }}
                          >
                            {"David Miller"}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/vw2wkdsh_expires_30_days.png",
                          }}
                          resizeMode={"stretch"}
                          style={{
                            width: 12,
                            height: 12,
                            marginRight: 5,
                          }}
                        />
                        <View
                          style={{
                            paddingVertical: 4,
                            paddingHorizontal: 1,
                          }}
                        >
                          <Text
                            style={{
                              color: "#424752",
                              fontSize: 14,
                            }}
                          >
                            {"Finished Oct 20"}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#FFFFFF",
                      borderColor: "#C2C6D44D",
                      borderRadius: 12,
                      borderWidth: 1,
                      paddingVertical: 15,
                      marginTop: 24,
                    }}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/2uiddpw0_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        borderRadius: 12,
                        width: 15,
                        height: 15,
                        marginRight: 8,
                      }}
                    />
                    <Text
                      style={{
                        color: "#003F87",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {"Give Review"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View>
              {/* Completed Tab Content */}
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E2E8F0",
                  borderRadius: 12,
                  borderWidth: 1,
                  padding: 21,
                  marginBottom: 20,
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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#7EFBA4",
                        borderRadius: 9999,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        marginBottom: 4,
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/svrkwb6z_expires_30_days.png",
                        }}
                        resizeMode={"stretch"}
                        style={{
                          borderRadius: 9999,
                          width: 12,
                          height: 12,
                          marginRight: 7,
                        }}
                      />
                      <Text
                        style={{
                          color: "#00210C",
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        {"Completed"}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        alignItems: "center",
                        paddingVertical: 5,
                        marginBottom: 4,
                      }}
                    >
                      <Text
                        style={{
                          color: "#191C21",
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {"AC Deep Cleaning"}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        paddingVertical: 2,
                        paddingLeft: 1,
                        paddingRight: 12,
                      }}
                    >
                      <Text
                        style={{
                          color: "#424752",
                          fontSize: 12,
                        }}
                      >
                        {"May 12, 2024 • 10:00 AM"}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: "#865300",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {"$45.00"}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: "stretch",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#F2F3FC",
                    borderRadius: 12,
                    padding: 12,
                    marginBottom: 16,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/7rvj8vca_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 48,
                      height: 48,
                      marginRight: 16,
                      borderRadius: 12,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {"Technician"}
                    </Text>
                    <Text
                      style={{
                        color: "#191C21",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {"Marcus Chen"}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#FFFFFF",
                      borderRadius: 8,
                      paddingVertical: 4,
                      paddingHorizontal: 8,
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/nkm2ccz7_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        borderRadius: 8,
                        width: 11,
                        height: 11,
                        marginRight: 4,
                      }}
                    />
                    <Text
                      style={{
                        color: "#191C21",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {"5.0"}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 4,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignItems: "center",
                      backgroundColor: "#E1E2EA",
                      borderRadius: 12,
                      paddingVertical: 14,
                      marginRight: 12,
                    }}
                    onPress={() => router.push('/transaction-detail')}
                  >
                    <Text
                      style={{
                        color: "#191C21",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {"View Details"}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                    }}
                    onPress={() => alert("Pressed!")}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#003F87", "#0056B3"]}
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 12,
                        paddingVertical: 14,
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/4m690eny_expires_30_days.png",
                        }}
                        resizeMode={"stretch"}
                        style={{
                          borderRadius: 12,
                          width: 16,
                          height: 16,
                          marginRight: 9,
                        }}
                      />
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        {"Beri Ulasan"}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Completed Item 2 */}
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E2E8F0",
                  borderRadius: 12,
                  borderWidth: 1,
                  padding: 21,
                  marginBottom: 20,
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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#7EFBA4",
                        borderRadius: 9999,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        marginBottom: 4,
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/gv65i6q1_expires_30_days.png",
                        }}
                        resizeMode={"stretch"}
                        style={{
                          borderRadius: 9999,
                          width: 12,
                          height: 12,
                          marginRight: 7,
                        }}
                      />
                      <Text
                        style={{
                          color: "#00210C",
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        {"Completed"}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        alignItems: "center",
                        paddingVertical: 7,
                        marginBottom: 4,
                      }}
                    >
                      <Text
                        style={{
                          color: "#191C21",
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {"Garden Maintenance"}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        paddingVertical: 2,
                        paddingRight: 31,
                      }}
                    >
                      <Text
                        style={{
                          color: "#424752",
                          fontSize: 12,
                        }}
                      >
                        {"April 28, 2024 • 08:30 AM"}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: "#865300",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {"$72.00"}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: "stretch",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#F2F3FC",
                    borderRadius: 12,
                    padding: 12,
                    marginBottom: 16,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/l9376vyv_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 48,
                      height: 48,
                      marginRight: 16,
                      borderRadius: 12,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#424752",
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {"Technician"}
                    </Text>
                    <Text
                      style={{
                        color: "#191C21",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {"Sarah Johnson"}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#FFFFFF",
                      borderRadius: 8,
                      paddingVertical: 4,
                      paddingHorizontal: 8,
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/k5j7xuzo_expires_30_days.png",
                      }}
                        resizeMode={"stretch"}
                        style={{
                          borderRadius: 8,
                          width: 11,
                          height: 11,
                          marginRight: 4,
                        }}
                    />
                    <Text
                      style={{
                        color: "#191C21",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {"4.9"}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 4,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      alignItems: "center",
                      backgroundColor: "#E1E2EA",
                      borderRadius: 12,
                      paddingVertical: 14,
                      marginRight: 12,
                    }}
                    onPress={() => alert("Pressed!")}
                  >
                    <Text
                      style={{
                        color: "#191C21",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {"View Details"}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                    }}
                    onPress={() => alert("Pressed!")}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#003F87", "#0056B3"]}
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 12,
                        paddingVertical: 14,
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/3wr9zsu0_expires_30_days.png",
                        }}
                        resizeMode={"stretch"}
                        style={{
                          borderRadius: 12,
                          width: 16,
                          height: 16,
                          marginRight: 9,
                        }}
                      />
                      <Text
                        style={{
                          color: "#FFFFFF",
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        {"Beri Ulasan"}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          )}
        </ScrollView>

        
      </View>
    </SafeAreaView>
  );
};

export default BookingServisin;

