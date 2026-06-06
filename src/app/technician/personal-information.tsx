import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function PersonalInformation() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf8ff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e2e2eb' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
          <Feather name="arrow-left" size={24} color="#00327d" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191b22', marginLeft: 16 }}>Personal Information</Text>
      </View>

      <ScrollView style={{ padding: 16 }}>
        <View style={{ alignItems: 'center', marginVertical: 24 }}>
          <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#d9d9e2', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
             <Text style={{ fontSize: 40 }}>👨‍🔧</Text>
             <View style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#00327d', padding: 8, borderRadius: 20 }}>
               <Feather name="camera" size={16} color="white" />
             </View>
          </View>
        </View>

        <View style={{ gap: 16 }}>
          <View>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: 8 }}>Full Name</Text>
            <TextInput value="Budi Santoso" style={{ backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb', fontSize: 16, color: '#191b22' }} />
          </View>

          <View>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: 8 }}>Email</Text>
            <TextInput value="budi.technician@servisin.com" keyboardType="email-address" style={{ backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb', fontSize: 16, color: '#191b22' }} />
          </View>

          <View>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: 8 }}>Phone Number</Text>
            <TextInput value="+62 812 3456 7890" keyboardType="phone-pad" style={{ backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb', fontSize: 16, color: '#191b22' }} />
          </View>

          <View>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: 8 }}>Address</Text>
            <TextInput value="Jl. Sudirman No. 123, Jakarta Selatan" multiline style={{ backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb', fontSize: 16, color: '#191b22', minHeight: 100, textAlignVertical: 'top' }} />
          </View>
        </View>

        <TouchableOpacity style={{ backgroundColor: '#00327d', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginTop: 32, marginBottom: 40 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
