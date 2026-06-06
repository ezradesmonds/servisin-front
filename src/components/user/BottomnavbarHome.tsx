import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import homeIcon from "./icon/home.svg";
import calendarIcon from "./icon/calendar.svg";
import personIcon from "./icon/person.svg";
import magnifierIcon from "./icon/magnifier.svg";
import chatBubbleIcon from "./icon/chat_bubble.svg";

const navItems = [
  {
    label: "HOME",
    href: "/home",
    iconSrc: homeIcon,
  },
  {
    label: "DISCOVER",
    href: "/discover",
    iconSrc: magnifierIcon,
  },
  {
    label: "CHAT",
    href: "/chat",
    iconSrc: chatBubbleIcon,
  },
  {
    label: "BOOKINGS",
    href: "/bookings",
    iconSrc: calendarIcon,
  },
  {
    label: "PROFILE",
    href: "/profile",
    iconSrc: personIcon,
  },
];

import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const BottomnavbarHome = (): React.JSX.Element => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flexDirection: 'row', width: '100%', height: 72, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 8 }}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.label}
          style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 64 }}
          onPress={() => router.push(item.href as any)}
        >
          <Image
            style={{ width: 24, height: 24, marginBottom: 4 }}
            source={item.iconSrc}
            contentFit="contain"
          />
          <Text style={{ fontSize: 10, fontWeight: '500', color: '#64748b', marginTop: 4 }}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
