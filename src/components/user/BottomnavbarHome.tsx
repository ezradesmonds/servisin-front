import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter, usePathname } from "expo-router";
import homeIcon from "./icon/home.svg";
import homeIconActive from "./icon/home-active.svg";
import calendarIcon from "./icon/calendar.svg";
import calendarIconActive from "./icon/calendar-active.svg";
import personIcon from "./icon/person.svg";
import personIconActive from "./icon/person-active.svg";
import magnifierIcon from "./icon/magnifier.svg";
import magnifierIconActive from "./icon/magnifier-active.svg";
import chatBubbleIcon from "./icon/chat_bubble.svg";
import chatBubbleIconActive from "./icon/chat_bubble-active.svg";

const navItems = [
  {
    label: "HOME",
    href: "/home",
    iconSrc: homeIcon,
    iconActive: homeIconActive,
  },
  {
    label: "DISCOVER",
    href: "/discover",
    iconSrc: magnifierIcon,
    iconActive: magnifierIconActive,
  },
  {
    label: "CHAT",
    href: "/chat",
    iconSrc: chatBubbleIcon,
    iconActive: chatBubbleIconActive,
  },
  {
    label: "BOOKINGS",
    href: "/bookings",
    iconSrc: calendarIcon,
    iconActive: calendarIconActive,
  },
  {
    label: "PROFILE",
    href: "/profile",
    iconSrc: personIcon,
    iconActive: personIconActive,
  },
];

import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const BottomnavbarHome = (): React.JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ flexDirection: 'row', width: '100%', height: 72, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 8, borderTopWidth: 1, borderTopColor: '#F1F5F9' }}>
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        const color = isActive ? '#003F87' : '#9CA3AF'; // Using gray or theme blue for text as fallback
        const iconStyle = isActive ? { opacity: 1, transform: [{scale: 1.15}] } : { opacity: 0.7 };

        return (
          <TouchableOpacity
            key={item.label}
            style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 64, paddingTop: 4 }}
            onPress={() => router.push(item.href as any)}
          >
            <View style={{ marginBottom: 4, ...iconStyle }}>
              <Image
                style={{ width: 24, height: 24 }}
                source={isActive ? item.iconActive : item.iconSrc}
                contentFit="contain"
              />
            </View>
            <Text style={{ fontSize: 10, fontWeight: isActive ? '800' : '600', color: color }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
