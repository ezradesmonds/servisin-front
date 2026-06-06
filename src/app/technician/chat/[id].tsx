import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [message, setMessage] = useState('');

  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-[#faf8ff]" 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Custom Chat Header */}
      <View style={{ paddingTop: Platform.OS === 'android' ? 24 : insets.top }} className="bg-white border-b border-[#e2e2eb]">
        <View className="px-4 py-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => router.back()} className="mr-4">
              <Text className="text-[#191b22] font-bold text-lg font-['Inter']">{'<'}</Text>
            </TouchableOpacity>
            <View className="w-10 h-10 bg-[#d9d9e2] rounded-full mr-3 items-center justify-center">
              <Text>👩</Text>
            </View>
            <View>
              <Text className="text-[#191b22] font-bold text-lg font-['Inter']">Sarah Jenkins</Text>
              <Text className="text-[#434653] text-xs font-['Inter']">Job #SC-8821</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 py-6">

        <View className="flex-row mb-6">
          <View className="w-8 h-8 bg-[#d9d9e2] rounded-full mr-3 items-center justify-center mt-1">
            <Text className="text-xs">👩</Text>
          </View>
          <View className="bg-white p-4 rounded-2xl rounded-tl-sm border border-[#e2e2eb] max-w-[80%] shadow-sm">
            <Text className="text-[#191b22] text-base font-['Inter']">Hi Alex! Just confirming our appointment for 2 PM today. Will you need access to the roof or just the indoor unit?</Text>
          </View>
        </View>

        <View className="flex-row justify-end mb-6">
          <View className="bg-[#00327d] p-4 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
            <Text className="text-white text-base font-['Inter']">Hello Sarah! I'll definitely need access to the outdoor compressor first, then I'll check the indoor filters.</Text>
          </View>
        </View>

        <View className="flex-row mb-6">
          <View className="w-8 h-8 bg-[#d9d9e2] rounded-full mr-3 items-center justify-center mt-1">
            <Text className="text-xs">👩</Text>
          </View>
          <View className="bg-white p-4 rounded-2xl rounded-tl-sm border border-[#e2e2eb] max-w-[80%] shadow-sm">
            <Text className="text-[#191b22] text-base font-['Inter'] mb-2">Here is the serial number on the unit just in case you need it beforehand.</Text>
            <View className="bg-[#f0f0f9] p-3 rounded-xl">
               <Text className="text-[#00327d] font-bold font-['Inter']">SN: 892-HVAC-91</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Input Area */}
      <View style={{ paddingBottom: insets.bottom > 0 ? insets.bottom : 16 }} className="bg-white border-t border-[#e2e2eb] px-4 py-3 flex-row items-center shadow-sm">
        <TextInput
          className="flex-1 bg-[#f0f0f9] rounded-xl px-4 py-3 text-[#191b22] font-['Inter'] mr-3 border border-[#ededf6]"
          placeholder="Type your message..."
          placeholderTextColor="#737784"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity className="w-12 h-12 bg-[#00327d] rounded-xl items-center justify-center shadow-sm">
          <Text className="text-white font-bold">➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
