import React from 'react';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomnavbarHome } from '../../components/user/BottomnavbarHome';
import { HeaderTop } from '../../components/user/HeaderTop';

export default function TabsLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }} edges={['bottom']}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <HeaderTop />
        <Tabs
          backBehavior="history"
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
          <Tabs.Screen name="edit-profile" options={{ href: null }} />
          <Tabs.Screen name="subscription-page" options={{ href: null }} />
          <Tabs.Screen name="referral-program" options={{ href: null }} />
          <Tabs.Screen name="portofolio" options={{ href: null }} />
          <Tabs.Screen name="review" options={{ href: null }} />
          <Tabs.Screen name="chat-room" options={{ href: null }} />
          <Tabs.Screen name="my-address" options={{ href: null }} />
          <Tabs.Screen name="help-center" options={{ href: null }} />
          <Tabs.Screen name="terms-conditions" options={{ href: null }} />
          <Tabs.Screen name="make-review" options={{ href: null }} />
        </Tabs>
      </View>
    </SafeAreaView>
  );
}
