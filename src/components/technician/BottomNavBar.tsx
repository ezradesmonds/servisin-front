import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons } from '@expo/vector-icons';

export function BottomNavBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View 
        style={{ 
          flexDirection: 'row', 
          backgroundColor: 'white', 
          borderTopWidth: 1, 
          borderTopColor: 'rgba(195, 198, 213, 0.3)', 
          borderTopLeftRadius: 16, 
          borderTopRightRadius: 16, 
          paddingBottom: Math.max(insets.bottom, 16), 
          paddingTop: 12, 
          paddingHorizontal: 8, 
          justifyContent: 'space-between', 
          elevation: 10, 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: -2 }, 
          shadowOpacity: 0.05, 
          shadowRadius: 4 
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          
          let label = 'Home';
          if (route.name === 'orders') label = 'Orders';
          if (route.name === 'calendar') label = 'Calendar';
          if (route.name === 'wallet') label = 'Wallet';
          if (route.name === 'profile') label = 'Profile';

          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
            if (!isFocused && !event.defaultPrevented) { navigation.navigate(route.name, route.params); }
          };

          const color = isFocused ? '#0047AB' : '#434653';

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
              <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12, backgroundColor: isFocused ? 'rgba(107, 254, 156, 0.2)' : 'transparent' }}>
                <View style={{ marginBottom: 4 }}>
                  {route.name === 'index' && (
                    <Feather name="home" size={20} color={color} />
                  )}
                  {route.name === 'orders' && (
                    <Feather name="package" size={20} color={color} />
                  )}
                  {route.name === 'calendar' && (
                    <Feather name="calendar" size={20} color={color} />
                  )}
                  {route.name === 'wallet' && (
                    <Ionicons name="wallet-outline" size={20} color={color} />
                  )}
                  {route.name === 'profile' && (
                    <Feather name="user" size={20} color={color} />
                  )}
                </View>
                <Text style={{ fontSize: 10, fontWeight: '600', color: isFocused ? '#0047ab' : '#434653' }}>{label}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
