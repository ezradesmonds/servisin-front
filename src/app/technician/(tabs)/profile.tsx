import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function TechnicianProfile() {
  const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#faf8ff', padding: 16 }}>
      {/* Profile Header */}
      <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 24, alignItems: 'center', marginBottom: 24, borderWidth: 1, borderColor: '#e2e2eb', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 }}>
        <View style={{ width: 96, height: 96, backgroundColor: '#d9d9e2', borderRadius: 48, marginBottom: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 36 }}>👨‍🔧</Text>
        </View>
        <Text style={{ color: '#191b22', fontSize: 20, fontWeight: 'bold', marginBottom: 4 }}>Budi Santoso</Text>
        <Text style={{ color: '#434653', marginBottom: 12 }}>SERV - 9821</Text>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E8F5E9', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 9999 }}>
          <Text style={{ color: '#006d37', fontWeight: 'bold', fontSize: 12 }}>Verified Partner</Text>
        </View>
      </View>

      {/* Menu Options */}
      <Text style={{ color: '#191b22', fontWeight: 'bold', fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>Skill Specialties</Text>
      <View style={{ backgroundColor: 'white', borderRadius: 16, borderWidth: 1, borderColor: '#e2e2eb', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, elevation: 2, marginBottom: 24, padding: 16 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <View style={{ backgroundColor: '#f0f0f9', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, margin: 4 }}>
             <Text style={{ color: '#00327d', fontWeight: 'bold', fontSize: 14 }}>AC Repair</Text>
          </View>
          <View style={{ backgroundColor: '#f0f0f9', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, margin: 4 }}>
             <Text style={{ color: '#00327d', fontWeight: 'bold', fontSize: 14 }}>Plumbing</Text>
          </View>
          <View style={{ backgroundColor: '#f0f0f9', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, margin: 4 }}>
             <Text style={{ color: '#00327d', fontWeight: 'bold', fontSize: 14 }}>Electrical</Text>
          </View>
        </View>
      </View>

      <Text style={{ color: '#191b22', fontWeight: 'bold', fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>Account Settings</Text>
      <View style={{ backgroundColor: 'white', borderRadius: 16, borderWidth: 1, borderColor: '#e2e2eb', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, elevation: 2, marginBottom: 24 }}>
        <TouchableOpacity onPress={() => router.push('/technician/personal-information')} style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#e2e2eb', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#191b22', fontWeight: 'bold', fontSize: 16 }}>Personal Information</Text>
          <Text style={{ color: '#c3c6d5' }}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/technician/service-area')} style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#e2e2eb', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#191b22', fontWeight: 'bold', fontSize: 16 }}>Service Areas</Text>
          <Text style={{ color: '#c3c6d5' }}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/technician/bank-accounts')} style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#191b22', fontWeight: 'bold', fontSize: 16 }}>Bank Accounts</Text>
          <Text style={{ color: '#c3c6d5' }}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: '#191b22', fontWeight: 'bold', fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>Support</Text>
      <View style={{ backgroundColor: 'white', borderRadius: 16, borderWidth: 1, borderColor: '#e2e2eb', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, elevation: 2, marginBottom: 32 }}>
        <TouchableOpacity onPress={() => router.push('/technician/help-center')} style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#e2e2eb', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#191b22', fontWeight: 'bold', fontSize: 16 }}>Help Center</Text>
          <Text style={{ color: '#c3c6d5' }}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('/technician/login')} style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#ba1a1a', fontWeight: 'bold', fontSize: 16 }}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
