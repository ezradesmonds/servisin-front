import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

interface TopBarProps {
  title: string;
}

export function TopBar({ title }: TopBarProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  
  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : insets.top, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e2e2eb', width: '100%' }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ color: '#191b22', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <TouchableOpacity onPress={() => router.push('/technician/notifications')} style={{ position: 'relative' }}>
            <Feather name="bell" size={24} color="#00327d" />
            <View style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, borderRadius: 4, backgroundColor: '#e74c3c' }} />
          </TouchableOpacity>
          <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#d9d9e2', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16 }}>👨‍🔧</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
