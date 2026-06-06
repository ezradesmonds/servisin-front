import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TechnicianWallet() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View style={{ padding: 16, paddingTop: 24, gap: 24, paddingBottom: 80 }}>
        
        {/* Wallet Balance Card */}
        <View style={{ borderRadius: 16, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 }}>
          <LinearGradient
            colors={['#e2cb7a', '#8c6d1f']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ padding: 20, minHeight: 200, justifyContent: 'space-between' }}
          >
            <View>
              <Text style={{ fontSize: 12, fontWeight: '500', color: '#382c0e', textTransform: 'uppercase', marginBottom: 4 }}>MAIN BALANCE</Text>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
                <Text style={{ fontSize: 28, fontWeight: '900', color: '#2a2006' }}>Rp</Text>
                <Text style={{ fontSize: 24, fontWeight: '900', color: '#2a2006' }}>2.450.000</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 56 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <View style={{ backgroundColor: '#382c0e', padding: 8, borderRadius: 20 }}>
                  <Text style={{ fontSize: 12, color: 'white' }}>💼</Text>
                </View>
                <Text style={{ fontSize: 12, fontWeight: '600', color: '#382c0e' }}>Available for{'\n'}payout</Text>
              </View>
              
              <TouchableOpacity style={{ backgroundColor: '#00327d', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Withdraw{'\n'}Funds</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Income Summary */}
        <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.2)', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 8, elevation: 2 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#191b22' }}>Income Summary</Text>
            <View style={{ backgroundColor: '#dae2ff', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 }}>
              <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#00327d' }}>LAST 7 DAYS</Text>
            </View>
          </View>
          
          <View style={{ height: 144, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 }}>
             <View style={{ width: 37, height: 51, backgroundColor: 'rgba(218, 226, 255, 0.3)', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
             <View style={{ width: 37, height: 76, backgroundColor: 'rgba(218, 226, 255, 0.3)', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
             <View style={{ width: 37, height: 120, backgroundColor: '#00327d', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
             <View style={{ width: 37, height: 38, backgroundColor: 'rgba(218, 226, 255, 0.3)', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
             <View style={{ width: 37, height: 89, backgroundColor: 'rgba(218, 226, 255, 0.3)', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
             <View style={{ width: 37, height: 25, backgroundColor: 'rgba(218, 226, 255, 0.3)', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
             <View style={{ width: 37, height: 64, backgroundColor: 'rgba(218, 226, 255, 0.3)', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4 }}>
             <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>MON</Text>
             <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>TUE</Text>
             <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#00327d' }}>WED</Text>
             <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>THU</Text>
             <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>FRI</Text>
             <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>SAT</Text>
             <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>SUN</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={{ gap: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>RECENT ACTIVITY</Text>
            <TouchableOpacity>
               <Text style={{ fontSize: 12, fontWeight: '600', color: '#00327d' }}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.1)', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 8, elevation: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(46, 204, 113, 0.2)', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18 }}>✅</Text>
                </View>
                <View>
                   <Text style={{ fontSize: 18, fontWeight: '600', color: '#191b22' }}>AC Repair #9821</Text>
                   <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>OCT 24, 2023 • 14:30</Text>
                </View>
             </View>
             <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#006d37', marginBottom: 4 }}>+Rp 350.000</Text>
                <View style={{ backgroundColor: 'rgba(46, 204, 113, 0.2)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 }}>
                   <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#006d37' }}>SUCCESS</Text>
                </View>
             </View>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: 'rgba(195, 198, 213, 0.1)', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 8, elevation: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#e2e2eb', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18 }}>🔧</Text>
                </View>
                <View>
                   <Text style={{ fontSize: 18, fontWeight: '600', color: '#191b22' }}>Plumbing Service{'\n'}#9820</Text>
                   <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>OCT 24, 2023 • 11:15</Text>
                </View>
             </View>
             <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191b22', marginBottom: 4 }}>+Rp 120.000</Text>
                <View style={{ backgroundColor: '#e2e2eb', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 }}>
                   <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#434653' }}>PENDING</Text>
                </View>
             </View>
          </View>
          
          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 16, borderWidth: 2, borderColor: 'rgba(195, 198, 213, 0.3)', borderStyle: 'dashed', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(218, 226, 255, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18 }}>🏦</Text>
                </View>
                <View>
                   <Text style={{ fontSize: 18, fontWeight: '600', color: '#191b22' }}>Withdrawal to{'\n'}BCA</Text>
                   <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>OCT 23, 2023 • 09:00</Text>
                </View>
             </View>
             <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191b22', marginBottom: 4 }}>-Rp 1.000.000</Text>
                <View style={{ backgroundColor: 'rgba(46, 204, 113, 0.2)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 }}>
                   <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#006d37' }}>SUCCESS</Text>
                </View>
             </View>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: 'rgba(231, 76, 60, 0.1)', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 8, elevation: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#ffdad6', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18 }}>❌</Text>
                </View>
                <View>
                   <Text style={{ fontSize: 18, fontWeight: '600', color: '#191b22' }}>Electronic Repair{'\n'}#9819</Text>
                   <Text style={{ fontSize: 10, fontWeight: '600', color: '#64748b' }}>OCT 22, 2023 • 16:45</Text>
                </View>
             </View>
             <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#e74c3c', marginBottom: 4 }}>+Rp 450.000</Text>
                <View style={{ backgroundColor: '#e74c3c', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 }}>
                   <Text style={{ fontSize: 9, fontWeight: 'bold', color: 'white' }}>FAILED</Text>
                </View>
             </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
