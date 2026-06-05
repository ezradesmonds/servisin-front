import React from 'react';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { BottomnavbarHome } from '../../components/user/BottomnavbarHome';
import { HeaderTop } from '../../components/user/HeaderTop';

export default function TabsLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <HeaderTop />
      <Tabs
        tabBar={() => <BottomnavbarHome />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen name="home" />
        <Tabs.Screen name="discover" />
        <Tabs.Screen name="chat" />
        <Tabs.Screen name="bookings" />
        <Tabs.Screen name="profile" />
        <Tabs.Screen name="all-services" options={{ href: null }} />
        <Tabs.Screen name="service-detail" options={{ href: null }} />
        <Tabs.Screen name="confirm-booking" options={{ href: null }} />
        <Tabs.Screen name="payment" options={{ href: null }} />
        <Tabs.Screen name="finish-payment" options={{ href: null }} />
        <Tabs.Screen name="transaction-detail" options={{ href: null }} />
        <Tabs.Screen name="notification-page" options={{ href: null }} />
      </Tabs>
    </View>
  );
}
