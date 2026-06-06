import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function Notifications() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf8ff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e2e2eb' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
          <Feather name="arrow-left" size={24} color="#00327d" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191b22', marginLeft: 16 }}>Notifications</Text>
      </View>

      <ScrollView style={{ padding: 16 }}>
        <View style={{ gap: 12, paddingBottom: 40 }}>
          <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#e8f0fe', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#c3c6d5', gap: 16 }}>
             <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#00327d', justifyContent: 'center', alignItems: 'center' }}>
               <Feather name="bell" size={20} color="white" />
             </View>
             <View style={{ flex: 1 }}>
               <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191b22', marginBottom: 4 }}>New Job Request</Text>
               <Text style={{ fontSize: 14, color: '#434653', marginBottom: 4 }}>You have a new AC repair request in Senopati. Accept it before it expires.</Text>
               <Text style={{ fontSize: 12, color: '#64748b' }}>Just now</Text>
             </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb', gap: 16 }}>
             <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#e8f5e9', justifyContent: 'center', alignItems: 'center' }}>
               <Feather name="check-circle" size={20} color="#006d37" />
             </View>
             <View style={{ flex: 1 }}>
               <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191b22', marginBottom: 4 }}>Withdrawal Successful</Text>
               <Text style={{ fontSize: 14, color: '#434653', marginBottom: 4 }}>Rp 500.000 has been successfully transferred to your BCA account.</Text>
               <Text style={{ fontSize: 12, color: '#64748b' }}>2 hours ago</Text>
             </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb', gap: 16 }}>
             <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#fff3cd', justifyContent: 'center', alignItems: 'center' }}>
               <Feather name="star" size={20} color="#856404" />
             </View>
             <View style={{ flex: 1 }}>
               <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191b22', marginBottom: 4 }}>New 5-Star Review!</Text>
               <Text style={{ fontSize: 14, color: '#434653', marginBottom: 4 }}>Sarah J. left you a glowing 5-star review for the Wall Painting job.</Text>
               <Text style={{ fontSize: 12, color: '#64748b' }}>Yesterday</Text>
             </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
