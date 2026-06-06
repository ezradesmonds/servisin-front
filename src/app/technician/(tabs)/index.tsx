import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function TechnicianDashboard() {
  const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#faf8ff' }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 80, gap: 24 }}>
        
        {/* Daily Earnings, Jobs, Rating */}
        <View style={{ height: 222 }}>
           <View style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: 20, borderRadius: 16, backgroundColor: 'white', borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 8, elevation: 2 }}>
             <Text style={{ fontSize: 12, fontWeight: '500', color: '#64748b', textTransform: 'uppercase', marginBottom: 4 }}>Daily Earnings</Text>
             <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#191b22', marginBottom: 4 }}>Rp 840.000</Text>
             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#006d37', fontWeight: 'bold', fontSize: 10 }}>↗ +12% from yesterday</Text>
             </View>
           </View>

           <View style={{ position: 'absolute', top: 126, left: 0, width: '48%', height: 96, padding: 16, borderRadius: 16, backgroundColor: '#00327d', justifyContent: 'space-between', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 }}>
             <Text style={{ fontSize: 12, fontWeight: '500', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>JOBS</Text>
             <Text style={{ fontSize: 22, fontWeight: '600', color: 'white' }}>12</Text>
           </View>

           <View style={{ position: 'absolute', top: 126, right: 0, width: '48%', height: 96, padding: 16, borderRadius: 16, backgroundColor: 'white', borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', justifyContent: 'space-between', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 8, elevation: 2 }}>
             <Text style={{ fontSize: 12, fontWeight: '500', color: '#64748b', textTransform: 'uppercase' }}>RATING</Text>
             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', color: '#191b22' }}>4.9</Text>
                <Text style={{ fontSize: 18 }}>⭐</Text>
             </View>
           </View>
        </View>

        {/* Live Map / Location Placeholder */}
        <View style={{ height: 128, borderRadius: 16, backgroundColor: '#d9d9e2', borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ position: 'absolute', top: 12, left: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.9)', gap: 8 }}>
            <Text style={{ fontSize: 12, fontWeight: '500', color: '#191b22' }}>📍 Senopati, South Jakarta</Text>
          </View>
          <View style={{ position: 'absolute', top: 12, right: 12, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, backgroundColor: '#00327d' }}>
            <Text style={{ fontSize: 10, fontWeight: '600', color: 'white' }}>LIVE</Text>
          </View>
          <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(0, 50, 125, 0.2)', justifyContent: 'center', alignItems: 'center' }}>
             <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#00327d', justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: 'white' }} />
          </View>
        </View>

        {/* New Request */}
        <View style={{ padding: 20, borderRadius: 16, backgroundColor: 'white', borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.5)', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 15, elevation: 4 }}>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
             <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
               <View style={{ backgroundColor: 'rgba(0, 50, 125, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
                 <Text style={{ color: '#00327d', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' }}>NEW REQUEST</Text>
               </View>
               <Text style={{ color: '#e74c3c', fontSize: 10, fontWeight: 'bold' }}>02:45</Text>
             </View>
             <View style={{ alignItems: 'flex-end' }}>
               <Text style={{ color: '#64748b', fontSize: 10, fontWeight: '600', textTransform: 'uppercase' }}>EST. INCOME</Text>
               <Text style={{ color: '#006d37', fontSize: 18, fontWeight: '600' }}>Rp 150k</Text>
             </View>
           </View>

           <Text style={{ fontSize: 22, fontWeight: '600', color: '#191b22', marginBottom: 8 }}>AC Service & Repair</Text>
           <Text style={{ fontSize: 14, color: '#64748b', marginBottom: 20 }}>🗺 2.5km • 12 mins away</Text>

           <View style={{ flexDirection: 'row', gap: 12 }}>
             <TouchableOpacity style={{ flex: 1, paddingVertical: 12, borderRadius: 12, borderWidth: 1, borderColor: '#e74c3c', alignItems: 'center' }}>
               <Text style={{ color: '#e74c3c', fontSize: 12, fontWeight: '600', textTransform: 'uppercase' }}>TOLAK</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{ flex: 2, paddingVertical: 12, borderRadius: 12, backgroundColor: '#006d37', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }}>
               <Text style={{ color: 'white', fontSize: 12, fontWeight: '600', textTransform: 'uppercase' }}>TERIMA</Text>
             </TouchableOpacity>
           </View>
        </View>

        {/* Recent Jobs */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#191b22' }}>Recent Jobs</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, fontWeight: '500', color: '#00327d' }}>View History</Text>
          </TouchableOpacity>
        </View>

        <View style={{ gap: 12 }}>
          <TouchableOpacity onPress={() => router.push('/technician/job/101')} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', gap: 16 }}>
             <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(226, 226, 235, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ fontSize: 20 }}>🔧</Text>
             </View>
             <View style={{ flex: 1 }}>
               <Text style={{ fontSize: 16, fontWeight: '600', color: '#191b22', marginBottom: 4 }}>Pipe Leakage Repair</Text>
               <Text style={{ fontSize: 14, color: '#64748b' }}>Kemang Pratama • Rp 210.000</Text>
             </View>
             <Text style={{ fontSize: 12, fontWeight: '500', color: '#191b22' }}>14:20</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/technician/job/102')} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', gap: 16 }}>
             <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(226, 226, 235, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ fontSize: 20 }}>⚡</Text>
             </View>
             <View style={{ flex: 1 }}>
               <Text style={{ fontSize: 16, fontWeight: '600', color: '#191b22', marginBottom: 4 }}>Circuit Breaker Replacement</Text>
               <Text style={{ fontSize: 14, color: '#64748b' }}>Sudirman Tower • Rp 350.000</Text>
             </View>
             <Text style={{ fontSize: 12, fontWeight: '500', color: '#191b22' }}>11:05</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/technician/job/103')} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', gap: 16 }}>
             <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(226, 226, 235, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ fontSize: 20 }}>🎨</Text>
             </View>
             <View style={{ flex: 1 }}>
               <Text style={{ fontSize: 16, fontWeight: '600', color: '#191b22', marginBottom: 4 }}>Wall Painting Service</Text>
               <Text style={{ fontSize: 14, color: '#64748b' }}>Menteng Res. • Rp 520.000</Text>
             </View>
             <Text style={{ fontSize: 12, fontWeight: '500', color: '#64748b' }}>Yesterday</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
