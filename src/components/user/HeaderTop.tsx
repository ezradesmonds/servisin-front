import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter, usePathname } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import logoIcon from "./icon/logo_servisin.png";

export const HeaderTop = (): React.JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const mainPages = ['/home', '/discover', '/chat', '/bookings', '/profile', '/'];
  const showBack = !mainPages.includes(pathname) && pathname !== '/all-services';

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/portofolio': return 'Portofolio';
      case '/review': return 'Reviews';
      case '/chat-room': return 'Chat Room';
      case '/my-address': return 'My Address';
      case '/help-center': return 'Help Center';
      case '/terms-conditions': return 'Terms & Conditions';
      case '/make-review': return 'Give Review';
      case '/service-detail': return 'Service Detail';
      case '/confirm-booking': return 'Confirm Booking';
      case '/payment': return 'Payment';
      case '/finish-payment': return 'Finish Payment';
      case '/transaction-detail': return 'Transaction Detail';
      case '/notification-page': return 'Notifications';
      case '/edit-profile': return 'Edit Profile';
      case '/subscription-page': return 'Subscription';
      case '/referral-program': return 'Referral Program';
      default: return 'Servisin';
    }
  };

  return (
    <View style={{ width: '100%', backgroundColor: '#FFFFFF', paddingTop: Math.max(insets.top, 64), paddingBottom: 8 }}>
      {pathname === '/all-services' ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, width: '100%', gap: 12 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ padding: 4 }}>
            <Text style={{ fontSize: 24, color: '#1e3a8a', fontWeight: 'bold' }}>{"←"}</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, backgroundColor: '#F2F3FC', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#64748b', fontSize: 14 }}>Search services...</Text>
          </View>
        </View>
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingVertical: 0, width: '100%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            {showBack && (
              <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 4 }}>
                <Text style={{ fontSize: 24, color: '#1e3a8a', fontWeight: 'bold' }}>{"←"}</Text>
              </TouchableOpacity>
            )}
            {!showBack && (
              <Image
                style={{ width: 42, height: 42, borderRadius: 8 }}
                source={logoIcon}
                contentFit="cover"
              />
            )}
            <Text style={{ fontWeight: '800', color: '#1e3a8a', fontSize: 19 }}>
              {showBack ? getPageTitle(pathname) : 'Servisin'}
            </Text>
          </View>
          {!showBack && (
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
          )}
        </View>
      )}
    </View>
  );
};
