import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export default function HelpCenter() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const faqs = [
    { q: "How do I withdraw my earnings?", a: "You can withdraw your earnings from the Wallet tab by clicking the Withdraw button. It takes 1-2 business days to process." },
    { q: "What happens if a customer cancels?", a: "If a customer cancels within 24 hours of the scheduled time, you will receive a cancellation fee compensation." },
    { q: "How to increase my service radius?", a: "You can update your coverage limit in Profile > Service Areas." },
    { q: "How to handle a dispute?", a: "Contact our call center immediately if you encounter any issues on site." },
  ];

  const filteredFaqs = faqs.filter(faq => faq.q.toLowerCase().includes(search.toLowerCase()));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf8ff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e2e2eb' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
          <Feather name="arrow-left" size={24} color="#00327d" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#191b22', marginLeft: 16 }}>Help Center</Text>
      </View>

      <ScrollView style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', paddingHorizontal: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb', marginBottom: 24 }}>
          <Feather name="search" size={20} color="#64748b" />
          <TextInput 
            placeholder="Search FAQs..." 
            value={search}
            onChangeText={setSearch}
            style={{ flex: 1, paddingVertical: 16, paddingHorizontal: 12, fontSize: 16, color: '#191b22' }}
          />
        </View>

        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#191b22', textTransform: 'uppercase', marginBottom: 12 }}>Contact Us</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#e8f0fe', padding: 16, borderRadius: 12, marginBottom: 32, gap: 16 }}>
           <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#00327d', justifyContent: 'center', alignItems: 'center' }}>
             <Feather name="phone-call" size={20} color="white" />
           </View>
           <View>
             <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#00327d' }}>Call Center</Text>
             <Text style={{ fontSize: 14, color: '#00327d' }}>24/7 Support Available</Text>
           </View>
        </TouchableOpacity>

        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#191b22', textTransform: 'uppercase', marginBottom: 12 }}>Frequently Asked Questions</Text>
        <View style={{ gap: 16, paddingBottom: 40 }}>
          {filteredFaqs.map((faq, index) => (
            <View key={index} style={{ backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e2eb' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#191b22', marginBottom: 8 }}>{faq.q}</Text>
              <Text style={{ fontSize: 14, color: '#434653', lineHeight: 20 }}>{faq.a}</Text>
            </View>
          ))}
          {filteredFaqs.length === 0 && (
            <Text style={{ textAlign: 'center', color: '#64748b', marginTop: 24 }}>No FAQs found for "{search}"</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
