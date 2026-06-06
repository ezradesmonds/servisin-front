import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Switch } from "react-native";
import { router } from "expo-router";

export default function Onboarding2() {
  const [ownToolset, setOwnToolset] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["AC Repair"]);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const skills = [
    "AC Repair", "Plumbing", "Wall Painting", "Electrical Repair", "General Handyman"
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F9FC" }}>
      {/* Top Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 24, backgroundColor: "#F9F9FC" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1A1C1E" }}>Onboarding</Text>
        <View style={{ backgroundColor: "#D7E2FF", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "#003F87", textTransform: "uppercase" }}>Step 2 of 3</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 120 }}>
        
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 44, fontWeight: "bold", color: "#1A1C1E", lineHeight: 50, marginBottom: 16 }}>
            Professional{"\n"}Details.
          </Text>
          
          <View style={{ flexDirection: "row", height: 8, gap: 8 }}>
            <View style={{ flex: 1, backgroundColor: "#003F87", borderRadius: 4 }} />
            <View style={{ flex: 1, backgroundColor: "#003F87", borderRadius: 4 }} />
            <View style={{ flex: 0.5, backgroundColor: "#E2E2E5", borderRadius: 4 }} />
          </View>
        </View>

        <View style={{ gap: 32 }}>
          {/* Expertise */}
          <View style={{ gap: 16 }}>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#727784", textTransform: "uppercase", marginBottom: 4 }}>Expertise</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1A1C1E", marginBottom: 4 }}>What are your primary skills?</Text>
              <Text style={{ fontSize: 14, color: "#424752" }}>Select all that apply to your professional profile.</Text>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {skills.map((skill) => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <TouchableOpacity 
                    key={skill}
                    onPress={() => toggleSkill(skill)}
                    style={{ 
                      flexDirection: "row", 
                      alignItems: "center", 
                      backgroundColor: isSelected ? "#003F87" : "#FFFFFF", 
                      paddingHorizontal: 20, 
                      paddingVertical: 12, 
                      borderRadius: 8, 
                      borderWidth: isSelected ? 0 : 1, 
                      borderColor: "#E2E2E5",
                      gap: 8 
                    }}
                  >
                    {isSelected && <Text style={{ color: "#FFFFFF" }}>✓</Text>}
                    <Text style={{ fontSize: 16, fontWeight: "500", color: isSelected ? "#FFFFFF" : "#424752" }}>{skill}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Service Radius & Area */}
          <View style={{ backgroundColor: "#FFFFFF", padding: 24, borderRadius: 8, gap: 16 }}>
            <View>
              <Text style={{ fontSize: 11, fontWeight: "bold", color: "#727784", textTransform: "uppercase", marginBottom: 4 }}>Service Radius</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1A1C1E" }}>Coverage Limit</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 4 }}>
              <Text style={{ fontSize: 36, fontWeight: "bold", color: "#003F87" }}>20</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#727784", marginBottom: 4 }}>km</Text>
            </View>
            <View style={{ height: 8, backgroundColor: "#E8E8EA", borderRadius: 4, width: "100%", overflow: "hidden" }}>
              <View style={{ height: "100%", width: "50%", backgroundColor: "#003F87" }} />
            </View>

            <View style={{ marginTop: 16, padding: 16, backgroundColor: "#0056B3", borderRadius: 8 }}>
              <Text style={{ fontSize: 11, fontWeight: "bold", color: "#FFFFFF", textTransform: "uppercase", marginBottom: 4 }}>Districts</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF", marginBottom: 16 }}>Select Kecamatan</Text>
              <TouchableOpacity style={{ backgroundColor: "#FFFFFF", paddingVertical: 8, paddingHorizontal: 16, borderRadius: 4, alignSelf: "flex-start" }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#003F87" }}>Choose Areas</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Own Toolset */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#F3F3F6", padding: 20, borderRadius: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "#80F98B", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 24 }}>🛠️</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1A1C1E" }}>Own Toolset</Text>
                <Text style={{ fontSize: 12, color: "#424752" }}>I have my own professional tools</Text>
              </View>
            </View>
            <Switch 
              value={ownToolset} 
              onValueChange={setOwnToolset} 
              trackColor={{ false: "#C3C6D6", true: "#006E25" }}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Sticky Action */}
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: "rgba(255, 255, 255, 0.9)", flexDirection: "row", gap: 16 }}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={{ flex: 1, backgroundColor: "#E8E8EA", borderRadius: 8, paddingVertical: 16, alignItems: "center" }}
        >
          <Text style={{ color: "#1A1C1E", fontSize: 18, fontWeight: "bold" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => router.push("/technician/onboarding-3")}
          style={{ flex: 2, backgroundColor: "#003F87", borderRadius: 8, paddingVertical: 16, alignItems: "center" }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
