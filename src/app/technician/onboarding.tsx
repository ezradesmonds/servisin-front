import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Switch, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function OnboardingUnified() {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState(1);

  // Step 2 state
  const [ownToolset, setOwnToolset] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["AC Repair"]);

  // Step 3 state
  const [basicRate, setBasicRate] = useState("");
  const [travelFee, setTravelFee] = useState("");
  const [emergencyFee, setEmergencyFee] = useState("");

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const skills = ["AC Repair", "Plumbing", "Wall Painting", "Electrical Repair", "General Handyman"];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.replace("/technician");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  };

  const renderStep1 = () => (
    <View style={{ gap: 24 }}>
      <View style={{ marginBottom: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <Text style={{ fontSize: 44, fontWeight: "900", color: "#1A1C1E", lineHeight: 50 }}>
            Identity{"\n"}Verification
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#006E25", marginTop: 8 }}>1/3</Text>
        </View>
        <View style={{ flexDirection: "row", height: 8, gap: 8, marginBottom: 16 }}>
          <View style={{ flex: 1, backgroundColor: "#003F87", borderRadius: 4 }} />
          <View style={{ flex: 1, backgroundColor: "#E2E2E5", borderRadius: 4 }} />
          <View style={{ flex: 1, backgroundColor: "#E2E2E5", borderRadius: 4 }} />
        </View>
        <Text style={{ fontSize: 16, color: "#424752", lineHeight: 24 }}>
          Please upload your identity and certification to start taking orders. Our team will verify your documents within 24 hours.
        </Text>
      </View>

      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase" }}>Identity Document</Text>
        <TouchableOpacity style={{ padding: 24, borderRadius: 8, backgroundColor: "#FFFFFF", borderWidth: 2, borderColor: "#C2C6D4", borderStyle: "dashed", alignItems: "center" }}>
          <View style={{ width: 64, height: 64, borderRadius: 12, backgroundColor: "#F3F3F6", justifyContent: "center", alignItems: "center", marginBottom: 16 }}>
            <Text style={{ fontSize: 24, color: "#003F87" }}>📄</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1A1C1E", marginBottom: 4 }}>Upload KTP</Text>
          <Text style={{ fontSize: 16, color: "#727784" }}>JPEG or PNG, Max 5MB</Text>
        </TouchableOpacity>
      </View>

      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase" }}>Professional Qualification</Text>
        <TouchableOpacity style={{ padding: 24, borderRadius: 8, backgroundColor: "#FFFFFF", borderWidth: 2, borderColor: "#C2C6D4", borderStyle: "dashed", alignItems: "center" }}>
          <View style={{ width: 64, height: 64, borderRadius: 12, backgroundColor: "#F3F3F6", justifyContent: "center", alignItems: "center", marginBottom: 16 }}>
            <Text style={{ fontSize: 24, color: "#003F87" }}>🎓</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1A1C1E", marginBottom: 4 }}>Certificate of Expertise</Text>
          <Text style={{ fontSize: 16, color: "#727784" }}>PDF or Image document</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", padding: 16, borderRadius: 8, backgroundColor: "#F3F3F6", gap: 16, alignItems: "flex-start" }}>
        <Text style={{ fontSize: 20 }}>🔒</Text>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#5B4300", textTransform: "uppercase", marginBottom: 4 }}>Privacy Note</Text>
          <Text style={{ fontSize: 14, color: "#424752", lineHeight: 20 }}>
            Your data is encrypted and used only for verification purposes according to our security protocols.
          </Text>
        </View>
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View style={{ gap: 24 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1A1C1E" }}>Onboarding</Text>
        <View style={{ backgroundColor: "#D7E2FF", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "#003F87", textTransform: "uppercase" }}>Step 2 of 3</Text>
        </View>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 44, fontWeight: "bold", color: "#1A1C1E", lineHeight: 50, marginBottom: 16 }}>
          Professional{"\n"}Details.
        </Text>
        <View style={{ flexDirection: "row", height: 8, gap: 8 }}>
          <View style={{ flex: 1, backgroundColor: "#003F87", borderRadius: 4 }} />
          <View style={{ flex: 1, backgroundColor: "#003F87", borderRadius: 4 }} />
          <View style={{ flex: 0.5, backgroundColor: "#E2E2E5", borderRadius: 4 }} />
        </View>
      </View>

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
              <TouchableOpacity key={skill} onPress={() => toggleSkill(skill)} style={{ flexDirection: "row", alignItems: "center", backgroundColor: isSelected ? "#003F87" : "#FFFFFF", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8, borderWidth: isSelected ? 0 : 1, borderColor: "#E2E2E5", gap: 8 }}>
                {isSelected && <Text style={{ color: "#FFFFFF" }}>✓</Text>}
                <Text style={{ fontSize: 16, fontWeight: "500", color: isSelected ? "#FFFFFF" : "#424752" }}>{skill}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

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
      </View>

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
        <Switch value={ownToolset} onValueChange={setOwnToolset} trackColor={{ false: "#C3C6D6", true: "#006E25" }} />
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View style={{ gap: 24 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#0056B3" }}>Onboarding</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          <Text style={{ color: "#1A1C1E" }}>PRO</Text>
          <Text style={{ color: "#0056B3" }}>FIELD</Text>
        </Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16 }}>
          <View>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#003F87", textTransform: "uppercase", marginBottom: 4 }}>Step 3 of 3</Text>
            <Text style={{ fontSize: 36, fontWeight: "bold", color: "#1A1C1E" }}>Service Pricing</Text>
          </View>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#006E25" }}>Finalizing</Text>
        </View>
        <View style={{ flexDirection: "row", height: 8, gap: 8 }}>
          <View style={{ flex: 1, backgroundColor: "#0056B3", borderRadius: 4 }} />
          <View style={{ flex: 1, backgroundColor: "#0056B3", borderRadius: 4 }} />
          <View style={{ flex: 1, backgroundColor: "#003F87", borderRadius: 4 }} />
        </View>
      </View>

      <View style={{ backgroundColor: "#FFFFFF", padding: 24, borderRadius: 8, gap: 24 }}>
        <View style={{ backgroundColor: "#80F98B", padding: 16, borderRadius: 8, alignSelf: "flex-start", marginBottom: 8 }}>
          <Text style={{ fontSize: 24 }}>💰</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1A1C1E", marginBottom: 8 }}>How it works</Text>
          <Text style={{ fontSize: 16, color: "#424752", lineHeight: 24 }}>
            Set your competitive rates below. We recommend matching the market average to get more initial bookings.
          </Text>
        </View>
        <View style={{ gap: 16 }}>
          <View>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase", marginBottom: 8 }}>Basic Rate (Hourly)</Text>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#F3F3F6", borderRadius: 8, paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#727784", marginRight: 8 }}>Rp</Text>
              <TextInput placeholder="0" value={basicRate} onChangeText={setBasicRate} keyboardType="numeric" style={{ flex: 1, paddingVertical: 16, fontSize: 16, color: "#1A1C1E" }} />
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase", marginBottom: 8 }}>Travel Fee (Per KM)</Text>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#F3F3F6", borderRadius: 8, paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#727784", marginRight: 8 }}>Rp</Text>
              <TextInput placeholder="0" value={travelFee} onChangeText={setTravelFee} keyboardType="numeric" style={{ flex: 1, paddingVertical: 16, fontSize: 16, color: "#1A1C1E" }} />
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#424752", textTransform: "uppercase", marginBottom: 8 }}>Emergency Fee (Optional)</Text>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#F3F3F6", borderRadius: 8, paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#727784", marginRight: 8 }}>Rp</Text>
              <TextInput placeholder="0" value={emergencyFee} onChangeText={setEmergencyFee} keyboardType="numeric" style={{ flex: 1, paddingVertical: 16, fontSize: 16, color: "#1A1C1E" }} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F9F9FC", paddingTop: insets.top }}>
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 120 }}>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </ScrollView>

      {/* Bottom Sticky Action */}
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24, paddingBottom: Math.max(insets.bottom, 24), backgroundColor: "rgba(255, 255, 255, 0.9)", flexDirection: "row", gap: 16 }}>
        {step > 1 && (
          <TouchableOpacity 
            onPress={handleBack}
            style={{ flex: 1, backgroundColor: "#E8E8EA", borderRadius: 8, paddingVertical: 16, alignItems: "center" }}
          >
            <Text style={{ color: "#1A1C1E", fontSize: 18, fontWeight: "bold" }}>Back</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity 
          onPress={handleNext}
          style={{ flex: 2, backgroundColor: step === 3 ? "#006E25" : "#003F87", borderRadius: 8, paddingVertical: 16, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 4 }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {step === 3 ? "Finish Onboarding" : "Next Step"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
