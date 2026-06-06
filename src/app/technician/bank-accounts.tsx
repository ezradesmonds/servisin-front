import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function BankAccounts() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf8ff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e2e2eb' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
          <Feather name="arrow-left" size={24} color="#00327d" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191b22', marginLeft: 16 }}>Bank Accounts</Text>
      </View>

      <ScrollView style={{ padding: 16 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#191b22', textTransform: 'uppercase', marginBottom: 12 }}>Primary Account</Text>
        <View style={{ backgroundColor: '#006d37', padding: 24, borderRadius: 16, marginBottom: 24, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 4 }}>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
             <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>BCA</Text>
             <Feather name="check-circle" size={20} color="white" />
           </View>
           <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, textTransform: 'uppercase', marginBottom: 4 }}>Account Number</Text>
           <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', letterSpacing: 2, marginBottom: 16 }}>**** **** 1234</Text>
           <Text style={{ color: 'white', fontSize: 14 }}>BUDI SANTOSO</Text>
        </View>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingVertical: 16, borderRadius: 12, borderWidth: 1, borderColor: '#c3c6d5', borderStyle: 'dashed', gap: 8 }}>
          <Feather name="plus" size={20} color="#00327d" />
          <Text style={{ color: '#00327d', fontWeight: 'bold', fontSize: 16 }}>Add Bank Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
