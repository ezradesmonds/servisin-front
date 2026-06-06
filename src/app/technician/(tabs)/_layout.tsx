import React from 'react';
import { Tabs } from 'expo-router';
import { BottomNavBar } from '@/components/technician/BottomNavBar';
import { TopBar } from '@/components/technician/TopBar';

export default function TechnicianTabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomNavBar {...props} />}
      screenOptions={{
        header: ({ route }) => {
          let title = 'Dashboard';
          if (route.name === 'orders') title = 'Orders';
          if (route.name === 'calendar') title = 'Calendar';
          if (route.name === 'wallet') title = 'Wallet';
          if (route.name === 'profile') title = 'Profile';
          return <TopBar title={title} />;
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
