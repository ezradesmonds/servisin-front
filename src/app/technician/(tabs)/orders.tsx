import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function TechnicianOrders() {
  const router = useRouter();

  const handleOrderPress = (id: string) => {
    router.push(`/technician/job/${id}`);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View style={{ padding: 16, paddingTop: 24, gap: 16, paddingBottom: 80 }}>
        
        {/* Header */}
        <View style={{ marginBottom: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#00327d' }}>Orders</Text>
          <Text style={{ fontSize: 14, color: '#64748b', marginTop: 4 }}>Manage your active and pending jobs</Text>
        </View>

        {/* Order Card 1 */}
        <TouchableOpacity onPress={() => handleOrderPress('9821')} style={{ backgroundColor: 'white', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
             <View style={{ backgroundColor: 'rgba(107, 254, 156, 0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 }}>
               <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#006d37' }}>IN PROGRESS</Text>
             </View>
             <Text style={{ fontSize: 12, fontWeight: '600', color: '#e74c3c' }}>02:45</Text>
           </View>

           <View style={{ flexDirection: 'row', gap: 12, marginBottom: 16 }}>
             <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#f0f0f9', justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ fontSize: 20 }}>🧑‍🔧</Text>
             </View>
             <View style={{ flex: 1 }}>
               <Text style={{ fontSize: 16, fontWeight: '600', color: '#191b22', marginBottom: 2 }}>Sarah Jenkins</Text>
               <Text style={{ fontSize: 12, color: '#64748b' }}>Appliance Repair</Text>
             </View>
           </View>

           <View style={{ backgroundColor: '#f8fafc', padding: 12, borderRadius: 8 }}>
             <Text style={{ fontSize: 12, color: '#434653', marginBottom: 4 }}>📍 8821 Oakwood Avenue, Beverly Hills</Text>
             <Text style={{ fontSize: 12, color: '#434653' }}>🕒 Today, 14:30</Text>
           </View>
        </TouchableOpacity>

        {/* Order Card 2 */}
        <TouchableOpacity onPress={() => handleOrderPress('9822')} style={{ backgroundColor: 'white', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
             <View style={{ backgroundColor: 'rgba(218, 226, 255, 0.5)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 }}>
               <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#00327d' }}>PENDING</Text>
             </View>
           </View>

           <View style={{ flexDirection: 'row', gap: 12, marginBottom: 16 }}>
             <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#f0f0f9', justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ fontSize: 20 }}>👨‍💼</Text>
             </View>
             <View style={{ flex: 1 }}>
               <Text style={{ fontSize: 16, fontWeight: '600', color: '#191b22', marginBottom: 2 }}>Michael Scott</Text>
               <Text style={{ fontSize: 12, color: '#64748b' }}>Plumbing Service</Text>
             </View>
           </View>

           <View style={{ backgroundColor: '#f8fafc', padding: 12, borderRadius: 8 }}>
             <Text style={{ fontSize: 12, color: '#434653', marginBottom: 4 }}>📍 1725 Slough Avenue, Scranton</Text>
             <Text style={{ fontSize: 12, color: '#434653' }}>🕒 Tomorrow, 09:00</Text>
           </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
