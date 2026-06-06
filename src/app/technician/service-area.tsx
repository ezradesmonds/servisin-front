import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function ServiceArea() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf8ff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e2e2eb' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
          <Feather name="arrow-left" size={24} color="#00327d" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191b22', marginLeft: 16 }}>Service Areas</Text>
      </View>

      <ScrollView style={{ padding: 16 }}>
        <View style={{ backgroundColor: '#00327d', padding: 24, borderRadius: 16, marginBottom: 24 }}>
           <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 8 }}>Current Coverage</Text>
           <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>20 KM</Text>
           <Text style={{ color: 'white', fontSize: 14, marginTop: 4 }}>from your base location</Text>
        </View>

        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#191b22', textTransform: 'uppercase', marginBottom: 12 }}>Active Districts</Text>
        <View style={{ backgroundColor: 'white', borderRadius: 16, borderWidth: 1, borderColor: '#e2e2eb', padding: 16, gap: 16 }}>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f0f0f9', paddingBottom: 16 }}>
             <View>
               <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191b22' }}>Jakarta Selatan</Text>
               <Text style={{ fontSize: 14, color: '#64748b' }}>Kebayoran Baru, Senopati, Kemang</Text>
             </View>
             <Feather name="check-circle" size={24} color="#006d37" />
           </View>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f0f0f9', paddingBottom: 16 }}>
             <View>
               <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191b22' }}>Jakarta Pusat</Text>
               <Text style={{ fontSize: 14, color: '#64748b' }}>Menteng, Sudirman, Thamrin</Text>
             </View>
             <Feather name="check-circle" size={24} color="#006d37" />
           </View>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
             <View>
               <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191b22' }}>Jakarta Barat</Text>
               <Text style={{ fontSize: 14, color: '#64748b' }}>Kebon Jeruk, Puri Indah</Text>
             </View>
             <Feather name="circle" size={24} color="#c3c6d5" />
           </View>
        </View>

        <TouchableOpacity style={{ backgroundColor: '#e8f0fe', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginTop: 24, marginBottom: 40 }}>
          <Text style={{ color: '#00327d', fontWeight: 'bold', fontSize: 16 }}>+ Add New Area</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
