import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter, usePathname } from "expo-router";
// Using placeholder URLs since local assets are missing or svg is not supported

export const HeaderTop = (): React.JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const mainPages = ['/home', '/discover', '/chat', '/bookings', '/profile', '/'];
  const showBack = !mainPages.includes(pathname);

  return (
    <View style={{ width: '100%', backgroundColor: '#f8fafccc', paddingTop: 8 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingVertical: 16, width: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          {showBack && (
            <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 4 }}>
              <Text style={{ fontSize: 24, color: '#1e3a8a', fontWeight: 'bold' }}>{"←"}</Text>
            </TouchableOpacity>
          )}
          <Image
            style={{ width: 42, height: 42, borderRadius: 8 }}
            source={{ uri: "https://via.placeholder.com/150" }}
            contentFit="cover"
          />
          <Text style={{ fontWeight: '800', color: '#1e3a8a', fontSize: 19 }}>
            Servisin
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <TouchableOpacity style={{ padding: 8, borderRadius: 9999 }} onPress={() => router.push('/notification-page')}>
            <Image
              style={{ width: 20, height: 24 }}
              source={{ uri: "https://via.placeholder.com/150" }}
              contentFit="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#d7e2ff', borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: '#ffffff', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={{ uri: "https://via.placeholder.com/150" }}
              contentFit="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
