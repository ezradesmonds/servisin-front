import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function JobDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: '#faf8ff' }}>
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 16, 
        paddingVertical: 16, 
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 16 : insets.top + 16,
        backgroundColor: 'white', 
        borderBottomWidth: 1, 
        borderBottomColor: 'rgba(195, 198, 213, 0.3)' 
      }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
          <Text style={{ fontSize: 16, color: '#00327d', fontWeight: 'bold' }}>{'< Back'}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191b22', marginLeft: 16 }}>Job #{id}</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16, gap: 20, paddingBottom: 100 }}>
          
          {/* Customer Profile Card */}
          <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
            <View style={{ flexDirection: 'row', gap: 16 }}>
              <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#e2e2eb', borderWidth: 2, borderColor: 'rgba(0, 50, 125, 0.1)', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 28 }}>👩</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191b22', marginBottom: 4 }}>Sarah Jenkins</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                   <Text style={{ fontSize: 14 }}>⭐</Text>
                   <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#191b22' }}>4.8</Text>
                   <Text style={{ fontSize: 14, color: '#64748b' }}>(24 reviews)</Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 16, paddingTop: 16, borderTopWidth: 1, borderTopColor: 'rgba(195, 198, 213, 0.3)', gap: 12 }}>
              <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0, 50, 125, 0.1)', paddingVertical: 12, borderRadius: 12, alignItems: 'center' }}>
                 <Text style={{ color: '#00327d', fontWeight: 'bold' }}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0, 50, 125, 0.1)', paddingVertical: 12, borderRadius: 12, alignItems: 'center' }}>
                 <Text style={{ color: '#00327d', fontWeight: 'bold' }}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Job Info */}
          <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.3)', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', marginBottom: 16 }}>JOB DETAILS</Text>
            
            <View style={{ gap: 16 }}>
              <View>
                <Text style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>Service Type</Text>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#191b22' }}>Appliance Repair (Washing Machine)</Text>
              </View>

              <View>
                <Text style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>Location</Text>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#191b22' }}>8821 Oakwood Avenue, Beverly Hills, CA 90210</Text>
                <Text style={{ fontSize: 12, color: '#0047ab', marginTop: 4, fontWeight: '600' }}>Get Directions ↗</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>Scheduled Time</Text>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#191b22' }}>14:30 - 15:30</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>Est. Income</Text>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#006d37' }}>Rp 150.000</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: '#fff3cd', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#ffe69c' }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#664d03', marginBottom: 4 }}>Customer Note:</Text>
            <Text style={{ fontSize: 14, color: '#664d03' }}>The washing machine is making a loud noise during the spin cycle and not draining properly.</Text>
          </View>

        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 16, paddingBottom: Math.max(insets.bottom, 16), borderTopWidth: 1, borderTopColor: 'rgba(195, 198, 213, 0.3)', elevation: 20 }}>
         <TouchableOpacity style={{ backgroundColor: '#006d37', paddingVertical: 16, borderRadius: 12, alignItems: 'center' }}>
           <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Start Job</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}
